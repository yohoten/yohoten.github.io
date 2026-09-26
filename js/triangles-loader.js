/* ============================================================
 * triangles-loader —— 把三角形脉冲动画挂到两处等待态
 *   1) #loading-database：首次点开搜索框加载 search.xml
 *   2) 懒加载图片：在图片所属容器上覆盖占位，加载完成后移除
 * ============================================================ */
(function () {
  'use strict'

  // invert 顺序需与动画原结构保持一致：4 个正三角、5 个倒三角
  var PATTERN = [true, true, false, true, true, false, true, false, true]

  function buildLoader (variantClass) {
    var wrap = document.createElement('div')
    wrap.className = 'triangles' + (variantClass ? ' ' + variantClass : '')
    wrap.setAttribute('aria-hidden', 'true')
    var html = ''
    for (var i = 0; i < PATTERN.length; i++) {
      html += '<div class="tri' + (PATTERN[i] ? ' invert' : '') + '"></div>'
    }
    wrap.innerHTML = html
    return wrap
  }

  /* ---------- 1) 搜索数据加载 ---------- */
  function bindSearchLoader () {
    var box = document.getElementById('loading-database')
    if (!box || box.dataset.trisLoader) return
    box.dataset.trisLoader = '1'

    var spinner = box.querySelector('.fa-spinner')
    if (spinner) spinner.style.display = 'none'

    box.insertBefore(buildLoader('triangles--inline'), box.firstChild)
  }

  /* ---------- 2) 懒加载图片占位 ---------- */
  // 不为行内图片（<p><img>）注入：父容器在图片加载前高度为 0，
  // 占位既不可见又会挡住正文。只在运行时确有高度的容器上覆盖。
  var MIN_HOST_HEIGHT = 48
  var MAX_DEPTH = 5 // 最多向上找 5 层，避免把占位丢到整个内容区这种过大的容器上

  function findHost (img) {
    var STOP_IDS = { 'content-inner': 1, 'aside-content': 1, 'body': 1 }
    var node = img.parentElement
    var depth = 0
    while (node && depth < MAX_DEPTH) {
      if (STOP_IDS[node.id] || node.tagName === 'HTML') return null
      if (node.dataset.trisLoader) return null
      if (node.getBoundingClientRect().height >= MIN_HOST_HEIGHT) return node
      node = node.parentElement
      depth++
    }
    return null
  }

  function bindImageLoader () {
    var imgs = document.querySelectorAll('img[data-lazy-src]:not(.loaded):not(.error)')
    for (var i = 0; i < imgs.length; i++) {
      (function (img) {
        var host = findHost(img)
        if (!host) return

        host.dataset.trisLoader = '1'
        if (host.style.position === '' || host.style.position === 'static') {
          var computed = window.getComputedStyle(host).position
          if (computed === 'static') host.style.position = 'relative'
        }

        var small = host.getBoundingClientRect().height < 120
        var loader = buildLoader('triangles--overlay' + (small ? ' triangles--sm' : ''))
        host.appendChild(loader)

        var clear = function () {
          if (loader.parentNode) loader.parentNode.removeChild(loader)
          delete host.dataset.trisLoader
        }
        img.addEventListener('load', clear, { once: true })
        img.addEventListener('error', clear, { once: true })
        setTimeout(clear, 15000) // 兜底，避免极端情况下永久占位
      })(imgs[i])
    }
  }

  function init () {
    bindSearchLoader()
    bindImageLoader()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
  // 懒加载脚本可能晚于本脚本替换图片 src，load 后再扫一遍补漏
  window.addEventListener('load', init)
})()
