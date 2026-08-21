/* ============================================================
   作品集分页（showcase-pagination）
   每页展示 6 张项目卡片，超过一页自动启用分页。
   仅当页面存在 showcase-grid 与分页容器时才运行，不影响其他页面。
   ============================================================ */
(function () {
  'use strict';

  var grid = document.querySelector('.showcase-grid');
  var pager = document.getElementById('showcasePagination');
  if (!grid || !pager) return; // 非作品集页面直接跳过

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.showcase-card'));
  var PER_PAGE = 6;
  var totalPages = Math.max(1, Math.ceil(cards.length / PER_PAGE));
  var current = 1;

  // 读取 URL hash（如 #page-2），支持刷新/分享保持页码
  var hashMatch = location.hash.match(/^#page-(\d+)$/);
  if (hashMatch) current = parseInt(hashMatch[1], 10);
  if (isNaN(current) || current < 1) current = 1;
  if (current > totalPages) current = totalPages;

  function renderPager() {
    var html = '';
    html += '<button type="button" class="sp-btn sp-prev"' + (current === 1 ? ' disabled' : '') + ' data-page="' + (current - 1) + '"><i class="fas fa-chevron-left"></i>上一页</button>';
    for (var p = 1; p <= totalPages; p++) {
      html += '<button type="button" class="sp-btn sp-num' + (p === current ? ' active' : '') + '" data-page="' + p + '">' + p + '</button>';
    }
    html += '<button type="button" class="sp-btn sp-next"' + (current === totalPages ? ' disabled' : '') + ' data-page="' + (current + 1) + '">下一页<i class="fas fa-chevron-right"></i></button>';
    html += '<span class="sp-info">第 ' + current + ' / ' + totalPages + ' 页</span>';
    pager.innerHTML = html;
  }

  function showPage(n) {
    if (n < 1 || n > totalPages) return;
    current = n;
    var start = (n - 1) * PER_PAGE;
    var end = start + PER_PAGE;
    cards.forEach(function (card, i) {
      card.style.display = (i >= start && i < end) ? '' : 'none';
    });
    renderPager();
    // 更新 URL hash，方便刷新/分享保持页码
    if (history.replaceState) {
      history.replaceState(null, '', n === 1 ? location.pathname + location.search : '#page-' + n);
    }
  }

  pager.addEventListener('click', function (e) {
    var btn = e.target;
    while (btn && btn !== pager && !(btn.classList && btn.classList.contains('sp-btn'))) {
      btn = btn.parentNode;
    }
    if (!btn || btn.disabled) return;
    showPage(parseInt(btn.getAttribute('data-page'), 10));
  });

  showPage(current);
})();
