// 移动端菜单展开/收起功能
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const nav = document.getElementById('main-nav');
        if (!menuBtn || !nav) return;
        let menuOpen = false;

        // 初始隐藏主菜单（移动端）
        function updateMenuDisplay() {
            if (window.innerWidth <= 900) {
                nav.style.display = menuOpen ? 'flex' : 'none';
            } else {
                nav.style.display = '';
            }
        }

        // 切换菜单展开/收起
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            menuOpen = !menuOpen;
            updateMenuDisplay();
            menuBtn.classList.toggle('open', menuOpen);
        });

        // 点击菜单项自动收起（移动端）
        nav.addEventListener('click', function(e) {
            if (window.innerWidth <= 900 && e.target.tagName === 'A') {
                menuOpen = false;
                updateMenuDisplay();
                menuBtn.classList.remove('open');
            }
        });

        // 点击页面其它区域自动收起菜单（移动端）
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 900 && menuOpen) {
                if (e.target !== menuBtn && !nav.contains(e.target)) {
                    menuOpen = false;
                    updateMenuDisplay();
                    menuBtn.classList.remove('open');
                }
            }
        });

        // 窗口变化时自适应
        window.addEventListener('resize', function() {
            updateMenuDisplay();
            if (window.innerWidth > 900) {
                menuOpen = false;
                menuBtn.classList.remove('open');
            }
        });

        // 初始加载
        updateMenuDisplay();
    });
})();
