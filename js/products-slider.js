// 自动缓慢滚动（优化：卡顿时不自动滚动，仅鼠标拖动）
let autoScrollTimer = null;
let autoScrollPaused = false;
function autoScrollProductsSlider() {
    // 已禁用自动滚动，改为仅支持鼠标拖动
}
// 鼠标拖动横滑
function enableDragScroll(slider) {
    let isDown = false;
    let startX, scrollLeft;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('dragging');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('dragging');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('dragging');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.1;
        slider.scrollLeft = scrollLeft - walk;
    });
    // 鼠标滚轮横向滚动
    slider.addEventListener('wheel', function(e) {
        if (e.deltaY === 0) return;
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 1.2;
    }, { passive: false });
    // 移动端
    let isTouching = false, touchStartX = 0, touchScrollLeft = 0;
    slider.addEventListener('touchstart', (e) => {
        isTouching = true;
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('touchend', () => { isTouching = false; });
    slider.addEventListener('touchmove', (e) => {
        if (!isTouching) return;
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 1.1;
        slider.scrollLeft = touchScrollLeft - walk;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('productsSlider');
    if (slider) {
        enableDragScroll(slider);
        slider.querySelectorAll('.product-slide').forEach(card => {
            // 只在点击时展示大图，悬浮时不再展示，避免反复触发
            card.addEventListener('click', () => {
                showProductPreview(card.querySelector('img').src, card.querySelector('img').alt);
            });
        });
    }
    document.getElementById('productSlidePreviewClose').onclick = hideProductPreview;
    document.getElementById('productSlidePreview').onclick = function(e) {
        if (e.target === this) hideProductPreview();
    };
});
function showProductPreview(src, alt) {
    const preview = document.getElementById('productSlidePreview');
    const img = document.getElementById('productSlidePreviewImg');
    img.src = src;
    img.alt = alt || '';
    preview.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function hideProductPreview() {
    const preview = document.getElementById('productSlidePreview');
    preview.style.display = 'none';
    document.body.style.overflow = '';
}
