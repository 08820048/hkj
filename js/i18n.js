let currentLang = 'zh';

// 单按钮中英文切换脚本
const zh = {
    home: "首页",
    products: "产品展示",
    facility: "硬件设施",
    services: "其他服务",
    contact: "联系我们",
    slogan: "专业包装解决方案",
    subSlogan: "20年行业经验，专注PE材料定制服务",
    aboutTitle: "秉承创新与专业，持续为客户创造价值",
    aboutDesc: "公司一直秉承"提供恰当包装，为客户创造价值"的理念，时时处处为客户着想，积极走在前面。并在设计、生产工艺，经营管理等方面积累了丰富的经验。我们对在包装设计、产品质量、性能、价格、服务等各方面的优势充满自信。",
    advantages: ["20年行业经验", "全新PE材料", "定制化服务", "一体化生产"],
    productsTitle: "公司简介",
    partnersTitle: "合作伙伴",
    videoTitle: "企业宣传片",
    footer: "版权所有 2025 苏州华可杰包装有限公司 | 技术支持：自研<br>地址：江苏省苏州市高新区xx路xx号 &nbsp;|&nbsp; 电话：0512-xxxxxxx &nbsp;|&nbsp; 邮箱：info@huakejie.com",
    facilityTitle: "硬件设施",
    facilityIntro: "设备介绍",
    facilityFeatures: "设备特点",
    facilityDetails: "详细信息",
    serviceTitle: "其他服务",
    serviceList: {
        custom: "定制化包装解决方案",
        customDesc: "根据客户需求量身定制各类包装袋，满足不同行业应用。",
        support: "售后支持",
        supportDesc: "专业团队提供技术咨询与售后服务，保障客户无忧。",
        consult: "行业咨询",
        consultDesc: "分享行业最新动态与包装解决方案，助力客户发展。",
        process: "服务流程",
        processSteps: ["需求沟通", "方案设计", "样品确认", "批量生产", "交付与售后"]
    },
    contactTitle: "联系我们",
    contactSubtitle: "随时为您提供专业服务",
    contactInfo: {
        phone: "电话咨询",
        email: "电子邮箱",
        address: "公司地址",
        wechat: "微信咨询",
        wechatDesc: "扫码添加微信"
    },
    contactForm: {
        title: "在线留言",
        name: "您的姓名",
        email: "您的邮箱",
        phone: "联系电话",
        message: "请输入您的留言内容...",
        submit: "提交留言"
    },
    faqTitle: "常见问题",
    faqList: {
        custom: "可以定制包装袋吗？",
        customAns: "支持多规格定制，欢迎来电咨询！",
        delivery: "交货周期多久？",
        deliveryAns: "一般为5-10个工作日，具体视订单量而定。"
    }
};
const en = {
    home: "Home",
    products: "Products",
    facility: "Facility",
    services: "Services",
    contact: "Contact Us",
    slogan: "Professional Packaging Solutions",
    subSlogan: "20 Years Experience, Focus on PE Custom Service",
    aboutTitle: "About Us",
    aboutDesc: "Suzhou Huakejie Packaging Co., Ltd. focuses on high-quality packaging bag production and R&D, equipped with advanced production equipment and a professional team, providing one-stop packaging solutions.",
    advantages: ["20 Years Experience", "Brand New PE Material", "Customization", "Integrated Production"],
    productsTitle: "Featured Products",
    partnersTitle: "Partners",
    videoTitle: "Promo Video",
    footer: " 2025 Suzhou Huakejie Packaging Co., Ltd. | Powered by In-house<br>Address: xx Road, High-tech Zone, Suzhou, Jiangsu &nbsp;|&nbsp; Tel: 0512-xxxxxxx &nbsp;|&nbsp; Email: info@huakejie.com",
    facilityTitle: "Facility",
    facilityIntro: "Introduction",
    facilityFeatures: "Features",
    facilityDetails: "Details",
    serviceTitle: "Services",
    serviceList: {
        custom: "Customized Packaging Solutions",
        customDesc: "Tailored packaging bags for different industry applications.",
        support: "After-sales Support",
        supportDesc: "Professional technical consultation and after-sales service.",
        consult: "Industry Consultation",
        consultDesc: "Latest industry trends and packaging solutions.",
        process: "Service Process",
        processSteps: ["Requirement Communication", "Solution Design", "Sample Confirmation", "Mass Production", "Delivery & After-sales"]
    },
    contactTitle: "Contact Us",
    contactSubtitle: "Professional Service Available 24/7",
    contactInfo: {
        phone: "Phone Consultation",
        email: "Email",
        address: "Company Address",
        wechat: "WeChat Consultation",
        wechatDesc: "Scan QR Code to Add"
    },
    contactForm: {
        title: "Online Message",
        name: "Your Name",
        email: "Your Email",
        phone: "Contact Phone",
        message: "Please enter your message...",
        submit: "Submit"
    },
    faqTitle: "FAQ",
    faqList: {
        custom: "Can I customize packaging bags?",
        customAns: "Yes, we support various specifications. Please contact us for details.",
        delivery: "What's the delivery time?",
        deliveryAns: "Usually 5-10 working days, depending on order quantity."
    }
};
function setLang(lang) {
    const dict = lang === 'en' ? en : zh;
    
    // 更新当前语言
    currentLang = lang;
    
    // 更新导航链接
    const navLinks = document.querySelectorAll('nav ul li a');
    if(navLinks[0]) navLinks[0].textContent = dict.home;
    if(navLinks[1]) navLinks[1].textContent = dict.products;
    if(navLinks[2]) navLinks[2].textContent = dict.facility;
    if(navLinks[3]) navLinks[3].textContent = dict.services;
    if(navLinks[4]) navLinks[4].textContent = dict.contact;
    
    // 更新页面标题（如果存在）
    const pageTitle = document.querySelector('.facility-page h1');
    if(pageTitle) {
        const config = window.facilityDisplayConfig;
        if(config && config.title) {
            pageTitle.textContent = config.title[currentLang];
        }
    }
    
    // 更新设备介绍（如果存在）
    const facilityIntro = document.querySelector('.facility-intro p');
    if(facilityIntro) {
        const config = window.facilityDisplayConfig;
        if(config && config.intro) {
            facilityIntro.textContent = config.intro[currentLang];
        }
    }
    
    // 更新设备卡片
    const facilityCards = document.querySelectorAll('.facility-card');
    facilityCards.forEach(card => {
        const facilityId = card.dataset.id;
        if(facilityId) {
            const facility = window.facilityData[facilityId];
            if(facility) {
                // 更新设备名称
                const nameElement = card.querySelector('h3');
                if(nameElement) {
                    nameElement.textContent = facility.name[currentLang];
                }
                
                // 更新设备介绍
                const introTitle = card.querySelector('.facility-info h4:first-child');
                const introText = card.querySelector('.facility-info p');
                if(introTitle) introTitle.textContent = currentLang === 'zh' ? '适用产品' : 'Applications';
                if(introText) introText.textContent = facility.intro[currentLang];
                
                // 更新设备特点
                const featuresTitle = card.querySelector('.facility-info h4:last-of-type');
                if(featuresTitle) featuresTitle.textContent = currentLang === 'zh' ? '设备特点' : 'Features';
                
                const featuresList = card.querySelectorAll('.facility-info ul li');
                facility.features[currentLang].forEach((feature, index) => {
                    if(featuresList[index]) featuresList[index].textContent = feature;
                });
                
                // 更新详情按钮
                const detailButton = card.querySelector('.btn-detail');
                if(detailButton) {
                    detailButton.textContent = currentLang === 'zh' ? '查看详情' : 'View Details';
                }
            }
        }
    });
    
    // 更新页脚
    const footer = document.querySelector('footer .container p');
    if(footer) footer.innerHTML = dict.footer;
    
    // 更新语言切换按钮文本
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) langBtn.textContent = lang === 'zh' ? '中文 / EN' : 'EN / 中文';
}

// 在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取语言切换按钮
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) {
        // 设置点击事件
        langBtn.onclick = () => {
            setLang(currentLang === 'zh' ? 'en' : 'zh');
        };
        
        // 初始化语言设置
        setLang('zh');
    }
});
