// 产品中心页面脚本：左侧分类菜单 + 右侧内容区（无面包屑导航）

document.addEventListener('DOMContentLoaded', function() {
    // 分类菜单生成
    const sidebarList = document.getElementById('products-sidebar-list');
    // const breadcrumb = document.getElementById('products-breadcrumb'); // 已移除
    const mainContent = document.getElementById('products-main-content');
    let currentCategoryKey = Object.keys(productsData)[0];

    function renderSidebar(selectedKey) {
        sidebarList.innerHTML = '';
        Object.entries(productsData).forEach(([key, cat]) => {
            const li = document.createElement('li');
            li.className = 'products-sidebar-item';
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = cat.title;
            link.className = 'products-sidebar-link' + (key === selectedKey ? ' active' : '');
            link.dataset.key = key;
            link.onclick = function(e) {
                e.preventDefault();
                if (currentCategoryKey !== key) {
                    currentCategoryKey = key;
                    renderSidebar(currentCategoryKey);
                    renderMain(currentCategoryKey);
                }
            };
            li.appendChild(link);
            sidebarList.appendChild(li);
        });
    }

    // 移除 renderBreadcrumb

    function renderMain(categoryKey) {
        const cat = productsData[categoryKey];
        // 不再渲染面包屑
        mainContent.innerHTML = '';
        // 分类标题
        const h2 = document.createElement('h2');
        h2.className = 'products-category-title';
        h2.textContent = cat.title;
        mainContent.appendChild(h2);
        // 分类简介
        if (cat.description) {
            const desc = document.createElement('div');
            desc.className = 'products-category-desc';
            desc.textContent = cat.description;
            mainContent.appendChild(desc);
        }
        // 产品网格
        const grid = document.createElement('div');
        grid.className = 'products-grid';
        (cat.items || []).forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.tabIndex = 0;
            // 图片
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            img.onclick = function(e) {
                e.stopPropagation();
                showProductModal(product);
            };
            card.appendChild(img);
            // 名称
            const h3 = document.createElement('h3');
            h3.textContent = product.name;
            card.appendChild(h3);
            // 详情文本
            const descDiv = document.createElement('div');
            descDiv.className = 'product-desc';
            descDiv.textContent = product.description || '';
            card.appendChild(descDiv);
            grid.appendChild(card);
        });
        mainContent.appendChild(grid);
    }

    // 产品图片弹窗
    let modal = document.querySelector('.product-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.innerHTML = `<div class="product-modal-content">
            <button class="product-modal-close" title="关闭">×</button>
            <img src="" alt="" />
        </div>`;
        document.body.appendChild(modal);
    }
    function showProductModal(product) {
        const content = modal.querySelector('.product-modal-content');
        content.querySelector('img').src = product.image;
        content.querySelector('img').alt = product.name;
        modal.classList.add('active');
    }
    modal.querySelector('.product-modal-close').onclick = () => modal.classList.remove('active');
    modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('active'); });

    // 初始化
    renderSidebar(currentCategoryKey);
    renderMain(currentCategoryKey);
});