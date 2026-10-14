# 防火长城会梦见自由互联网吗？

使用 AstroPaper 6.1.0，部署于 Vercel。

- 网站：https://ccio.eu.org/
- [文章发布和修改说明](docs/使用说明.md)
- [给 AI 的写作说明](docs/AI写作说明.md)
- [可复制的文章模板](templates/article.md)
- [文章和图片](src/content/posts)
- [迁移网址对照表](docs/migration-map.json)

写作流程：AI 起草 → Typora 修改 → GitHub 网页上传 → Vercel 自动部署。

仅已发布的文章迁入此仓库。Notion 原文保留作为备份，不再自动同步。

## 技术维护

Node.js 22（至少 22.12）、pnpm 11.25.0。依赖由 pnpm-lock.yaml 固定。

安装：pnpm install --frozen-lockfile
构建：pnpm run build
本地预览：pnpm run preview

代码基于 [AstroPaper](https://github.com/satnaing/astro-paper)，保留 MIT 许可证。
除文章中特别声明外，博客内容采用 CC BY-NC-SA 协议。
