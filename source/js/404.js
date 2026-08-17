/* ============================================================
   Yohoten's Blog - 404 页面增强脚本（幽灵 404 风格）
   仅在 404 页面（存在 #error-wrap）时执行，其他页面自动跳过
   ============================================================ */
(function () {
  var wrap = document.getElementById('error-wrap')
  if (!wrap) return

  var content = wrap.querySelector('.error-content')

  // 1. 移除失效的背景图区块
  var imgBox = wrap.querySelector('.error-img')
  if (imgBox && imgBox.parentNode) imgBox.parentNode.removeChild(imgBox)

  // 2. 注入幽灵（白色身体 + 波浪裙摆 + 双眼）
  if (content) {
    var ghost = document.createElement('div')
    ghost.className = 'e404-ghost'
    ghost.innerHTML =
      '<div class="e404-ghost__body">' +
      '<i class="e404-ghost__eye e404-ghost__eye--l"></i>' +
      '<i class="e404-ghost__eye e404-ghost__eye--r"></i>' +
      '</div>'
    content.insertBefore(ghost, content.firstChild)
  }

  // 3. 副标题设为打字机文字
  var subtitle = wrap.querySelector('.error_subtitle')
  if (subtitle) subtitle.textContent = 'Got lost? How.....? why.....? Ahhhh....'

  // 4. 生成星光粒子
  var starCount = Math.min(70, Math.max(24, Math.floor(window.innerWidth / 16)))
  var frag = document.createDocumentFragment()
  for (var i = 0; i < starCount; i++) {
    var star = document.createElement('i')
    star.className = 'e404-star'
    var size = (Math.random() * 2.5 + 1.5).toFixed(1)
    star.style.width = size + 'px'
    star.style.height = size + 'px'
    star.style.left = Math.random() * 100 + '%'
    star.style.top = Math.random() * 100 + '%'
    star.style.animationDuration = (Math.random() * 2.5 + 1.5).toFixed(2) + 's'
    star.style.animationDelay = (Math.random() * 3).toFixed(2) + 's'
    frag.appendChild(star)
  }
  wrap.appendChild(frag)

  // 5. 注入操作按钮组
  var info = wrap.querySelector('.error-info')
  if (info) {
    var actions = document.createElement('div')
    actions.className = 'e404-actions'
    actions.innerHTML =
      '<a class="e404-btn e404-btn--primary" href="/"><i class="fas fa-home"></i>返回首页</a>' +
      '<a class="e404-btn e404-btn--ghost" href="/archives/"><i class="fas fa-archive"></i>浏览归档</a>' +
      '<button class="e404-btn e404-btn--ghost" id="e404-search" type="button"><i class="fas fa-search"></i>站内搜索</button>'
    info.appendChild(actions)
  }

  // 6. 站内搜索：唤起主题自带的搜索框
  var searchBtn = document.getElementById('e404-search')
  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      var target = document.querySelector('#search-button > .search')
      if (target) target.click()
    })
  }
})()
