# 全球数字生活指南 — CLAUDE.md

Jekyll 静态博客，托管于 GitHub Pages（`josephpurty972-spec.github.io`），独立评测类博客，内容涵盖网络加速工具实测、AI 平台访问教程、流媒体解锁攻略。

---

## 一、Git 身份（最高红线）

**每次提交前必须验证 repo 级别的 git 身份，绝不能用全局身份暴露个人信息。**

```bash
# 验证（必做）
git config --local user.email
git config --local user.name

# 若未设置，执行：
git config --local user.email "josephpurty972-spec@users.noreply.github.com"
git config --local user.name "josephpurty972-spec"

# SSH 推送
git push origin main   # remote: github-josephpurty972:josephpurty972-spec/josephpurty972-spec.github.io.git
```

全局 git config 含个人真实身份（Bamboo742 / Jim），**绝不能出现在此仓库的任何提交中**。

---

## 二、博客定位

**全球数字生活指南** — 独立评测博客，不代表特定产品

| 特点 | 说明 |
|------|------|
| 独立立场 | 文章以实测、对比、教程为主，不是广告软文 |
| 多地区测试 | 强调多城市、多运营商实测数据 |
| 持续更新 | 追踪方火墙变化、协议更新、服务变动 |
| 核心话题 | VPN 工具实测、ChatGPT/Claude 接入、Netflix 解锁、数字生活技巧 |

**文章调性**：客观、实测数据优先、有具体场景和数字、不做过度承诺。可以推荐某类工具但不应只宣传单一产品。

---

## 三、提交规范

```
<type>: <简短描述>

feat     新文章
fix      修复内容错误
chore    配置变更
refactor 重构
docs     文档
perf     性能优化
```

示例：
```
feat: add Korean post — VPN China stability test 2026
fix: correct peak-hour data in streaming article
chore: add hero banner to home layout
```

---

## 四、文章写作规范

### 4.1 文件命名

```
# 中文文章
_posts/YYYY-MM-DD-{slug}.md

# 小语种文章
_posts/YYYY-MM-DD-{lang}-{slug}.md

# 示例
_posts/2026-06-28-ladder-vpn-guide-2026.md            # zh
_posts/2026-06-29-ko-vpn-china-chatgpt-test-2026.md   # ko
_posts/2026-06-29-en-vpn-review-2026.md               # en
```

### 4.2 Front Matter 模板

```yaml
---
title: "文章标题"
date: YYYY-MM-DD HH:MM:SS +0800
categories: [分类]
tags: [标签1, 标签2, 标签3]
lang: zh                   # zh / en / vi / ja / ko / tr
excerpt: "一句话摘要，100字以内，显示在文章卡片"
description: "SEO描述，160字以内"
image: /assets/images/covers/vpn-2026.svg
---
```

### 4.3 可用封面图

| 文件 | 适用话题 |
|------|---------|
| `vpn-2026.svg` | VPN 评测、综合对比 |
| `ladder-vpn-2026.svg` | 工具指南、梯子科普 |
| `chatgpt.svg` | ChatGPT / Claude 接入 |
| `claude.svg` | Claude 专题 |
| `dedicated-ip.svg` | IP / 账号安全 |
| `streaming.svg` | Netflix / 流媒体 |

### 4.4 分类参考

| 中文 | 英文 | 韩文 | 越南文 | 日文 |
|------|------|------|--------|------|
| VPN测评 | VPN Reviews | VPN테스트 | Đánh Giá VPN | VPNレビュー |
| 科学上网 | GFW Guide | 우회 가이드 | Vượt Tường Lửa | GFWガイド |
| AI工具 | AI Tools | AI 도구 | Công Cụ AI | AIツール |
| 流媒体 | Streaming | 스트리밍 | Streaming | ストリーミング |
| 数字生活 | Digital Life | 디지털 라이프 | Cuộc Sống Số | デジタルライフ |

### 4.5 内容要求

- 字数：中文 1200–2000 字，小语种 800–1500 字
- **必须有实测数据**：接续成功率、速度、延迟、测试时间段等具体数字
- 结构：背景/环境 → 测试方法 → 数据结果（含表格）→ 场景建议 → 免责声明
- 避免只推荐单一工具，应有对比维度
- 结尾必须加免责声明：`> 📌 本文基于实测经验，非特定服务广告，测试结果因地区/运营商/时期而异。`
- 小语种文章在语言页面下显示（访客切换语言时看到），内容可与中文版相同角度但语言本地化

---

## 五、多语言结构

| 语言 | 目录 | lang 值 |
|------|------|--------|
| 中文（默认） | `/` | zh |
| 英文 | `/en/` | en |
| 越南语 | `/vi/` | vi |
| 日语 | `/ja/` | ja |
| 韩语 | `/ko/` | ko |
| 土耳其语 | `/tr/` | tr |

### 首页 Hero Banner（`_layouts/home.html`）

Hero 内联 SVG，通过 Liquid 变量根据 `page.lang` 自动切换：

```liquid
h_badge   # 角标，如 "数字生活 · 全球测评"
h_title   # 主标题，如 "全球数字生活指南"
h_sub     # 副标题，如 "网络工具实测 · AI访问攻略 · 流媒体解锁"
h_note    # 底部绿色条，如 "持续更新 · 多地区实测"
```

Hero CSS（已在 `style.css` 中）：`.hero { margin: 4px 0 30px; }` / `.hero__img { display: block; width: 100%; border-radius: 18px; }`

---

## 六、项目结构

```
josephpurty972-spec.github.io/
├── _layouts/
│   ├── default.html      # 页面框架：head / header（含语言切换）/ footer
│   ├── home.html         # 首页：Hero SVG（语言联动）+ 文章列表
│   ├── post.html         # 文章页：双栏 + 侧边栏推荐
│   └── page.html / category.html
├── _posts/               # 所有文章（中文 + 小语种）
├── _data/
│   └── navigation.yml    # 多语言导航（zh/en/vi/ja/ko/tr）
├── assets/
│   ├── css/style.css     # 全站样式（含 .hero、dark mode via html.theme-dark）
│   ├── images/
│   │   ├── covers/       # 文章封面图（vpn-2026.svg 等）
│   │   ├── posts/        # 文章内配图
│   │   ├── logo.svg      # 站点 Logo（40×40）
│   │   └── favicon.svg   # Favicon
│   └── js/lazy-load.js
├── en/ vi/ ja/ ko/ tr/   # 各语言子目录（各含 index.html）
├── about/
├── index.html            # 中文首页（lang: zh）
└── _config.yml
```

---

## 七、Dark Mode 说明

此站点**支持 Dark Mode**（通过 `html.theme-dark` CSS class + 系统媒体查询），与 TonboVPN / NasaVPN 站点（不含 dark mode）不同。修改样式时注意同步 `:root` 和 `html.theme-dark` 两套 CSS 变量。

---

## 八、移动端响应式

`style.css` 中 `@media (max-width: 600px)` 关键规则：
- `.brand__name { display: none; }` — 移动端隐藏 Logo 文字，只显示图标
- `.site-nav a { white-space: nowrap; }` — 导航链接不换行
- `.lang-switch { padding-left: 8px; margin-left: 8px; }` — 语言切换器收窄
