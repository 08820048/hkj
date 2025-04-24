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

// Footer 自动收起逻辑
(function() {
    const footer = document.querySelector('footer');
    const banner = document.querySelector('.banner-carousel');
    let ticking = false;

    function checkFooterOverlap() {
        if (!footer || !banner) return;
        const bannerRect = banner.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        // 检查 footer 是否与 banner 区域重叠
        if (footerRect.top < bannerRect.bottom && footerRect.bottom > bannerRect.top) {
            footer.classList.add('footer-hide');
        } else {
            footer.classList.remove('footer-hide');
        }
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkFooterOverlap();
                ticking = false;
            });
            ticking = true;
        }
    });
    window.addEventListener('resize', checkFooterOverlap);
    document.addEventListener('DOMContentLoaded', checkFooterOverlap);
})();
