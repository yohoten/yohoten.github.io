---
title: MNIST 数据集和手写数字的模型训练
date: 2024-12-02 12:00:00
tags:
  - 深度学习
  - PyTorch
  - MNIST
  - 神经网络
  - 学习笔记
categories:
  - 学习笔记
description: 介绍 MNIST 手写数字数据集的结构与下载方式，并用 PyTorch 分别训练含一个、两个、三个隐藏层的全连接网络和一个两层卷积网络，对比它们在测试集上的准确率。
cover: /images/mnist-sample-image.png
---

## 一、MNIST 数据集

MNIST 数据集包含 70000 张手写数字的灰度图像，分为以下两部分：

- 训练集：60,000 张图像
- 测试集：10,000 张图像

其中，每张图像是 28×28 像素，表示一个手写的数字（0 到 9），即每张图像有 784（28×28）个像素点，每个像素的值是一个从 0 到 255 的灰度值。

MNIST 数据集有四个文件（下载时是 .gz 压缩包格式，约 11M，会自动解压缩）：

- train-images-idx3-ubyte（训练集图像）
- train-labels-idx1-ubyte（训练集标签）
- t10k-images-idx3-ubyte（测试集图像）
- t10k-labels-idx1-ubyte（测试集标签）

## 二、下载数据集与查看图片

下载 MNIST 数据集和查看图片的 Python 代码如下：

```python
"""
This code is supported by the website: https://www.guanjihuan.com
The newest version of this code is on the web page: https://www.guanjihuan.com/archives/43720
"""

from torchvision import datasets, transforms

transform = transforms.Compose([transforms.ToTensor()]) # 定义数据预处理步骤（转换为Tensor）
train_dataset = datasets.MNIST(root='./data', train=True, download=True, transform=transform) # 加载 MNIST 数据集，训练集
print(type(train_dataset))
size_of_train_dataset = len(train_dataset)
print(size_of_train_dataset)
test_dataset = datasets.MNIST(root='./data', train=False, download=True, transform=transform) # 加载 MNIST 数据集，测试集
print(type(test_dataset))
size_of_test_dataset = len(test_dataset)
print(size_of_test_dataset)

import random
rand_number = random.randint(0, size_of_train_dataset-1)
image, label = train_dataset[rand_number] # 获取一张图像和标签
print(type(image))
print(image.shape)
image = image.squeeze(0)  # 去掉单通道的维度 (1, 28, 28) -> (28, 28)
print(type(image))
print(image.shape)

import matplotlib.pyplot as plt
# import os
# os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE" # 解决可能的多个 OpenMP 库版本冲突的问题。如果有 OMP 报错，可以试着使用这个解决。
plt.imshow(image, cmap='gray') # 显示图像
plt.title(f"Label: {label}")  # 标签值（理论值）
plt.axis('off')  # 不显示坐标轴
plt.show()
```

某次的运行结果为：

![用 plt.imshow 显示的一张 MNIST 样本图像，标题为 Label: 5](/images/mnist-sample-image.png)

## 三、用神经网络训练

以下是使用神经网络进行训练的 Python 代码。这里对模型进行了包装，需要用到软件包 <https://py.guanjihuan.com>（`pip install --upgrade guan`）。

```python
"""
This code is supported by the website: https://www.guanjihuan.com
The newest version of this code is on the web page: https://www.guanjihuan.com/archives/43720
"""

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
from torchvision import datasets, transforms

transform = transforms.Compose([transforms.ToTensor(),transforms.Normalize((0.5,), (0.5,))])  # 数据转换（将图片转换为 Tensor 并进行归一化处理，均值和标准差为 0.5）
train_dataset = datasets.MNIST(root='./data', train=True, download=True, transform=transform) # 下载训练数据集
test_dataset = datasets.MNIST(root='./data', train=False, download=True, transform=transform) # 下载测试数据集

# 训练函数
def train(model, train_loader, criterion, optimizer, num_epochs=5):
    for epoch in range(num_epochs):
        model.train()
        running_loss = 0.0
        correct = 0
        total = 0
        for images, labels in train_loader:
            # print(images.shape)
            optimizer.zero_grad()  # 清除以前的梯度
            outputs = model(images) # 前向传播
            loss = criterion(outputs, labels)
            loss.backward() # 反向传播和优化
            optimizer.step()
            running_loss += loss.item()
            _, predicted = torch.max(outputs, 1) # 计算准确率
            total += labels.size(0)
            correct += (predicted == labels).sum().item()
        avg_loss = running_loss / len(train_loader)
        accuracy = 100 * correct / total
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {avg_loss:.4f}, Accuracy: {accuracy:.2f}%')

# 测试函数
def test(model, test_loader):
    model.eval()  # 设置为评估模式
    correct = 0
    total = 0
    with torch.no_grad():  # 禁用梯度计算
        for images, labels in test_loader:
            outputs = model(images)
            _, predicted = torch.max(outputs, 1)
            total += labels.size(0)
            correct += (predicted == labels).sum().item()
    accuracy = 100 * correct / total
    print(f'Test Accuracy: {accuracy:.2f}%')

# 训练和测试
def train_and_test(model, train_loader, test_loader):
    criterion = nn.CrossEntropyLoss()  # 交叉熵损失
    optimizer = optim.Adam(model.parameters(), lr=0.001)
    train(model, train_loader, criterion, optimizer, num_epochs=10)
    test(model, test_loader)

# 扁平化数据，并重建 DataLoader（用于全连接神经网络输入端的数据处理）
def flatten_data(data_loader):
    images_array = []
    labels_array = []
    for images, labels in data_loader:
        images = torch.flatten(images, start_dim=1) # 除去batch维度后，其他维度展平
        images_array.append(images)
        labels_array.append(labels)
    images_array = torch.cat(images_array, dim=0)
    labels_array = torch.cat(labels_array, dim=0)
    dataset_new = TensorDataset(images_array, labels_array)
    loader_new = DataLoader(dataset_new, batch_size=64, shuffle=True)
    return loader_new

# 数据加载器
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=64, shuffle=False)

# 扁平化数据
train_loader_new = flatten_data(train_loader)
test_loader_new = flatten_data(test_loader)

# 安装软件包：pip install --upgrade guan
import guan

hidden_size = 64

print('---全连接神经网络模型（包含一个隐藏层）---')
model = guan.fully_connected_neural_network_with_one_hidden_layer(input_size=28*28, hidden_size=hidden_size, output_size=10, activation='relu')
train_and_test(model, train_loader_new, test_loader_new)

print('---全连接神经网络模型（包含两个隐藏层）---')
model = guan.fully_connected_neural_network_with_two_hidden_layers(input_size=28*28, hidden_size_1=hidden_size, hidden_size_2=hidden_size, output_size=10, activation_1='relu', activation_2='relu')
train_and_test(model, train_loader_new, test_loader_new)

print('---全连接神经网络模型（包含三个隐藏层）---')
model = guan.fully_connected_neural_network_with_three_hidden_layers(input_size=28*28, hidden_size_1=hidden_size, hidden_size_2=hidden_size, hidden_size_3=hidden_size, output_size=10, activation_1='relu', activation_2='relu', activation_3='relu')
train_and_test(model, train_loader_new, test_loader_new)

print('---卷积神经网络模型（包含两个卷积层和两个全连接层）---')
model = guan.convolutional_neural_network_with_two_convolutional_layers_and_two_fully_connected_layers(in_channels=1, out_channels_1=32, out_channels_2=64, kernel_size_1=3, kernel_size_2=3, stride_1=1, stride_2=1, padding_1=1, padding_2=1, pooling=1, pooling_kernel_size=2, pooling_stride=2, input_size=7*7*64, hidden_size_1=hidden_size, hidden_size_2=hidden_size, output_size=10)
train_and_test(model, train_loader, test_loader)
```

运行结果：

```text
---全连接神经网络模型（包含一个隐藏层）---
Epoch [1/10], Loss: 0.4376, Accuracy: 87.51%
Epoch [2/10], Loss: 0.2560, Accuracy: 92.49%
Epoch [3/10], Loss: 0.1936, Accuracy: 94.25%
Epoch [4/10], Loss: 0.1555, Accuracy: 95.38%
Epoch [5/10], Loss: 0.1328, Accuracy: 95.98%
Epoch [6/10], Loss: 0.1193, Accuracy: 96.41%
Epoch [7/10], Loss: 0.1087, Accuracy: 96.68%
Epoch [8/10], Loss: 0.0996, Accuracy: 96.97%
Epoch [9/10], Loss: 0.0945, Accuracy: 97.03%
Epoch [10/10], Loss: 0.0872, Accuracy: 97.30%
Test Accuracy: 96.75%
---全连接神经网络模型（包含两个隐藏层）---
Epoch [1/10], Loss: 0.4167, Accuracy: 87.95%
Epoch [2/10], Loss: 0.2170, Accuracy: 93.50%
Epoch [3/10], Loss: 0.1611, Accuracy: 95.21%
Epoch [4/10], Loss: 0.1338, Accuracy: 95.92%
Epoch [5/10], Loss: 0.1114, Accuracy: 96.56%
Epoch [6/10], Loss: 0.1002, Accuracy: 96.88%
Epoch [7/10], Loss: 0.0903, Accuracy: 97.16%
Epoch [8/10], Loss: 0.0802, Accuracy: 97.48%
Epoch [9/10], Loss: 0.0759, Accuracy: 97.59%
Epoch [10/10], Loss: 0.0699, Accuracy: 97.80%
Test Accuracy: 96.71%
---全连接神经网络模型（包含三个隐藏层）---
Epoch [1/10], Loss: 0.4567, Accuracy: 86.16%
Epoch [2/10], Loss: 0.2217, Accuracy: 93.27%
Epoch [3/10], Loss: 0.1686, Accuracy: 94.78%
Epoch [4/10], Loss: 0.1442, Accuracy: 95.54%
Epoch [5/10], Loss: 0.1276, Accuracy: 96.07%
Epoch [6/10], Loss: 0.1132, Accuracy: 96.55%
Epoch [7/10], Loss: 0.1007, Accuracy: 96.86%
Epoch [8/10], Loss: 0.0944, Accuracy: 96.96%
Epoch [9/10], Loss: 0.0863, Accuracy: 97.27%
Epoch [10/10], Loss: 0.0816, Accuracy: 97.39%
Test Accuracy: 96.74%
---卷积神经网络模型（包含两个卷积层和两个全连接层）---
Epoch [1/10], Loss: 0.1923, Accuracy: 93.92%
Epoch [2/10], Loss: 0.0522, Accuracy: 98.41%
Epoch [3/10], Loss: 0.0349, Accuracy: 98.92%
Epoch [4/10], Loss: 0.0278, Accuracy: 99.11%
Epoch [5/10], Loss: 0.0228, Accuracy: 99.28%
Epoch [6/10], Loss: 0.0177, Accuracy: 99.41%
Epoch [7/10], Loss: 0.0148, Accuracy: 99.51%
Epoch [8/10], Loss: 0.0127, Accuracy: 99.58%
Epoch [9/10], Loss: 0.0118, Accuracy: 99.64%
Epoch [10/10], Loss: 0.0080, Accuracy: 99.75%
Test Accuracy: 99.14%
```

## 四、附：手写数字识别动图

![手写数字识别演示：左侧手写输入，右侧网络输出 0 到 9 的判别结果](/images/mnist-handwriting-demo.gif)

---

参考资料：<https://www.guanjihuan.com/archives/43720>
