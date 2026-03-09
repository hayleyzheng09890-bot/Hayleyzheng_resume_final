// ===== 导航栏滚动效果 =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// 滚动监听
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // 回到顶部按钮
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// 汉堡菜单切换
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接关闭菜单
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 回到顶部功能
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== 滚动动画 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // 添加延迟效果
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
const fadeInSectionElements = document.querySelectorAll('.fade-in-section');
fadeInSectionElements.forEach(element => {
    observer.observe(element);
});

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== 移动端适配 =====
function checkMobile() {
    return window.innerWidth < 768;
}

// 监听窗口大小变化
let isMobile = checkMobile();
window.addEventListener('resize', () => {
    const newIsMobile = checkMobile();
    if (isMobile !== newIsMobile) {
        isMobile = newIsMobile;
        // 重置导航菜单状态
        if (!isMobile) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===== 工具函数 =====

// 表单验证函数
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        const errorElement = document.getElementById(`${input.id}Error`);

        // 清除之前的错误
        if (errorElement) {
            errorElement.textContent = '';
        }

        // 验证必填项
        if (!input.value.trim()) {
            isValid = false;
            if (errorElement) {
                errorElement.textContent = '请填写必填项';
            }
        }

        // 验证邮箱格式
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                if (errorElement) {
                    errorElement.textContent = '请输入正确的邮箱格式';
                }
            }
        }
    });

    return isValid;
}

// 显示成功消息
function showSuccessMessage(form, successElementId) {
    const successElement = document.getElementById(successElementId);
    if (successElement) {
        successElement.classList.add('show');
        setTimeout(() => {
            successElement.classList.remove('show');
        }, 3000);
    }
}

// 重置表单
function resetForm(form) {
    form.reset();
}

// 动画函数
function animateElement(element, animation) {
    element.style.animation = animation;
    element.addEventListener('animationend', () => {
        element.style.animation = '';
    });
}

// 震动效果
function shakeElement(element) {
    animateElement(element, 'shake 0.5s ease');
}

// 添加震动动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// ===== 导出工具函数供其他文件使用 =====
window.utils = {
    validateForm,
    showSuccessMessage,
    resetForm,
    shakeElement
};
