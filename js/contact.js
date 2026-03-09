// ===== 联系页专属逻辑 =====

// 表单提交处理
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 使用工具函数验证表单
        const isValid = window.utils.validateForm(contactForm);

        if (isValid) {
            // 模拟表单提交
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = '提交中...';
            submitBtn.disabled = true;

            // 模拟网络请求
            setTimeout(() => {
                // 显示成功消息
                window.utils.showSuccessMessage(contactForm, 'formSuccess');

                // 重置表单
                window.utils.resetForm(contactForm);

                // 恢复按钮状态
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // 震动表单（可选的微动效）
                window.utils.shakeElement(contactForm);
            }, 1000);
        } else {
            // 震动表单提示错误
            window.utils.shakeElement(contactForm);
        }
    });
}

// 输入框焦点效果
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    // 输入时清除错误提示
    input.addEventListener('input', () => {
        const errorElement = document.getElementById(`${input.id}Error`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    });

    // 失焦时验证
    input.addEventListener('blur', () => {
        const errorElement = document.getElementById(`${input.id}Error`);

        // 验证必填项
        if (input.hasAttribute('required') && !input.value.trim()) {
            if (errorElement) {
                errorElement.textContent = '请填写必填项';
            }
            return;
        }

        // 验证邮箱格式
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                if (errorElement) {
                    errorElement.textContent = '请输入正确的邮箱格式';
                }
            }
        }
    });
});

// 联系方式卡片点击复制功能
const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach(item => {
    item.addEventListener('click', () => {
        const contactValue = item.querySelector('.contact-value');
        if (contactValue) {
            navigator.clipboard.writeText(contactValue.textContent).then(() => {
                // 创建复制成功提示
                const toast = document.createElement('div');
                toast.className = 'copy-toast';
                toast.textContent = '已复制到剪贴板';

                // 添加提示样式
                const toastStyle = document.createElement('style');
                toastStyle.textContent = `
                    .copy-toast {
                        position: fixed;
                        top: 100px;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: var(--primary-color);
                        color: var(--text-primary);
                        padding: 0.75rem 1.5rem;
                        border-radius: 8px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        animation: slideDown 0.3s ease;
                        z-index: 9999;
                    }
                    @keyframes slideDown {
                        from {
                            opacity: 0;
                            transform: translateX(-50%) translateY(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(-50%) translateY(0);
                        }
                    }
                `;
                document.head.appendChild(toastStyle);

                document.body.appendChild(toast);

                // 2秒后移除提示
                setTimeout(() => {
                    toast.style.animation = 'slideDown 0.3s ease reverse';
                    setTimeout(() => {
                        toast.remove();
                        toastStyle.remove();
                    }, 300);
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        }
    });
});

// 微信二维码显示优化
const wechatItem = document.querySelector('.contact-item .contact-icon i.fa-weixin');

if (wechatItem) {
    const wechatCard = wechatItem.closest('.contact-item');
    let qrTimeout;

    wechatCard.addEventListener('mouseenter', () => {
        clearTimeout(qrTimeout);
    });

    wechatCard.addEventListener('mouseleave', () => {
        // 延迟隐藏二维码
        qrTimeout = setTimeout(() => {
            // 二维码会自动隐藏（通过CSS）
        }, 500);
    });
}

// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    const fadeInSectionElements = document.querySelectorAll('.fade-in-section');
    fadeInSectionElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, 100 + index * 100);
    });

    // 预填写表单（从URL参数中）
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    const emailParam = urlParams.get('email');

    if (nameParam) {
        const nameInput = document.getElementById('name');
        if (nameInput) {
            nameInput.value = decodeURIComponent(nameParam);
        }
    }

    if (emailParam) {
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.value = decodeURIComponent(emailParam);
        }
    }
});

// 键盘导航支持
const contactLinks = document.querySelectorAll('.contact-item');
contactLinks.forEach(link => {
    link.setAttribute('tabindex', '0');
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            link.click();
        }
    });
});

// 表单提交前确认
contactForm?.addEventListener('submit', (e) => {
    // 如果需要二次确认，可以在这里添加
    // e.preventDefault();
    // if (confirm('确认提交留言吗？')) {
    //     contactForm.submit();
    // }
});

// 自动保存表单内容（localStorage）
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
const formKey = 'contactForm_data';

// 加载保存的数据
const savedData = localStorage.getItem(formKey);
if (savedData) {
    try {
        const data = JSON.parse(savedData);
        formInputs.forEach(input => {
            if (data[input.id]) {
                input.value = data[input.id];
            }
        });
    } catch (e) {
        console.error('加载保存的表单数据失败:', e);
    }
}

// 自动保存输入
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        const data = {};
        formInputs.forEach(inp => {
            if (inp.value) {
                data[inp.id] = inp.value;
            }
        });
        localStorage.setItem(formKey, JSON.stringify(data));
    });
});

// 表单提交成功后清除保存的数据
if (contactForm) {
    const originalSubmit = contactForm.addEventListener('submit', () => {
        localStorage.removeItem(formKey);
    });
}
