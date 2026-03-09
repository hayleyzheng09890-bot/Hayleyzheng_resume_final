// ===== 实习经历页专属逻辑 =====

// 技能分类标签切换
const skillTabs = document.querySelectorAll('.skill-tab');
const skillCategories = document.querySelectorAll('.skill-category');

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有active类
        skillTabs.forEach(t => t.classList.remove('active'));
        skillCategories.forEach(c => c.classList.remove('active'));

        // 添加当前active类
        tab.classList.add('active');
        const categoryId = tab.dataset.tab;
        document.getElementById(categoryId).classList.add('active');
    });
});

// 技能进度条hover效果
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const progressFill = item.querySelector('.progress-fill');
        const skillName = item.querySelector('.skill-name').textContent;
        const skillLevel = item.querySelector('.skill-level').textContent;

        // 可以在这里添加tooltip或其他交互
    });
});

// 实习卡片hover效果
const internshipCards = document.querySelectorAll('.internship-card');

internshipCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // 可以添加额外交互
    });
});

// 证书badge点击效果
const certificateBadges = document.querySelectorAll('.certificate-badge');

certificateBadges.forEach(badge => {
    badge.addEventListener('click', () => {
        badge.classList.toggle('selected');
    });
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    // 确保滚动动画正常工作
    const fadeInSectionElements = document.querySelectorAll('.fade-in-section');
    fadeInSectionElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, 100 + index * 100);
    });
});

// 添加键盘导航支持
skillTabs.forEach((tab, index) => {
    tab.setAttribute('tabindex', '0');
    tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            tab.click();
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextTab = skillTabs[index + 1] || skillTabs[0];
            nextTab.focus();
            nextTab.click();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevTab = skillTabs[index - 1] || skillTabs[skillTabs.length - 1];
            prevTab.focus();
            prevTab.click();
        }
    });
});

// 打印功能
function printInternship() {
    window.print();
}

// 导出为PDF的占位函数
function exportToPDF() {
    alert('导出PDF功能需要集成PDF生成库');
}

// 如果需要这些功能，可以在页面上添加对应的按钮
// document.getElementById('printBtn')?.addEventListener('click', printInternship);
// document.getElementById('exportBtn')?.addEventListener('click', exportToPDF);
