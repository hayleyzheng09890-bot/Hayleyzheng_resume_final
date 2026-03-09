# Vercel 部署指南

本指南将帮助您快速将个人简历网站部署到 Vercel。

## 前置条件

1. 拥有 GitHub 账号
2. 拥有 Vercel 账号（[https://vercel.com](https://vercel.com)）
3. 项目文件已准备好（在 `CV_claude1/` 目录中）

## 部署步骤

### 方法一：通过 GitHub 部署（推荐）

1. **推送到 GitHub**

   在项目根目录执行：

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal resume website"
   git branch -M main
   git remote add origin https://github.com/your-username/cv-claude1.git
   git push -u origin main
   ```

2. **在 Vercel 导入项目**

   - 访问 [https://vercel.com/new](https://vercel.com/new)
   - 点击 "Import Project"
   - 选择刚创建的 GitHub 仓库
   - 确认项目配置（Vercel 会自动识别为静态站点）
   - 点击 "Deploy"

3. **等待部署完成**

   - Vercel 会自动构建和部署您的网站
   - 部署完成后，您会获得一个 `.vercel.app` 域名
   - 例如：`https://cv-claude1.vercel.app`

### 方法二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**

   ```bash
   vercel login
   ```

3. **部署项目**

   ```bash
   cd CV_claude1
   vercel
   ```

4. **生产环境部署**

   ```bash
   vercel --prod
   ```

## 自定义域名

### 添加自定义域名

1. 登录 Vercel 控制台
2. 进入项目设置
3. 点击 "Domains"
4. 输入您的域名（如 `resume.yourdomain.com`）
5. 按照提示配置 DNS 记录

### DNS 配置示例

如果您使用 Cloudflare，添加以下记录：

| 类型 | 名称 | 内容 |
|------|------|------|
| CNAME | resume | cname.vercel-dns.com |

## 环境变量

本项目为静态网站，无需配置环境变量。

## 部署配置说明

项目已包含 `vercel.json` 配置文件，自动处理路由规则：

- `/` → `index.html`
- `/internship` → `internship.html`
- `/practice` → `practice.html`
- `/contact` → `contact.html`
- 其他路由 → `index.html`（SPA 友好）

## 更新网站

### 自动部署

如果您通过 GitHub 导入项目，每次推送到 `main` 分支都会自动触发部署：

```bash
git add .
git commit -m "Update content"
git push
```

### 手动部署

如果使用 Vercel CLI：

```bash
vercel --prod
```

## 性能优化建议

1. **图片优化**
   - 使用 WebP 格式
   - 压缩图片大小
   - 使用适当的分辨率

2. **缓存策略**
   - Vercel 自动提供 CDN 缓存
   - 静态资源会自动缓存

3. **代码压缩**
   - Vercel 自动压缩 CSS/JS
   - 无需手动优化

## 常见问题

### Q: 部署后页面 404 错误？

A: 检查 `vercel.json` 配置，确保路由规则正确。

### Q: 图片不显示？

A: 确保图片路径正确，文件名大小写一致。

### Q: 样式错乱？

A: 检查 `css/` 目录是否存在，文件是否完整。

### Q: 如何回滚到之前的版本？

A: 在 Vercel 控制台的 "Deployments" 标签页，选择之前的部署版本点击 "Promote to Production"。

## 监控和分析

Vercel 提供内置的分析功能：

- 访问量统计
- 性能监控
- 错误日志

登录 Vercel 控制台即可查看。

## 费用

- **免费计划**：适合个人项目
  - 100GB 带宽/月
  - 无限部署
  - 自动 HTTPS
  - 全球 CDN

- **专业计划**：$20/月
  - 更多带宽
  - 优先支持
  - 高级分析

## 技术支持

- Vercel 文档：[https://vercel.com/docs](https://vercel.com/docs)
- Vercel 社区：[https://vercel.com/community](https://vercel.com/community)
- GitHub Issues：提交问题到项目仓库

---

**祝您部署顺利！** 🚀
