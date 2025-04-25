// 设备详情弹窗脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有详情按钮
    const detailButtons = document.querySelectorAll('.btn-detail');
    
    // 为每个按钮添加点击事件
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const facilityCard = this.closest('.facility-card');
            const facilityId = facilityCard.dataset.id;
            showFacilityDetail(facilityId);
        });
    });

    // 为所有设备图片添加点击预览事件
    const facilityImages = document.querySelectorAll('.facility-image img');
    facilityImages.forEach(img => {
        img.addEventListener('click', function() {
            const facilityCard = this.closest('.facility-card');
            const facilityId = facilityCard.dataset.id;
            showImagePreview(facilityId);
        });
    });
});

// 显示图片预览
function showImagePreview(facilityId) {
    // 获取设备数据
    const facility = facilityData[facilityId];
    if (!facility) return;
    
    // 创建预览弹窗
    const modal = document.createElement('div');
    modal.className = 'facility-modal image-preview-modal';
    
    // 创建预览内容
    const modalContent = document.createElement('div');
    modalContent.className = 'facility-modal-content image-preview-content';
    
    // 创建关闭按钮
    const closeButton = document.createElement('button');
    closeButton.className = 'facility-modal-close';
    closeButton.innerHTML = '&times;';
    modalContent.appendChild(closeButton);
    
    // 创建图片容器
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-preview-container';
    
    // 创建图片
    const image = document.createElement('img');
    image.src = facility.image;
    image.alt = facility.name[currentLang];
    imageContainer.appendChild(image);
    
    // 创建图片标题
    const imageTitle = document.createElement('div');
    imageTitle.className = 'image-preview-title';
    imageTitle.textContent = facility.name[currentLang];
    
    // 组装预览内容
    modalContent.appendChild(imageContainer);
    modalContent.appendChild(imageTitle);
    modal.appendChild(modalContent);
    
    // 添加到页面
    document.body.appendChild(modal);
    
    // 显示预览
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // 添加关闭事件
    closeButton.addEventListener('click', function() {
        closeModal(modal);
    });
    
    // 点击预览外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
        }
    });
}

// 显示设备详情
function showFacilityDetail(facilityId) {
    // 获取设备数据
    const facility = facilityData[facilityId];
    if (!facility) return;
    
    // 创建弹窗
    const modal = document.createElement('div');
    modal.className = 'facility-modal';
    
    // 创建弹窗内容
    const modalContent = document.createElement('div');
    modalContent.className = 'facility-modal-content';
    
    // 创建弹窗头部
    const modalHeader = document.createElement('div');
    modalHeader.className = 'facility-modal-header';
    
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = facility.name[currentLang];
    modalHeader.appendChild(modalTitle);
    
    const closeButton = document.createElement('button');
    closeButton.className = 'facility-modal-close';
    closeButton.innerHTML = '&times;';
    modalHeader.appendChild(closeButton);
    
    // 创建弹窗主体
    const modalBody = document.createElement('div');
    modalBody.className = 'facility-modal-body';
    
    // 添加设备图片
    const modalImage = document.createElement('div');
    modalImage.className = 'facility-modal-image';
    const image = document.createElement('img');
    image.src = facility.image;
    image.alt = facility.name[currentLang];
    image.addEventListener('click', function() {
        showImagePreview(facilityId);
    });
    modalImage.appendChild(image);
    modalBody.appendChild(modalImage);
    
    // 添加设备介绍
    const introSection = document.createElement('div');
    introSection.className = 'facility-modal-section';
    const introTitle = document.createElement('h3');
    introTitle.textContent = currentLang === 'zh' ? '设备介绍' : 'Introduction';
    introSection.appendChild(introTitle);
    const introText = document.createElement('p');
    introText.textContent = facility.intro[currentLang];
    introSection.appendChild(introText);
    modalBody.appendChild(introSection);
    
    // 添加设备特点
    const featuresSection = document.createElement('div');
    featuresSection.className = 'facility-modal-section';
    const featuresTitle = document.createElement('h3');
    featuresTitle.textContent = currentLang === 'zh' ? '设备特点' : 'Features';
    featuresSection.appendChild(featuresTitle);
    const featuresList = document.createElement('ul');
    facility.features[currentLang].forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    featuresSection.appendChild(featuresList);
    modalBody.appendChild(featuresSection);
    
    // 添加详细信息
    for (const [title, items] of Object.entries(facility.details)) {
        const section = document.createElement('div');
        section.className = 'facility-modal-section';
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = title;
        section.appendChild(sectionTitle);
        const list = document.createElement('ul');
        items[currentLang].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        section.appendChild(list);
        modalBody.appendChild(section);
    }
    
    // 组装弹窗
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    
    // 添加到页面
    document.body.appendChild(modal);
    
    // 显示弹窗
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // 添加关闭事件
    closeButton.addEventListener('click', function() {
        closeModal(modal);
    });
    
    // 点击弹窗外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
        }
    });
}

// 关闭弹窗
function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
} 