/* ============================================================
   作品集 / 小口袋 分页 + 类型筛选（showcase-pagination）

   行为：
   - 每页 6 张卡片；不足一页时自动隐藏分页条
   - 页面若存在 #showcaseFilter（小口袋页），先按卡片 data-badge 过滤，
     再对「过滤后的结果」分页，避免出现「第 1/2 页却只有一张卡」
   - 没有筛选栏的页面（如作品集页）行为与原来完全一致
   - 支持 URL hash（#page-2）分享/刷新保持页码
   ============================================================ */
(function () {
  'use strict';

  var grid = document.querySelector('.showcase-grid');
  var pager = document.getElementById('showcasePagination');
  if (!grid || !pager) return; // 非作品集/小口袋页面直接跳过

  var PER_PAGE = 9; // 作品集 8 张、小口袋筛选后多数类别单页可放完，避免强制翻页
  var allCards = Array.prototype.slice.call(grid.querySelectorAll('.showcase-card'));
  var filterBar = document.getElementById('showcaseFilter');
  var emptyTip = document.getElementById('showcaseEmpty');
  var filter = 'all';
  var current = 1;

  function cardsOfFilter() {
    if (!filterBar || filter === 'all') return allCards;
    return allCards.filter(function (card) {
      return (card.getAttribute('data-badge') || '') === filter;
    });
  }

  // 把每个筛选项的卡片数量写进 chip（避免手写数字过期）
  function paintCounts() {
    if (!filterBar) return;
    Array.prototype.forEach.call(filterBar.querySelectorAll('.filter-chip'), function (chip) {
      var out = chip.querySelector('.filter-count');
      if (!out) return;
      var key = chip.getAttribute('data-filter') || 'all';
      var n = key === 'all' ? allCards.length : allCards.filter(function (card) {
        return (card.getAttribute('data-badge') || '') === key;
      }).length;
      out.textContent = n;
    });
  }

  function renderPager(total) {
    if (total <= 1) {
      pager.innerHTML = '';
      pager.style.display = 'none';
      return;
    }
    pager.style.display = '';
    var html = '';
    html += '<button type="button" class="sp-btn sp-prev"' + (current === 1 ? ' disabled' : '') + ' data-page="' + (current - 1) + '"><i class="fas fa-chevron-left"></i>上一页</button>';
    for (var p = 1; p <= total; p++) {
      html += '<button type="button" class="sp-btn sp-num' + (p === current ? ' active' : '') + '" data-page="' + p + '">' + p + '</button>';
    }
    html += '<button type="button" class="sp-btn sp-next"' + (current === total ? ' disabled' : '') + ' data-page="' + (current + 1) + '">下一页<i class="fas fa-chevron-right"></i></button>';
    html += '<span class="sp-info">第 ' + current + ' / ' + total + ' 页 · 共 ' + cardsOfFilter().length + ' 个</span>';
    pager.innerHTML = html;
  }

  function render() {
    var visible = cardsOfFilter();
    var total = Math.max(1, Math.ceil(visible.length / PER_PAGE));
    if (current > total) current = total;
    if (current < 1) current = 1;

    var start = (current - 1) * PER_PAGE;
    var end = start + PER_PAGE;
    allCards.forEach(function (card) {
      var pos = visible.indexOf(card); // -1 表示被筛掉
      card.style.display = (pos >= start && pos < end) ? '' : 'none';
    });

    if (emptyTip) emptyTip.style.display = visible.length ? 'none' : 'block';
    renderPager(total);

    // 更新 URL hash，方便刷新/分享保持页码（筛选状态下回到首页，清掉 hash）
    if (history.replaceState) {
      history.replaceState(null, '', (total <= 1 || current === 1)
        ? location.pathname + location.search
        : '#page-' + current);
    }
  }

  function showPage(n) {
    if (isNaN(n) || n < 1) return;
    current = n;
    render();
  }

  // 分页条点击：只响应真正的 .sp-btn，点空白区域不翻页
  pager.addEventListener('click', function (e) {
    var btn = e.target;
    while (btn && btn !== pager && !(btn.classList && btn.classList.contains('sp-btn'))) {
      btn = btn.parentNode;
    }
    if (!btn || btn === pager || btn.disabled) return;
    showPage(parseInt(btn.getAttribute('data-page'), 10));
  });

  // 筛选栏点击
  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      var chip = e.target;
      while (chip && chip !== filterBar && !(chip.classList && chip.classList.contains('filter-chip'))) {
        chip = chip.parentNode;
      }
      if (!chip || chip === filterBar) return;
      var key = chip.getAttribute('data-filter') || 'all';
      if (key === filter) return;
      Array.prototype.forEach.call(filterBar.querySelectorAll('.filter-chip'), function (c) {
        c.classList.toggle('active', c === chip);
      });
      filter = key;
      current = 1;
      render();
    });
  }

  // 读取 URL hash（如 #page-2）
  var hashMatch = location.hash.match(/^#page-(\d+)$/);
  if (hashMatch) current = parseInt(hashMatch[1], 10);
  if (isNaN(current) || current < 1) current = 1;

  paintCounts();
  render();
})();
