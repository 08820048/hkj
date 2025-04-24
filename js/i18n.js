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
    aboutDesc: "公司一直秉承“提供恰当包装，为客户创造价值”的理念，时时处处为客户着想，积极走在前面。并在设计、生产工艺，经营管理等方面积累了丰富的经验。我们对在包装设计、产品质量、性能、价格、服务等各方面的优势充满自信。",
    advantages: ["20年行业经验", "全新PE材料", "定制化服务", "一体化生产"],
    productsTitle: "公司简介",
    partnersTitle: "合作伙伴",
    videoTitle: "企业宣传片",
    footer: "版权所有 2025 苏州华可杰包装有限公司 | 技术支持：自研<br>地址：江苏省苏州市高新区xx路xx号 &nbsp;|&nbsp; 电话：0512-xxxxxxx &nbsp;|&nbsp; 邮箱：info@huakejie.com"
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
    footer: " 2025 Suzhou Huakejie Packaging Co., Ltd. | Powered by In-house<br>Address: xx Road, High-tech Zone, Suzhou, Jiangsu &nbsp;|&nbsp; Tel: 0512-xxxxxxx &nbsp;|&nbsp; Email: info@huakejie.com"
};
let currentLang = 'zh';
function setLang(lang) {
    const dict = lang === 'en' ? en : zh;
    // 顶部导航
    const navLinks = document.querySelectorAll('nav ul li a');
    if(navLinks[0]) navLinks[0].textContent = dict.home;
    if(navLinks[1]) navLinks[1].textContent = dict.products;
    if(navLinks[2]) navLinks[2].textContent = dict.facility;
    if(navLinks[3]) navLinks[3].textContent = dict.services;
    if(navLinks[4]) navLinks[4].textContent = dict.contact;
    // slogan（已无 banner-text，可注释掉）
    // if(document.querySelector('.banner-text h1')) document.querySelector('.banner-text h1').textContent = dict.slogan;
    // if(document.querySelector('.banner-text p')) document.querySelector('.banner-text p').textContent = dict.subSlogan;
    // about
    if(document.querySelector('.about h2')) document.querySelector('.about h2').textContent = dict.aboutTitle;
    if(document.querySelector('.about p')) document.querySelector('.about p').textContent = dict.aboutDesc;
    const advs = document.querySelectorAll('.advantages li');
    advs.forEach((li, i) => { if(dict.advantages[i]) li.textContent = dict.advantages[i]; });
    // products
    if(document.querySelector('.products-preview h2')) document.querySelector('.products-preview h2').textContent = dict.productsTitle;
    // partners
    if(document.querySelector('.partners h2')) document.querySelector('.partners h2').textContent = dict.partnersTitle;
    // video
    if(document.querySelector('.video h2')) document.querySelector('.video h2').textContent = dict.videoTitle;
    // footer
    if(document.querySelector('footer .container p')) document.querySelector('footer .container p').innerHTML = dict.footer;
    // 按钮内容
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) langBtn.textContent = lang === 'zh' ? '中文 / EN' : 'EN / 中文';
    currentLang = lang;
}
document.getElementById('lang-toggle').onclick = () => {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
};
// 默认中文
setLang('zh');
