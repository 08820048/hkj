// 设备展示配置
const facilityDisplayConfig = {
    // 页面标题
    title: "硬件设施",
    
    // 页面介绍
    intro: "公司拥有先进的自动化生产设备，包括高速吹膜生产线、全自动制袋机、分切机等，确保产品质量和生产效率。",
    
    // 设备列表
    facilities: [
        {
            id: "FQL-1600PA",
            name: "FQL-1600PA型电脑控制分切机",
            image: "images/facilities/FQL-1600PA型电脑控制分切机_PhotoGrid.png",
            intro: "适用于各类白膜、印刷膜、复合膜、纸张等材质进行分切的理想设备",
            features: [
                "电脑控制，操作简单",
                "高速分切，效率高",
                "精准定位，保证产品质量"
            ]
        },
        {
            id: "JGZ-1300",
            name: "JGZ-1300型电脑控制无拉伸底封制袋机",
            image: "images/facilities/JGZ-1300型电脑控制无拉伸底封制袋机_PhotoGrid.png",
            intro: "适用于筒膜（高压低压）药包、化工、水产类抽真空用",
            features: [
                "电脑控制，操作简单",
                "无拉伸底封，保证产品质量",
                "高速生产，效率高"
            ]
        },
        {
            id: "JGZ-500",
            name: "JGZ-500型电脑控制双通道制袋机",
            image: "images/facilities/JGZ-500型电脑控制双通道制袋机_PhotoGrid.png",
            intro: "适用于筒膜（高压低压）各种彩袋、手挽袋",
            features: [
                "双通道设计，提高生产效率",
                "电脑控制，操作简单",
                "精准定位，保证产品质量"
            ]
        },
        {
            id: "JZR-500",
            name: "JZR-500型电脑控制热封热切制袋机",
            image: "images/facilities/JZR-500型电脑控制热封热切制袋机(全自动高速)_PhotoGrid.png",
            intro: "适用于OPP、PE、复合膜的热封热切制袋",
            features: [
                "全自动高速生产",
                "电脑控制，操作简单",
                "热封热切，保证产品质量"
            ]
        },
        {
            id: "FJGR-1300",
            name: "FJGR-1300型全自动高速熔边机",
            image: "images/facilities/FJGR-1300型全自动高速熔边机_PhotoGrid.png",
            intro: "适用于PE片材熔成筒料（卫生巾、尿不湿、手提袋）",
            features: [
                "全自动高速生产",
                "电脑控制，操作简单",
                "精准熔边，保证产品质量"
            ]
        }
    ]
};

// 设备展示页面脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取设备展示容器
    const facilityContainer = document.querySelector('.facility-page .container');
    if (!facilityContainer) return;
    
    // 清空容器内容
    facilityContainer.innerHTML = '';
    
    // 创建页面标题
    const title = document.createElement('h1');
    title.textContent = facilityDisplayConfig.title;
    facilityContainer.appendChild(title);
    
    // 创建页面介绍
    const intro = document.createElement('div');
    intro.className = 'facility-intro';
    const introText = document.createElement('p');
    introText.textContent = facilityDisplayConfig.intro;
    intro.appendChild(introText);
    facilityContainer.appendChild(intro);
    
    // 创建设备网格容器
    const facilityGrid = document.createElement('div');
    facilityGrid.className = 'facility-grid';
    
    // 遍历设备数据，创建设备卡片
    facilityDisplayConfig.facilities.forEach(facility => {
        const facilityCard = document.createElement('div');
        facilityCard.className = 'facility-card';
        facilityCard.dataset.id = facility.id;
        
        // 创建设备图片容器
        const facilityImage = document.createElement('div');
        facilityImage.className = 'facility-image';
        const image = document.createElement('img');
        image.src = facility.image;
        image.alt = facility.name;
        facilityImage.appendChild(image);
        facilityCard.appendChild(facilityImage);
        
        // 创建设备内容容器
        const facilityContent = document.createElement('div');
        facilityContent.className = 'facility-content';
        
        // 创建设备名称
        const facilityName = document.createElement('h3');
        facilityName.textContent = facility.name;
        facilityContent.appendChild(facilityName);
        
        // 创建设备信息容器
        const facilityInfo = document.createElement('div');
        facilityInfo.className = 'facility-info';
        
        // 创建设备介绍
        const introTitle = document.createElement('h4');
        introTitle.textContent = '适用产品';
        facilityInfo.appendChild(introTitle);
        const introText = document.createElement('p');
        introText.textContent = facility.intro;
        facilityInfo.appendChild(introText);
        
        // 创建设备特点
        const featuresTitle = document.createElement('h4');
        featuresTitle.textContent = '设备特点';
        facilityInfo.appendChild(featuresTitle);
        const featuresList = document.createElement('ul');
        facility.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        facilityInfo.appendChild(featuresList);
        
        // 创建查看详情按钮
        const detailButton = document.createElement('button');
        detailButton.className = 'btn-detail';
        detailButton.textContent = '查看详情';
        
        // 组装设备内容
        facilityContent.appendChild(facilityInfo);
        facilityContent.appendChild(detailButton);
        facilityCard.appendChild(facilityContent);
        
        // 将设备卡片添加到网格
        facilityGrid.appendChild(facilityCard);
    });
    
    // 将设备网格添加到容器
    facilityContainer.appendChild(facilityGrid);
    
    // 添加图片点击预览事件
    const facilityImages = document.querySelectorAll('.facility-image img');
    facilityImages.forEach(img => {
        img.addEventListener('click', function() {
            const facilityCard = this.closest('.facility-card');
            const facilityId = facilityCard.dataset.id;
            showImagePreview(facilityId);
        });
    });
    
    // 添加详情按钮点击事件
    const detailButtons = document.querySelectorAll('.btn-detail');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const facilityCard = this.closest('.facility-card');
            const facilityId = facilityCard.dataset.id;
            showFacilityDetail(facilityId);
        });
    });
}); 