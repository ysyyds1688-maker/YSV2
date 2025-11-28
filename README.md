# YS 娛樂城論壇 - 前端原型專案 (React Prototype)

本專案為 **YS 娛樂城論壇** 的前端原型開發與 SEO 架構規劃站點。
此專案的主要目的是作為未來 **WordPress 正式站** 的視覺、架構與內容規劃參考。

> ⚠️ **重要提示**：本站點目前設定為 **Noindex (不被收錄)**，僅供內部測試與架構確認使用。

---

## 📂 專案結構與重要文件

本專案包含完整的 React 程式碼以及數份關鍵的規劃文件，請接手人員務必詳閱：

### 1. 技術規格文件
*   📄 **`WP_DEVELOPMENT_SPEC.md`** (核心文件): 詳細定義了未來 WordPress 網站的架構、CPT (自定義文章類型)、Taxonomies (分類法) 與 ACF 欄位規格。**開發 WP 主題前必讀。**
*   📄 **`WP_LAUNCH_SEO_CHECKLIST.md`**: WordPress 正式站上線前的 SEO 檢查清單 (包含解除 Noindex、Sitemap 設定等)。
*   📄 **`ys-seo-structure.md`**: 原始 SEO 架構規劃書。

### 2. 圖片與資源
*   📄 **`IMAGE_REQUIREMENTS.md`**: 全站圖片尺寸規範與 AI 生成提示詞。
*   📂 **`public/images/`**: 存放已生成的圖片素材 (包含首頁 Banner、OG Image 等)。

### 3. 程式碼結構
*   `src/pages/`: 所有頁面組件
    *   `src/pages/forum/`: **論壇功能原型** (首頁、版塊、內文)。
    *   `src/pages/games/`: 遊戲專區頁面。
    *   `src/pages/guides/`: 攻略教學頁面。
*   `src/components/`: 共用組件 (Navbar, Footer, SEO, Breadcrumb)。
*   `src/data/`: 模擬資料 (如 `mockForumData.ts` 用於生成論壇假資料)。

---

## 🚀 快速開始 (Development)

### 1. 安裝依賴
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
訪問 `http://localhost:3000` 即可預覽。

### 3. 部署 (Deployment)
本專案已配置好 Zeabur 部署設定 (`vite.config.ts` 已允許 `allowedHosts`)。
直接將代碼推送到 GitHub 並連接 Zeabur 即可自動部署。

---

## 🛡️ SEO 防護機制 (Test Site Protection)

為了防止測試站內容被 Google 收錄導致 Duplicate Content (重複內容) 問題，目前已實施以下防護：

1.  **`public/robots.txt`**: 設定為 `Disallow: /`。
2.  **`index.html`**: 包含 `<meta name="robots" content="noindex, nofollow" />`。
3.  **`src/components/SEO.tsx`**: 所有頁面強制輸出 `noindex` meta tag。

> **注意**: 未來遷移到 WordPress 正式站時，請務必依照 `WP_LAUNCH_SEO_CHECKLIST.md` 解除這些防護。

---

## 📝 功能對照 (React -> WP)

| 功能模組 | React 原型路徑 | 未來 WP 對應 |
| -------- | ------------ | ----------- |
| 論壇首頁 | `/forum` | Archive Template |
| 論壇版塊 | `/forum/c/:id` | Taxonomy Template |
| 論壇文章 | `/topic/:slug` | Single Post (CPT) |
| 娛樂城評測 | `/recommendations` | Page / Archive |
| 遊戲攻略 | `/guides` | Category Archive |

---

## 🤝 交接事項

1.  請先確認 React 站的 `/forum` 頁面，了解期望的論壇互動流程與視覺風格。
2.  依照 `WP_DEVELOPMENT_SPEC.md` 建立 WordPress 的後台欄位。
3.  使用 `src/data/mockForumData.ts` 中的內容作為初期填充資料。
4.  圖片素材請直接從 `public/images` 移植使用。
