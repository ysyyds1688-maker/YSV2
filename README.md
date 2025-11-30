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
*   📄 **`圖片資源清單.md`**: 完整的圖片使用清單與狀態追蹤（✅ 41 張已完成，❌ 3 張待補充）。
*   📄 **`IMAGE_REQUIREMENTS.md`**: 全站圖片尺寸規範與 AI 生成提示詞。
*   📂 **`public/images/`**: 存放已生成的圖片素材，已建立完整資料夾結構（articles, promotions, guides, recommendations, influencers）。

### 3. 程式碼結構
*   `pages/`: 所有頁面組件
    *   `pages/forum/`: **論壇功能原型** (首頁、版塊、內文)。
    *   `pages/games/`: 遊戲專區頁面。
    *   `pages/guides/`: 攻略教學頁面。
*   `components/`: 共用組件 (Navbar, Footer, SEO, Breadcrumb)。
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
3.  **`components/SEO.tsx`**: 所有頁面強制輸出 `noindex` meta tag。

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

## 🖼️ 圖片資源狀態

### ✅ 已完成圖片：41 張

- **主要遊戲圖片**：27 張（導航欄 Banner、遊戲頁面 Banner、首頁遊戲卡片、遊戲專區卡片、首頁文章）
- **文章/新聞圖片**：6 張（已整理至 `articles/` 資料夾）
- **優惠活動圖片**：2 張（已整理至 `promotions/` 資料夾）
- **攻略教學圖片**：2 張（已整理至 `guides/` 資料夾）
- **推薦評測圖片**：4 張（已整理至 `recommendations/` 資料夾）

### ❌ 待補充圖片：3 張

- **網紅頭像**：`influencer-1.jpg`, `influencer-2.jpg`, `influencer-3.jpg`（需放置於 `influencers/` 資料夾）

### 📂 圖片資料夾結構

```
public/images/
├── 已使用/              # 主要遊戲圖片（19張）
├── articles/            # 文章圖片（6張）✅
├── promotions/          # 優惠活動圖片（2張）✅
├── guides/              # 攻略教學圖片（2張）✅
├── recommendations/     # 推薦評測圖片（4張）✅
└── influencers/         # 網紅頭像（待補充3張）❌
```

> 📄 **詳細清單**：請參考 `圖片資源清單.md` 查看完整的圖片使用狀況與規格說明。

---

## 📊 專案進度總覽

### ✅ 已完成項目

#### 1. 圖片資源整理（95% 完成）
- ✅ 建立完整的圖片資料夾結構（articles, promotions, guides, recommendations, influencers）
- ✅ 整理並移動所有已使用的圖片至 `已使用/` 資料夾
- ✅ 完成 41 張圖片的路徑更新與分類
- ✅ 建立 `圖片資源清單.md` 完整追蹤文件
- ⚠️ 待補充：3 張網紅頭像

#### 2. YS 頁面文章完善（100% 完成）
- ✅ **關於我們頁面** (`/trust/about`)：完整內容 + Organization schema
- ✅ **客服頁面** (`/trust/contact`)：完整內容 + ContactPage schema
- ✅ **出金保障頁面** (`/trust/security`)：完整內容 + FAQ schema
- ✅ 所有頁面包含完整的 SEO 優化（meta 標籤、結構化數據、內部連結）
- ✅ 建立 `YS頁面文章檢查清單.md` 追蹤文件

#### 3. SEO 優化
- ✅ 所有頁面包含完整的 meta 標籤
- ✅ 結構化數據（Schema.org）已實施
- ✅ 清晰的 H1/H2/H3 標題結構
- ✅ 內部連結優化

### ⚠️ 待完成項目

#### 1. 圖片補充
- ❌ 網紅頭像 3 張（`influencers/influencer-1.jpg`, `influencer-2.jpg`, `influencer-3.jpg`）

#### 2. 內容完善（可選）
- ⚠️ 其他頁面內容檢查與優化
- ⚠️ 更多內部連結建立
- ⚠️ 圖片 alt 標籤檢查

---

## 🤝 交接事項

1.  請先確認 React 站的 `/forum` 頁面，了解期望的論壇互動流程與視覺風格。
2.  依照 `WP_DEVELOPMENT_SPEC.md` 建立 WordPress 的後台欄位。
3.  使用 `src/data/mockForumData.ts` 中的內容作為初期填充資料。
4.  圖片素材請直接從 `public/images` 移植使用，已建立完整資料夾結構。
5.  **補充缺失的圖片**：僅需補充 3 張網紅頭像，詳細請參考 `圖片資源清單.md`。

---

## 📝 更新日誌

### 2025-01-XX (最新更新)
- ✅ **圖片資源整理完成**：41 張圖片已完成分類與路徑更新，建立完整資料夾結構
- ✅ **YS 頁面文章完善**：關於我們、客服、出金保障三個頁面已完成內容與 SEO 優化
- ✅ **SEO 優化完成**：所有頁面包含結構化數據、meta 標籤、內部連結
- ✅ **文件建立**：`圖片資源清單.md`、`YS頁面文章檢查清單.md`
- ⚠️ **待補充**：3 張網紅頭像

### 2025-01-XX (前期更新)
- ✅ 完成所有遊戲頁面 Banner (16:9 比例)
- ✅ 完成導航欄 Banner 圖片
- ✅ 完成首頁熱門遊戲區塊圖片
- ✅ 完成遊戲專區頁面所有卡片圖片
