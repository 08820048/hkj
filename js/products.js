// 产品展示页面脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取产品展示容器
    const productsContainer = document.querySelector('.products-page .container');
    
    // 清空容器内容，只保留标题
    const pageTitle = productsContainer.querySelector('h1');
    productsContainer.innerHTML = '';
    productsContainer.appendChild(pageTitle);
    
    // 遍历产品数据，动态生成产品分类和产品卡片
    for (const categoryKey in productsData) {
        const category = productsData[categoryKey];
        
        // 创建分类容器
        const categoryElement = document.createElement('div');
        categoryElement.className = 'product-category';
        
        // 创建分类标题
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.title;
        categoryElement.appendChild(categoryTitle);
        
        // 创建产品列表容器
        const productList = document.createElement('div');
        productList.className = 'product-list';
        
        // 遍历该分类下的所有产品
        category.items.forEach(product => {
            // 创建产品卡片
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id;
            
            // 创建产品图片
            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            productCard.appendChild(productImage);
            
            // 创建产品标题
            const productTitle = document.createElement('h3');
            productTitle.textContent = product.name;
            productCard.appendChild(productTitle);
            
            // 创建产品描述
            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            productCard.appendChild(productDescription);
            
            // 创建查看详情按钮
            const detailButton = document.createElement('a');
            detailButton.href = '#';
            detailButton.className = 'btn';
            detailButton.textContent = '查看详情';
            productCard.appendChild(detailButton);
            
            // 将产品卡片添加到产品列表
            productList.appendChild(productCard);
        });
        
        // 将产品列表添加到分类容器
        categoryElement.appendChild(productList);
        
        // 将分类容器添加到页面容器
        productsContainer.appendChild(categoryElement);
    }
    
    // 添加产品卡片点击事件
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的是按钮，不阻止默认行为
            if (e.target.classList.contains('btn')) {
                return;
            }
            
            // 否则阻止默认行为，并显示产品详情
            e.preventDefault();
            const productId = this.dataset.id;
            showProductDetail(productId);
        });
    });
});

// 显示产品详情
function showProductDetail(productId) {
    // 查找产品数据
    let product = null;
    for (const categoryKey in productsData) {
        const category = productsData[categoryKey];
        const foundProduct = category.items.find(item => item.id === productId);
        if (foundProduct) {
            product = foundProduct;
            break;
        }
    }
    
    if (!product) return;
    
    // 创建产品详情弹窗
    const modal = document.createElement('div');
    modal.className = 'product-detail-modal';
    
    // 创建弹窗内容
    const modalContent = document.createElement('div');
    modalContent.className = 'product-detail-content';
    
    // 创建关闭按钮
    const closeButton = document.createElement('span');
    closeButton.className = 'product-detail-close';
    closeButton.innerHTML = '&times;';
    modalContent.appendChild(closeButton);
    
    // 创建产品图片
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    modalContent.appendChild(productImage);
    
    // 创建产品标题
    const productTitle = document.createElement('h2');
    productTitle.textContent = product.name;
    modalContent.appendChild(productTitle);
    
    // 创建产品描述
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    modalContent.appendChild(productDescription);
    
    // 将弹窗内容添加到弹窗
    modal.appendChild(modalContent);
    
    // 将弹窗添加到页面
    document.body.appendChild(modal);
    
    // 显示弹窗
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // 添加关闭事件
    closeButton.addEventListener('click', function() {
        modal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    // 点击弹窗外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
} 