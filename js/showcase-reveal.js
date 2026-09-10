/* ============================================================
   作品集卡片滚动显现动画（showcase-reveal）
   借鉴 mem.ac 的 reveal-on-scroll：卡片淡入 + 上移
   仅当页面存在 showcase-grid 时才运行，不影响其他页面。

   与分页协作：
   - 分页隐藏（display:none）的卡片不会触发显现
   - 切换页码变为可见后，由 IntersectionObserver 自动触发显现
   无 IntersectionObserver 或系统减少动态效果时优雅降级为直接显示。
   ============================================================ */
(function () {
  'use strict';

  var grid = document.querySelector('.showcase-grid');
  if (!grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.showcase-card'));
  if (!cards.length) return;

  // 无 IntersectionObserver 时直接显示（优雅降级）
  if (!('IntersectionObserver' in window)) {
    cards.forEach(function (card) { card.classList.add('reveal-in'); });
    return;
  }

  // 尊重系统「减少动态效果」设置：直接显示，不播放动画
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach(function (card) { card.classList.add('reveal-in'); });
    return;
  }

  cards.forEach(function (card) {
    card.classList.add('reveal');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -6% 0px' });

  cards.forEach(function (card) { io.observe(card); });
})();
