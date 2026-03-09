# 个人简历网站 - 北欧奶油风

一个面向硕士毕业生求职的个人简历网站，采用北欧奶油风设计风格，适配 Vercel 一键部署。

## 🎨 设计风格

- **主色调**: 北欧奶油粉 #FADADD（温暖清新）
- **辅助色1**: 雾霾蓝 #A7C7E7（冷静专业）
- **辅助色2**: 原木浅棕 #E1CBB0（自然质朴）
- **设计理念**: 极简、柔和、留白充足，模块划分清晰

## 📁 项目结构

```
CV_claude1/
├── index.html           # 首页（基本信息页）
├── internship.html      # 实习经历页
├── practice.html        # 实践经历页
├── contact.html         # 联系页
├── css/
│   └── style.css        # 全局样式文件
├── js/
│   ├── main.js          # 全局逻辑（导航栏、滚动动画等）
│   ├── internship.js    # 实习页专属逻辑
│   ├── practice.js      # 实践页专属逻辑
│   └── contact.js       # 联系页专属逻辑
├── assets/
│   └── images/          # 图片资源目录
├── vercel.json          # Vercel 部署配置
└── README.md            # 项目说明文档
```

## 🚀 快速开始

### 本地预览

1. 双击任意 `.html` 文件即可在浏览器中打开预览
2. 或使用本地服务器（推荐）：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve

# 使用 PHP
php -S localhost:8000
```

### Vercel 部署

1. 将项目推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. Vercel 会自动识别为静态站点并进行部署
4. 部署完成后获得一个 `.vercel.app` 域名

## 📄 页面说明

### 1. 首页（index.html）
- 个人基本信息展示
- 学历背景（时间轴形式）
- 个人优势（卡片形式）
- 校内荣誉（标签形式）
- 证书展示（图片占位）

### 2. 实习经历页（internship.html）
- 4段实习经历（卡片+时间轴）
- 技能证书展示
- 技能分类切换（核心技能/辅助技能/软技能）
- 资格证书列表

### 3. 实践经历页（practice.html）
- 校内实践/项目经历标签切换
- 实践卡片展示
- 项目经历展示
- 实践照片展示（8张占位）

### 4. 联系页（contact.html）
- 联系方式展示
- 留言表单（前端验证）
- 表单提交模拟

## 🎯 核心功能

### 响应式设计
- 桌面端（1200px+）：完整功能展示
- 平板端（768px+）：适配布局调整
- 移动端（320px+）：汉堡菜单，优化交互

### 交互动效
- 导航栏滚动变色/收缩
- 页面元素滚动渐显
- 卡片hover上浮效果
- 平滑滚动锚点跳转
- 表单验证与提交反馈

### 用户体验
- 表单实时验证
- 联系方式一键复制
- 微信二维码hover显示
- 照片点击放大查看
- 表单内容自动保存

## 🛠️ 自定义配置

### 修改个人信息

在对应的 `.html` 文件中查找并修改以下内容：

1. **个人信息**（index.html）
   - 姓名、邮箱等基础信息
   - 学历背景信息
   - 个人优势内容

2. **实习经历**（internship.html）
   - 公司名称、岗位、时间
   - 核心职责描述
   - 技能熟练度百分比

3. **实践经历**（practice.html）
   - 校内实践项目
   - 项目经历详情

4. **联系方式**（contact.html）
   - 邮箱、电话
   - GitHub链接
   - 微信二维码

### 替换图片

在 `assets/images/` 目录下放置您的图片，然后在对应的 `.html` 文件中替换占位符：

```html
<!-- 替换占位符 -->
<div class="image-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- 改为真实图片 -->
<img src="assets/images/your-photo.jpg" alt="个人照片">
```

### 修改配色方案

在 `css/style.css` 的 `:root` 部分修改颜色变量：

```css
:root {
    --primary-color: #FADADD;      /* 主色调 */
    --primary-dark: #E8B4B8;       /* 主色调加深 */
    --auxiliary1: #A7C7E7;         /* 辅助色1 */
    --auxiliary2: #E1CBB0;         /* 辅助色2 */
    /* ... 其他颜色变量 */
}
```

## 📱 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 技术栈

- HTML5（语义化标签）
- CSS3（Flex/Grid布局）
- Vanilla JavaScript（原生JS，无框架依赖）
- Font Awesome 6（图标库）
- Google Fonts（思源黑体 + Inter + Montserrat）

## 📄 许可证

MIT License - 自由使用和修改

## 📞 联系方式

如有问题或建议，欢迎联系：
- 邮箱：your-email@example.com
- GitHub：github.com/yourusername

---

**提示**: 在使用前，请确保替换所有的示例内容（姓名、联系方式、经历等）为您自己的真实信息。
