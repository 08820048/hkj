// 产品中心页面脚本：左侧分类菜单 + 右侧内容区（无面包屑导航）

document.addEventListener('DOMContentLoaded', function() {
    const productsSidebarList = document.getElementById('products-sidebar-list');
    const productsBreadcrumb = document.getElementById('products-breadcrumb');
    const productsMainContent = document.getElementById('products-main-content');
    
    // 当前选中的分类
    let currentCategory = null;
    let currentSubCategory = null;
    
    // 初始化侧边栏
    function initSidebar() {
        productsSidebarList.innerHTML = '';
        
        // 遍历所有一级分类
        for (const [categoryId, category] of Object.entries(productsData)) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = category.title;
            a.dataset.category = categoryId;
            
            // 如果有子分类，添加展开/折叠图标
            if (category.subCategories) {
                const expandIcon = document.createElement('span');
                expandIcon.className = 'expand-icon';
                expandIcon.innerHTML = '▼';
                a.appendChild(expandIcon);
                
                // 创建子分类列表
                const subList = document.createElement('ul');
                subList.className = 'sub-category-list';
                
                for (const [subCategoryId, subCategory] of Object.entries(category.subCategories)) {
                    const subLi = document.createElement('li');
                    const subA = document.createElement('a');
                    subA.href = '#';
                    subA.textContent = subCategory.title;
                    subA.dataset.category = categoryId;
                    subA.dataset.subCategory = subCategoryId;
                    subLi.appendChild(subA);
                    subList.appendChild(subLi);
                }
                
                li.appendChild(a);
                li.appendChild(subList);
            } else {
                li.appendChild(a);
            }
            
            productsSidebarList.appendChild(li);
        }
        
        // 添加点击事件监听器
        productsSidebarList.addEventListener('click', function(e) {
            const target = e.target;
            
            // 如果点击的是展开/折叠图标或包含图标的链接
            if (target.classList.contains('expand-icon') || target.contains(document.querySelector('.expand-icon'))) {
                const icon = target.classList.contains('expand-icon') ? target : target.querySelector('.expand-icon');
                const parentLi = icon.closest('li');
                const subList = parentLi.querySelector('.sub-category-list');
                
                if (subList) {
                    // 切换展开状态
                    const isExpanded = subList.classList.toggle('expanded');
                    icon.classList.toggle('expanded', isExpanded);
                    
                    // 添加平滑动画效果
                    if (isExpanded) {
                        const height = subList.scrollHeight;
                        subList.style.height = height + 'px';
                        setTimeout(() => {
                            subList.style.height = 'auto';
                        }, 300);
                    } else {
                        const height = subList.scrollHeight;
                        subList.style.height = height + 'px';
                        requestAnimationFrame(() => {
                            subList.style.height = '0';
                        });
                    }
                }
                e.preventDefault();
                return;
            }
            
            // 如果点击的是分类链接
            if (target.tagName === 'A') {
                e.preventDefault();
                const categoryId = target.dataset.category;
                const subCategoryId = target.dataset.subCategory;
                
                // 移除所有活动状态
                document.querySelectorAll('.products-sidebar-list a').forEach(a => a.classList.remove('active'));
                // 添加新的活动状态
                target.classList.add('active');
                
                if (categoryId) {
                    currentCategory = categoryId;
                    currentSubCategory = subCategoryId || null;
                    updateContent();
                }
            }
        });
    }
    
    // 更新面包屑导航
    function updateBreadcrumb() {
        productsBreadcrumb.innerHTML = '';
        
        if (currentCategory) {
            const category = productsData[currentCategory];
            const breadcrumb = document.createElement('div');
            breadcrumb.className = 'breadcrumb';
            
            // 添加首页链接
            const homeLink = document.createElement('a');
            homeLink.href = 'index.html';
            homeLink.textContent = '首页';
            breadcrumb.appendChild(homeLink);
            
            // 添加分隔符
            breadcrumb.appendChild(document.createTextNode(' > '));
            
            // 添加当前分类
            const categoryLink = document.createElement('a');
            categoryLink.href = '#';
            categoryLink.textContent = category.title;
            breadcrumb.appendChild(categoryLink);
            
            // 如果有子分类，添加子分类
            if (currentSubCategory && category.subCategories) {
                const subCategory = category.subCategories[currentSubCategory];
                breadcrumb.appendChild(document.createTextNode(' > '));
                const subCategoryLink = document.createElement('a');
                subCategoryLink.href = '#';
                subCategoryLink.textContent = subCategory.title;
                breadcrumb.appendChild(subCategoryLink);
            }
            
            productsBreadcrumb.appendChild(breadcrumb);
        }
    }
    
    // 更新主内容区域
    function updateContent() {
        productsMainContent.innerHTML = '';
        
        if (currentCategory) {
            const category = productsData[currentCategory];
            
            // 如果有子分类且选中了子分类
            if (currentSubCategory && category.subCategories) {
                const subCategory = category.subCategories[currentSubCategory];
                displayCategoryContent(subCategory);
            } else if (category.subCategories) {
                // 如果有子分类但未选中，显示所有子分类
                displaySubCategories(category);
            } else {
                // 如果没有子分类，直接显示分类内容
                displayCategoryContent(category);
            }
        }
        
        updateBreadcrumb();
    }
    
    // 显示子分类列表
    function displaySubCategories(category) {
        const container = document.createElement('div');
        container.className = 'sub-categories-container';
        
        const title = document.createElement('h2');
        title.textContent = category.title;
        container.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = category.description;
        container.appendChild(description);
        
        const grid = document.createElement('div');
        grid.className = 'sub-categories-grid';
        
        for (const [subCategoryId, subCategory] of Object.entries(category.subCategories)) {
            const card = document.createElement('div');
            card.className = 'sub-category-card';
            
            const cardTitle = document.createElement('h3');
            cardTitle.textContent = subCategory.title;
            card.appendChild(cardTitle);
            
            const cardDescription = document.createElement('p');
            cardDescription.textContent = subCategory.description;
            card.appendChild(cardDescription);
            
            const viewButton = document.createElement('button');
            viewButton.textContent = '查看详情';
            viewButton.onclick = function() {
                currentSubCategory = subCategoryId;
                updateContent();
            };
            card.appendChild(viewButton);
            
            grid.appendChild(card);
        }
        
        container.appendChild(grid);
        productsMainContent.appendChild(container);
    }
    
    // 显示分类内容
    function displayCategoryContent(category) {
        const container = document.createElement('div');
        container.className = 'products-content fade-in'; // 添加淡入动画类
        
        const title = document.createElement('h2');
        title.textContent = category.title;
        container.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = category.description;
        container.appendChild(description);
        
        if (category.items && category.items.length > 0) {
            const grid = document.createElement('div');
            grid.className = 'products-grid';
            
            category.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'product-card';
                
                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.name;
                card.appendChild(image);
                
                const cardTitle = document.createElement('h3');
                cardTitle.textContent = item.name;
                card.appendChild(cardTitle);
                
                const cardDescription = document.createElement('p');
                cardDescription.textContent = item.description;
                card.appendChild(cardDescription);
                
                grid.appendChild(card);
            });
            
            container.appendChild(grid);
        }
        
        productsMainContent.appendChild(container);
    }
    
    // 初始化页面
    initSidebar();
    
    // 默认显示第一个分类
    const firstCategory = Object.keys(productsData)[0];
    if (firstCategory) {
        currentCategory = firstCategory;
        updateContent();
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
        const modal = document.createElement('div');
        modal.className = 'product-modal scale-in'; // 添加缩放动画类
        const content = modal.querySelector('.product-modal-content');
        content.querySelector('img').src = product.image;
        content.querySelector('img').alt = product.name;
        modal.classList.add('active');
    }
    modal.querySelector('.product-modal-close').onclick = () => modal.classList.remove('active');
    modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('active'); });
});