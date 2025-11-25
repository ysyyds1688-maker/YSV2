# YS 娛樂城 - 線上娛樂平台

YS 娛樂城是一個專注於 SEO 優化的現代化線上娛樂平台，提供完整的遊戲體驗、新手教學、優惠活動等功能。

## 📋 專案簡介

本專案是基於 React + TypeScript + Vite 構建的單頁應用（SPA），採用 React Router 實現路由管理，並全面整合 SEO 最佳實踐，包括：

- 🎯 完整的 SEO 架構（符合 SEO 架構規劃文檔）
- 📱 響應式設計（RWD）
- 🔍 結構化數據（Schema.org）
- 🗺️ Sitemap 與 Robots.txt
- 🧭 麵包屑導航
- 📊 OpenGraph 與 Twitter Card 支援

## 🚀 快速開始

### 環境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 yarn >= 1.22.0

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開發伺服器將在 `http://localhost:3000` 啟動。

### 建置生產版本

```bash
npm run build
```

建置完成後，檔案將輸出至 `dist/` 目錄。

### 預覽生產版本

```bash
npm run preview
```

## 📁 專案結構

```
ys-娛樂論壇/
├── public/                 # 靜態資源
│   ├── sitemap.xml        # 網站地圖
│   └── robots.txt         # 搜尋引擎爬蟲規則
├── components/            # 共用組件
│   ├── SEO.tsx           # SEO meta tags 管理
│   ├── Breadcrumb.tsx    # 麵包屑導航
│   ├── Navbar.tsx        # 導航欄
│   └── Footer.tsx         # 頁腳
├── pages/                 # 頁面組件
│   ├── HomePage.tsx      # 首頁
│   ├── games/            # 遊戲專區
│   │   ├── GamesIndexPage.tsx
│   │   ├── BaccaratPage.tsx
│   │   ├── SlotsPage.tsx
│   │   ├── SportsPage.tsx
│   │   ├── PokerPage.tsx
│   │   └── LotteryPage.tsx
│   ├── guides/           # 新手教學
│   │   ├── RegisterGuidePage.tsx
│   │   ├── WithdrawalGuidePage.tsx
│   │   ├── USDTDepositGuidePage.tsx
│   │   ├── ForgotPasswordGuidePage.tsx
│   │   └── ScamPreventionGuidePage.tsx
│   ├── PromotionsPage.tsx    # 優惠活動
│   ├── NewsPage.tsx          # 最新消息
│   └── trust/            # 可信任信號頁
│       ├── AboutPage.tsx
│       ├── SecurityPage.tsx
│       └── ContactPage.tsx
├── App.tsx               # 主應用組件（路由配置）
├── index.tsx            # 應用入口
├── index.html           # HTML 模板
├── vite.config.ts       # Vite 配置
├── tsconfig.json        # TypeScript 配置
└── package.json         # 專案依賴

```

## 🎯 SEO 架構

本專案完全符合 `ys-seo-structure.md` 中定義的 SEO 架構規劃。

### 頁面結構

#### 1. 首頁 (`/`)
- **H1**: YS 娛樂城｜體驗金168・快速出金
- **關鍵字**: 娛樂城、線上娛樂城、體驗金、出金安全
- **區塊**: Hero、優惠亮點、遊戲入口、新手教學入口

#### 2. 遊戲專區 (`/games`)
- 真人百家樂 (`/games/baccarat`)
- 電子遊戲 (`/games/slots`)
- 體育投注 (`/games/sports`)
- 棋牌遊戲 (`/games/poker`)
- 捕魚機 (`/games/fishing`)
- 彩票 (`/games/lottery`)
- 電競 (`/games/esports`)

#### 3. 新手教學 (`/guides`)
- 如何註冊 YS 娛樂城？ (`/guides/register`)
- 如何出金？ (`/guides/withdrawal`)
- 如何 USDT 儲值？ (`/guides/usdt-deposit`)
- 忘記密碼怎麼辦？ (`/guides/forgot-password`)
- 娛樂城詐騙避免指南 (`/guides/scam-prevention`)

#### 4. 優惠活動 (`/promotions`)
- 固定活動頁
- 體驗金申請教學

#### 5. 最新消息 (`/news`)
- 賽事新聞
- 玩家攻略
- 遊戲技巧

#### 6. 可信任信號頁 (`/trust`)
- 關於我們 (`/trust/about`)
- 客服頁 (`/trust/contact`)
- 出金保障 (`/trust/security`)

### SEO 功能

#### Meta Tags
每個頁面都包含：
- 獨特的 `<title>` 標籤
- `<meta name="description">`
- `<meta name="keywords">`
- Canonical URL
- OpenGraph tags
- Twitter Card tags

#### 結構化數據（Schema.org）
- **WebSite Schema**: 首頁
- **Article Schema**: 遊戲頁面、教學頁面
- **FAQPage Schema**: 教學頁面
- **BreadcrumbList Schema**: 所有頁面

#### 技術 SEO
- `sitemap.xml`: 完整的網站地圖
- `robots.txt`: 搜尋引擎爬蟲規則
- 麵包屑導航
- 內部連結優化

## 🛠️ 技術棧

- **框架**: React 19.2.0
- **語言**: TypeScript 5.8.2
- **建置工具**: Vite 6.2.0
- **路由**: React Router DOM 6.26.0
- **SEO**: React Helmet Async 2.0.5
- **樣式**: Tailwind CSS (CDN)
- **圖標**: Lucide React 0.554.0

## 📝 使用指南

### 添加新頁面

1. 在 `pages/` 目錄創建新頁面組件
2. 使用 `SEO` 組件設置 SEO meta tags
3. 在 `App.tsx` 中添加路由
4. 更新 `public/sitemap.xml`

範例：

```tsx
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

export const NewPage = () => {
  return (
    <>
      <SEO
        title="頁面標題"
        description="頁面描述"
        keywords="關鍵字1,關鍵字2"
        canonical="/new-page"
      />
      <Breadcrumb items={[{ name: '新頁面', url: '/new-page' }]} />
      <div className="min-h-screen bg-slate-950 py-12">
        {/* 頁面內容 */}
      </div>
    </>
  );
};
```

### 更新 SEO 設定

在 `components/SEO.tsx` 中更新網站 URL：

```tsx
const siteUrl = 'https://your-domain.com'; // 更新為實際域名
```

### 添加結構化數據

在頁面組件中傳入 `structuredData` prop：

```tsx
<SEO
  title="頁面標題"
  description="頁面描述"
  structuredData={{
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '文章標題',
    // ... 其他屬性
  }}
/>
```

## 🔧 配置說明

### Vite 配置

`vite.config.ts` 包含：
- React 插件配置
- 路徑別名 (`@/`)
- 環境變數支援
- 開發伺服器設定（port: 3000）

### TypeScript 配置

`tsconfig.json` 包含：
- 嚴格模式
- 路徑別名支援
- React JSX 設定

## 📦 部署

### 建置生產版本

```bash
npm run build
```

### 部署到靜態主機

建置完成後，將 `dist/` 目錄內容上傳至：
- Netlify
- Vercel
- GitHub Pages
- 或其他靜態主機服務

### 環境變數

如需使用環境變數，創建 `.env` 檔案：

```env
VITE_API_URL=https://api.example.com
```

## 🎨 樣式指南

本專案使用 Tailwind CSS（透過 CDN），主要顏色：

- **主色調**: Cyan (`cyan-400`, `cyan-500`, `cyan-600`)
- **次要色調**: Fuchsia (`fuchsia-400`, `fuchsia-500`, `fuchsia-600`)
- **背景**: Slate (`slate-900`, `slate-950`)
- **文字**: White / Slate (`white`, `slate-300`, `slate-400`)

## 📚 相關文檔

- [SEO 架構規劃文檔](./ys-seo-structure.md)
- [SEO 實施說明](./SEO_IMPLEMENTATION.md)

## ⚠️ 注意事項

1. **網站 URL 配置**
   - 請在 `components/SEO.tsx` 中更新 `siteUrl` 為實際域名
   - 更新 `public/sitemap.xml` 中的所有 URL

2. **OG 圖片**
   - 需要在 `public/` 目錄放置 `/og-image.jpg`
   - 建議尺寸：1200x630px

3. **內容擴充**
   - 教學頁面內容建議擴充至 800-1500 字
   - 遊戲頁面可添加更多詳細資訊與圖片

4. **後端整合**
   - 目前為前端靜態頁面
   - 後續可整合 API 實現動態內容載入

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request。

## 📄 授權

本專案為私有專案，版權所有。

## 📞 聯絡方式

如有問題或建議，請聯絡開發團隊。

---

**YS 娛樂城** - 體驗金168・快速出金・安全可靠
