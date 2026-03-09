// ===== 实践经历页专属逻辑 =====

// 实践标签切换
const practiceTabs = document.querySelectorAll('.practice-tab');
const practiceCategories = document.querySelectorAll('.practice-category');

practiceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有active类
        practiceTabs.forEach(t => t.classList.remove('active'));
        practiceCategories.forEach(c => c.classList.remove('active'));

        // 添加当前active类
        tab.classList.add('active');
        const categoryId = tab.dataset.tab;
        const categoryElement = document.getElementById(categoryId);
        if (categoryElement) {
            categoryElement.classList.add('active');
        }
    });
});

// 实践卡片hover效果
const practiceCards = document.querySelectorAll('.practice-card');

practiceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // 可以添加额外交互
    });
});

// 项目卡片hover效果
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const placeholder = card.querySelector('.project-placeholder');
        if (placeholder) {
            placeholder.style.transform = 'scale(1.02)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const placeholder = card.querySelector('.project-placeholder');
        if (placeholder) {
            placeholder.style.transform = 'scale(1)';
        }
    });
});

// 照片点击放大功能
const photoItems = document.querySelectorAll('.photo-item');

photoItems.forEach((item, index) => {
    item.style.cursor = 'pointer';

    item.addEventListener('click', () => {
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'photo-modal';
        modal.innerHTML = `
            <div class="photo-modal-content">
                <button class="photo-modal-close">&times;</button>
                <div class="photo-modal-image">
                    <i class="fas fa-image"></i>
                    <p>照片 ${index + 1}</p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // 添加模态框样式
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
            .photo-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeIn 0.3s ease;
            }
            .photo-modal-content {
                position: relative;
                max-width: 80%;
                max-height: 80%;
            }
            .photo-modal-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
            }
            .photo-modal-image {
                background-color: white;
                padding: 2rem;
                border-radius: 8px;
                text-align: center;
            }
            .photo-modal-image i {
                font-size: 4rem;
                color: #ccc;
            }
            .photo-modal-image p {
                margin-top: 1rem;
                color: #666;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(modalStyle);

        // 关闭模态框
        const closeBtn = modal.querySelector('.photo-modal-close');
        closeBtn.addEventListener('click', () => {
            modal.style.animation = 'fadeIn 0.3s ease reverse';
            setTimeout(() => {
                modal.remove();
                modalStyle.remove();
            }, 300);
        });

        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBtn.click();
            }
        });

        // ESC键关闭
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeBtn.click();
            }
        };
        document.addEventListener('keydown', handleEscape);
        closeBtn.addEventListener('click', () => {
            document.removeEventListener('keydown', handleEscape);
        });
    });
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    const fadeInSectionElements = document.querySelectorAll('.fade-in-section');
    fadeInSectionElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, 100 + index * 100);
    });
});

// 添加键盘导航支持
practiceTabs.forEach((tab, index) => {
    tab.setAttribute('tabindex', '0');
    tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            tab.click();
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextTab = practiceTabs[index + 1] || practiceTabs[0];
            nextTab.focus();
            nextTab.click();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevTab = practiceTabs[index - 1] || practiceTabs[practiceTabs.length - 1];
            prevTab.focus();
            prevTab.click();
        }
    });
});

// 过滤功能（可选）
function filterCards(category) {
    const cards = document.querySelectorAll('.practice-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 排序功能（可选）
function sortCards(order) {
    const container = document.querySelector('.practice-cards');
    const cards = Array.from(container.querySelectorAll('.practice-card'));

    cards.sort((a, b) => {
        const dateA = a.querySelector('.practice-time').textContent;
        const dateB = b.querySelector('.practice-time').textContent;
        return order === 'asc' ?
            dateA.localeCompare(dateB) :
            dateB.localeCompare(dateA);
    });

    cards.forEach(card => container.appendChild(card));
}
