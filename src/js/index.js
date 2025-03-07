// 菜单交互逻辑
document.getElementById('sidebar').addEventListener('click', function(e) {
    // 事件委托：在父元素监听所有子元素的点击事件
    const target = e.target; // 获取实际被点击的元素
    
    // 处理菜单展开/收起
    if (target.classList.contains('menu-link') && target.nextElementSibling) {
        // 如果点击的是有子菜单的链接
        e.preventDefault(); // 阻止默认跳转行为
        const submenu = target.nextElementSibling; // 获取相邻的submenu元素
        submenu.classList.toggle('active'); // 切换active类（展开/收起）
    }

    // 处理内容区切换
    if (target.hash) { // 如果链接包含hash（如#w1）
        const allCards = document.querySelectorAll('.card'); // 获取所有卡片
        allCards.forEach(card => card.style.display = 'none'); // 隐藏所有卡片
        
        const targetCard = document.querySelector(target.hash); // 根据hash选择对应卡片
        if (targetCard) {
            targetCard.style.display = 'block'; // 显示目标卡片
        }
    }
});

// 初始显示默认内容
document.querySelector('#start').style.display = 'block'; // 页面加载时显示第一个卡片