// 全站JS脚本
// 目前预留，可后续添加交互效果

// Banner Carousel 轮播逻辑
(function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const videoSlide = document.querySelector('.carousel-slide video');
    let current = 0;
    let timer = null;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        indicators.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
        current = idx;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }
    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }

    function startAuto() {
        // 如果当前是视频且正在播放，则不自动轮播
        if (current === slides.length - 1 && videoSlide && !videoSlide.paused) return;
        timer = setInterval(() => {
            // 如果是视频且正在播放，则不切换
            if (current === slides.length - 1 && videoSlide && !videoSlide.paused) return;
            nextSlide();
        }, 5000);
    }
    function stopAuto() {
        clearInterval(timer);
    }

    if (slides.length > 0) {
        nextBtn.addEventListener('click', () => { stopAuto(); nextSlide(); startAuto(); });
        prevBtn.addEventListener('click', () => { stopAuto(); prevSlide(); startAuto(); });
        indicators.forEach((dot, i) => {
            dot.addEventListener('click', () => { stopAuto(); showSlide(i); startAuto(); });
        });
        showSlide(0);
        startAuto();
        // 鼠标悬停暂停轮播
        document.querySelector('.banner-carousel-inner').addEventListener('mouseenter', stopAuto);
        document.querySelector('.banner-carousel-inner').addEventListener('mouseleave', startAuto);
        // 视频播放时暂停轮播，暂停/结束时恢复
        if (videoSlide) {
            videoSlide.addEventListener('play', stopAuto);
            videoSlide.addEventListener('pause', startAuto);
            videoSlide.addEventListener('ended', startAuto);
        }
    }
})();

// 移动端菜单展开/收起逻辑
(function() {
    const nav = document.querySelector('.header-flex nav');
    const ul = nav ? nav.querySelector('ul') : null;
    if (!nav || !ul) return;
    // 若未插入菜单按钮，则插入
    let btn = nav.querySelector('.menu-toggle');
    if (!btn) {
        btn = document.createElement('button');
        btn.className = 'menu-toggle';
        btn.setAttribute('aria-label', '展开菜单');
        btn.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
        nav.parentNode.appendChild(btn); // menu-area最右侧
    }
    function closeMenu() {
        ul.classList.remove('menu-open');
        btn.classList.remove('active');
    }
    function openMenu() {
        ul.classList.add('menu-open');
        btn.classList.add('active');
    }
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (ul.classList.contains('menu-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    // 点击菜单外部收起菜单
    document.addEventListener('click', function(e) {
        if (window.innerWidth > 768) return;
        if (!ul.contains(e.target) && !btn.contains(e.target)) {
            closeMenu();
        }
    });
    // 窗口尺寸变化时自动收起
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
})();

// 优化滚动事件处理
(function() {
    const footer = document.querySelector('footer');
    const banner = document.querySelector('.banner-carousel');
    let ticking = false;

    function checkFooterOverlap() {
        if (!footer || !banner) return;
        
        const bannerRect = banner.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        
        // 检查footer是否与banner区域重叠
        if (footerRect.top < bannerRect.bottom) {
            footer.classList.add('footer-hide');
        } else {
            footer.classList.remove('footer-hide');
        }
    }

    // 使用节流函数优化滚动事件
    function throttle(callback, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return callback(...args);
        };
    }

    // 优化滚动事件监听
    window.addEventListener('scroll', throttle(function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkFooterOverlap();
                ticking = false;
            });
            ticking = true;
        }
    }, 100));

    // 优化resize事件监听
    window.addEventListener('resize', throttle(checkFooterOverlap, 100));
    
    // 初始检查
    document.addEventListener('DOMContentLoaded', checkFooterOverlap);
})();

// 优化图片加载
document.addEventListener('DOMContentLoaded', function() {
    // 懒加载图片
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// 产品预览功能
document.addEventListener('DOMContentLoaded', function() {
    // 创建预览弹窗
    const previewModal = document.createElement('div');
    previewModal.className = 'preview-modal';
    previewModal.innerHTML = `
        <div class="preview-content">
            <span class="preview-close">&times;</span>
            <img src="" alt="产品预览">
        </div>
    `;
    document.body.appendChild(previewModal);

    // 获取所有产品项
    const productItems = document.querySelectorAll('.product-item');

    // 为每个产品项添加点击事件
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const previewImg = previewModal.querySelector('img');
            previewImg.src = imgSrc;
            previewModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        });
    });

    // 关闭预览
    const closePreview = () => {
        previewModal.classList.remove('active');
        document.body.style.overflow = ''; // 恢复背景滚动
    };

    // 点击关闭按钮关闭预览
    previewModal.querySelector('.preview-close').addEventListener('click', closePreview);

    // 点击背景关闭预览
    previewModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closePreview();
        }
    });

    // ESC键关闭预览
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && previewModal.classList.contains('active')) {
            closePreview();
        }
    });
});
