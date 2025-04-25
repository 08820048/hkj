// 设备展示配置
const facilityDisplayConfig = {
    // 页面标题
    title: {
        zh: "硬件设施",
        en: "Facility"
    },
    
    // 页面介绍
    intro: {
        zh: "公司拥有先进的自动化生产设备，包括高速吹膜生产线、全自动制袋机、分切机等，确保产品质量和生产效率。",
        en: "The company has advanced automated production equipment, including high-speed film blowing lines, automatic bag making machines, slitting machines, etc., ensuring product quality and production efficiency."
    },
    
    // 设备列表
    facilities: [
        {
            id: "FQL-1600PA",
            name: {
                zh: "FQL-1600PA型电脑控制分切机",
                en: "FQL-1600PA Computer Control Slitting Machine"
            },
            image: "images/facilities/FQL-1600PA型电脑控制分切机_PhotoGrid.png",
            intro: {
                zh: "适用于各类白膜、印刷膜、复合膜、纸张等材质进行分切的理想设备",
                en: "Ideal equipment for slitting various white films, printed films, composite films, and paper materials"
            },
            features: {
                zh: [
                    "电脑控制，操作简单",
                    "高速分切，效率高",
                    "精准定位，保证产品质量"
                ],
                en: [
                    "Computer control, easy operation",
                    "High-speed slitting, high efficiency",
                    "Precise positioning, ensuring product quality"
                ]
            }
        },
        {
            id: "JGZ-1300",
            name: {
                zh: "JGZ-1300型电脑控制无拉伸底封制袋机",
                en: "JGZ-1300 Computer Control Non-stretch Bottom Sealing Bag Making Machine"
            },
            image: "images/facilities/JGZ-1300型电脑控制无拉伸底封制袋机_PhotoGrid.png",
            intro: {
                zh: "适用于筒膜（高压低压）药包、化工、水产类抽真空用",
                en: "Suitable for tube film (high/low pressure) pharmaceutical packaging, chemical industry, and vacuum packaging for aquatic products"
            },
            features: {
                zh: [
                    "电脑控制，操作简单",
                    "无拉伸底封，保证产品质量",
                    "高速生产，效率高"
                ],
                en: [
                    "Computer control, easy operation",
                    "Non-stretch bottom sealing, ensuring product quality",
                    "High-speed production, high efficiency"
                ]
            }
        },
        {
            id: "JGZ-500",
            name: {
                zh: "JGZ-500型电脑控制双通道制袋机",
                en: "JGZ-500 Computer Control Dual-channel Bag Making Machine"
            },
            image: "images/facilities/JGZ-500型电脑控制双通道制袋机_PhotoGrid.png",
            intro: {
                zh: "适用于筒膜（高压低压）各种彩袋、手挽袋",
                en: "Suitable for tube film (high/low pressure) various color bags and handle bags"
            },
            features: {
                zh: [
                    "双通道设计，提高生产效率",
                    "电脑控制，操作简单",
                    "精准定位，保证产品质量"
                ],
                en: [
                    "Dual-channel design, improving production efficiency",
                    "Computer control, easy operation",
                    "Precise positioning, ensuring product quality"
                ]
            }
        },
        {
            id: "JZR-500",
            name: {
                zh: "JZR-500型电脑控制热封热切制袋机",
                en: "JZR-500 Computer Control Heat Sealing and Cutting Bag Making Machine"
            },
            image: "images/facilities/JZR-500型电脑控制热封热切制袋机(全自动高速)_PhotoGrid.png",
            intro: {
                zh: "适用于OPP、PE、复合膜的热封热切制袋",
                en: "Suitable for heat sealing and cutting of OPP, PE, and composite films"
            },
            features: {
                zh: [
                    "全自动高速生产",
                    "电脑控制，操作简单",
                    "热封热切，保证产品质量"
                ],
                en: [
                    "Fully automatic high-speed production",
                    "Computer control, easy operation",
                    "Heat sealing and cutting, ensuring product quality"
                ]
            }
        },
        {
            id: "FJGR-1300",
            name: {
                zh: "FJGR-1300型全自动高速熔边机",
                en: "FJGR-1300 Fully Automatic High-speed Edge Melting Machine"
            },
            image: "images/facilities/FJGR-1300型全自动高速熔边机_PhotoGrid.png",
            intro: {
                zh: "适用于PE片材熔成筒料（卫生巾、尿不湿、手提袋）",
                en: "Suitable for PE sheet material melting into tube material (sanitary napkins, diapers, shopping bags)"
            },
            features: {
                zh: [
                    "全自动高速生产",
                    "电脑控制，操作简单",
                    "精准熔边，保证产品质量"
                ],
                en: [
                    "Fully automatic high-speed production",
                    "Computer control, easy operation",
                    "Precise edge melting, ensuring product quality"
                ]
            }
        }
    ]
};

// 设备展示页面脚本
document.addEventListener('DOMContentLoaded', function() {
    // 确保currentLang已定义
    if (typeof currentLang === 'undefined') {
        currentLang = 'zh'; // 默认使用中文
    }
    
    // 获取设备展示容器
    const facilityContainer = document.querySelector('.facility-page .container');
    if (!facilityContainer) return;
    
    // 清空容器内容
    facilityContainer.innerHTML = '';
    
    // 创建页面标题
    const title = document.createElement('h1');
    title.textContent = facilityDisplayConfig.title[currentLang];
    facilityContainer.appendChild(title);
    
    // 创建页面介绍
    const intro = document.createElement('div');
    intro.className = 'facility-intro';
    const introText = document.createElement('p');
    introText.textContent = facilityDisplayConfig.intro[currentLang];
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
        image.alt = facility.name[currentLang];
        facilityImage.appendChild(image);
        facilityCard.appendChild(facilityImage);
        
        // 创建设备内容容器
        const facilityContent = document.createElement('div');
        facilityContent.className = 'facility-content';
        
        // 创建设备名称
        const facilityName = document.createElement('h3');
        facilityName.textContent = facility.name[currentLang];
        facilityContent.appendChild(facilityName);
        
        // 创建设备信息容器
        const facilityInfo = document.createElement('div');
        facilityInfo.className = 'facility-info';
        
        // 创建设备介绍
        const introTitle = document.createElement('h4');
        introTitle.textContent = currentLang === 'zh' ? '适用产品' : 'Applications';
        facilityInfo.appendChild(introTitle);
        const introText = document.createElement('p');
        introText.textContent = facility.intro[currentLang];
        facilityInfo.appendChild(introText);
        
        // 创建设备特点
        const featuresTitle = document.createElement('h4');
        featuresTitle.textContent = currentLang === 'zh' ? '设备特点' : 'Features';
        facilityInfo.appendChild(featuresTitle);
        const featuresList = document.createElement('ul');
        facility.features[currentLang].forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        facilityInfo.appendChild(featuresList);
        
        // 创建查看详情按钮
        const detailButton = document.createElement('button');
        detailButton.className = 'btn-detail';
        detailButton.textContent = currentLang === 'zh' ? '查看详情' : 'View Details';
        
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