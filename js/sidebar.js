// 动态渲染产品二级分类侧边栏，支持展开/收起动画

document.addEventListener('DOMContentLoaded', function() {
  const sidebarNav = document.getElementById('sidebar-groups');
  let expanded = new Set();
  let currentKey = null;

  // 让菜单点击时联动主内容区
  function triggerContent(key) {
    if (window.renderMain) window.renderMain(key);
  }

  function renderSidebar() {
    sidebarNav.innerHTML = '';
    sidebarGroups.forEach(group => {
      // 分组容器
      const groupDiv = document.createElement('div');
      groupDiv.className = 'sidebar-group';
      // 分组标题
      const titleDiv = document.createElement('div');
      titleDiv.className = 'sidebar-group-title';
      if (group.icon) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'sidebar-group-icon';
        iconSpan.textContent = group.icon;
        titleDiv.appendChild(iconSpan);
      }
      titleDiv.appendChild(document.createTextNode(group.title));
      groupDiv.appendChild(titleDiv);
      // 一级列表
      const ul = document.createElement('ul');
      ul.className = 'sidebar-list';
      (group.items || []).forEach(item => {
        const li = document.createElement('li');
        li.className = 'sidebar-item' + (currentKey === item.key ? ' active' : '');
        // 判断是否有二级
        if (item.items && item.items.length > 0) {
          // 可展开项
          const link = document.createElement('a');
          link.href = '#';
          link.className = 'sidebar-link';
          link.innerHTML = `<span>${item.label}</span>`;
          link.onclick = function(e) {
            e.preventDefault();
            if (expanded.has(item.key)) {
              expanded.delete(item.key);
            } else {
              expanded.add(item.key);
            }
            renderSidebar();
            triggerContent(item.key);
          };
          // 展开箭头
          const expand = document.createElement('span');
          expand.className = 'sidebar-expand' + (expanded.has(item.key) ? ' open' : '');
          expand.innerHTML = '<svg width="13" height="13" viewBox="0 0 16 16"><polyline points="4,6 8,10 12,6" fill="none" stroke="#7a869a" stroke-width="2" stroke-linecap="round"/></svg>';
          link.appendChild(expand);
          li.appendChild(link);
          // 二级菜单
          const subUl = document.createElement('ul');
          subUl.className = 'sidebar-sublist';
          if (expanded.has(item.key)) {
            subUl.style.maxHeight = '500px';
            subUl.style.opacity = '1';
          } else {
            subUl.style.maxHeight = '0';
            subUl.style.opacity = '0';
          }
          item.items.forEach(subItem => {
            const subLi = document.createElement('li');
            subLi.className = 'sidebar-subitem' + (currentKey === subItem.key ? ' active' : '');
            const subLink = document.createElement('a');
            subLink.href = '#';
            subLink.className = 'sidebar-sublink';
            subLink.textContent = subItem.label;
            subLink.onclick = function(e) {
              e.preventDefault();
              currentKey = subItem.key;
              renderSidebar();
              triggerContent(subItem.key);
            };
            subLi.appendChild(subLink);
            subUl.appendChild(subLi);
          });
          li.appendChild(subUl);
          if (expanded.has(item.key)) li.classList.add('expanded');
        } else {
          // 普通项
          const link = document.createElement('a');
          link.href = '#';
          link.className = 'sidebar-link';
          link.textContent = item.label;
          link.onclick = function(e) {
            e.preventDefault();
            currentKey = item.key;
            renderSidebar();
            triggerContent(item.key);
          };
          li.appendChild(link);
        }
        if (currentKey === item.key) li.classList.add('active');
        ul.appendChild(li);
      });
      groupDiv.appendChild(ul);
      sidebarNav.appendChild(groupDiv);
    });
  }

  renderSidebar();
});
