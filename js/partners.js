// 合作伙伴展示脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取合作伙伴展示容器
    const partnersContainer = document.querySelector('.partners-section .container');
    if (!partnersContainer) return;
    
    // 清空容器内容
    partnersContainer.innerHTML = '';
    
    // 创建标题
    const title = document.createElement('h2');
    title.textContent = partnersData.title;
    partnersContainer.appendChild(title);
    
    // 创建合作伙伴列表容器
    const partnersList = document.createElement('div');
    partnersList.className = 'partners-list';
    
    // 遍历合作伙伴数据，动态生成合作伙伴卡片
    partnersData.items.forEach(partner => {
        // 创建合作伙伴卡片
        const partnerCard = document.createElement('div');
        partnerCard.className = 'partner-card';
        partnerCard.dataset.id = partner.id;
        
        // 创建合作伙伴图片
        const partnerImage = document.createElement('img');
        partnerImage.src = partner.image;
        partnerImage.alt = partner.name;
        partnerCard.appendChild(partnerImage);
        
        // 创建合作伙伴名称
        const partnerName = document.createElement('h3');
        partnerName.textContent = partner.name;
        partnerCard.appendChild(partnerName);
        
        // 创建合作伙伴描述
        const partnerDescription = document.createElement('p');
        partnerDescription.textContent = partner.description;
        partnerCard.appendChild(partnerDescription);
        
        // 将合作伙伴卡片添加到列表
        partnersList.appendChild(partnerCard);
    });
    
    // 将合作伙伴列表添加到容器
    partnersContainer.appendChild(partnersList);
}); 