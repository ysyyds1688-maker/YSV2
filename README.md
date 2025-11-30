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

## 🖼️ 圖片資源清單與狀態

### ✅ 已完成的圖片

#### 1. 導航欄 Banner (Hover 時顯示)
- ✅ `/images/體育 banner2.png` - 體育導航欄 banner
- ✅ `/images/真人banner2.png` - 真人導航欄 banner
- ✅ `/images/電子banner1.png` - 電子導航欄 banner
- ✅ `/images/棋牌banner1.png` - 棋牌導航欄 banner
- ✅ `/images/優惠banner1.png` - 優惠導航欄 banner

#### 2. 遊戲頁面 Hero Banner (16:9 比例)
- ✅ `/images/真人banner2.png` - 真人百家樂頁面
- ✅ `/images/電子banner1.png` - 電子遊戲頁面
- ✅ `/images/棋牌banner1.png` - 棋牌遊戲頁面
- ✅ `/images/優惠banner1.png` - 優惠活動頁面
- ✅ `/images/體育 banner2.png` - 體育投注頁面

#### 3. 首頁熱門遊戲區塊
- ✅ `/images/體育.png` - 體育遊戲卡片
- ✅ `/images/真人 平台熱門.png` - 真人遊戲卡片
- ✅ `/images/電子 平台熱門.png` - 電子遊戲卡片
- ✅ `/images/高登橋牌 平台熱門.png` - 棋牌遊戲卡片

#### 4. 遊戲專區頁面卡片
- ✅ `/images/真人遊戲專區.png` - 真人百家樂卡片
- ✅ `/images/電子遊戲專區.png` - 電子遊戲卡片
- ✅ `/images/體育遊戲專區.png` - 體育投注卡片
- ✅ `/images/高登橋牌遊戲專區.png` - 棋牌遊戲卡片
- ✅ `/images/捕魚機遊戲專區.png` - 捕魚機卡片
- ✅ `/images/彩票遊戲專區.png` - 彩票卡片
- ✅ `/images/電競遊戲專區2.png` - 電競卡片

### ❌ 缺失的圖片 (需要補充)

#### 1. 首頁相關
- ❌ `/images/home-banner.png` - 首頁 Hero 區塊背景圖 (可選，目前有影片背景)
- ❌ `/images/recommendations/casino-1.jpg` - 首頁推薦文章圖片
- ❌ `/images/guides/baccarat-road-reading.jpg` - 首頁攻略文章圖片
- ❌ `/images/promotions/welcome-bonus.jpg` - 首頁優惠文章圖片

#### 2. 文章/新聞相關
- ❌ `/images/articles/baccarat-tips.jpg` - 百家樂技巧文章
- ❌ `/images/articles/slots-recommendation.jpg` - 老虎機推薦文章
- ❌ `/images/articles/sports-analysis.jpg` - 體育分析文章
- ❌ `/images/articles/casino-recommendation.jpg` - 娛樂城推薦文章
- ❌ `/images/articles/slots-rtp-guide.jpg` - 老虎機 RTP 指南文章
- ❌ `/images/articles/sports-bankroll.jpg` - 體育資金管理文章

#### 3. 優惠活動相關
- ❌ `/images/promotions/first-deposit.jpg` - 首存優惠圖片

#### 4. 攻略教學相關
- ❌ `/images/guides/baccarat-basics.jpg` - 百家樂基礎教學
- ❌ `/images/guides/baccarat-road-reading.jpg` - 百家樂看路法教學

#### 5. 推薦/評測相關
- ❌ `/images/recommendations/casino-1.jpg` - 娛樂城推薦圖片 (多張，casino-1.jpg, casino-2.jpg 等)

#### 6. 網紅/影響者相關
- ❌ `/images/influencers/influencer-1.jpg` - 網紅頭像 (多張，influencer-1.jpg, influencer-2.jpg, influencer-3.jpg)

#### 7. 其他遊戲頁面 (舊路徑，已改用 banner)
- ❌ `/images/games/slots.png` - 電子遊戲 (已改用 `/images/電子 平台熱門.png`)
- ❌ `/images/games/baccarat.png` - 真人百家樂 (已改用 `/images/真人 平台熱門.png`)
- ❌ `/images/games/sports.png` - 體育投注 (已改用 `/images/體育.png`)
- ❌ `/images/games/poker.png` - 棋牌遊戲 (已改用 `/images/高登橋牌 平台熱門.png`)
- ❌ `/images/games/lottery.png` - 彩票遊戲
- ❌ `/images/games/slots-hero.jpg` - 電子遊戲頁面 (已改用 banner)
- ❌ `/images/games/poker-hero.jpg` - 棋牌遊戲頁面 (已改用 banner)
- ❌ `/images/games/sports-hero.jpg` - 體育投注頁面 (已改用 banner)
- ❌ `/images/games/lottery-hero.jpg` - 彩票頁面
- ❌ `/images/baccarat/baccarat-cover.png` - 真人百家樂封面 (已改用 banner)

### 📋 圖片放置說明

#### 圖片資料夾結構建議：
```
public/images/
├── articles/          # 文章圖片
│   ├── baccarat-tips.jpg
│   ├── slots-recommendation.jpg
│   ├── sports-analysis.jpg
│   ├── casino-recommendation.jpg
│   ├── slots-rtp-guide.jpg
│   └── sports-bankroll.jpg
├── guides/            # 攻略教學圖片
│   ├── baccarat-basics.jpg
│   └── baccarat-road-reading.jpg
├── promotions/        # 優惠活動圖片
│   ├── welcome-bonus.jpg
│   └── first-deposit.jpg
├── recommendations/   # 推薦評測圖片
│   ├── casino-1.jpg
│   ├── casino-2.jpg
│   └── casino-3.jpg (依需求增加)
├── influencers/      # 網紅頭像
│   ├── influencer-1.jpg
│   ├── influencer-2.jpg
│   └── influencer-3.jpg
└── games/            # 遊戲相關圖片 (部分已改用根目錄)
    └── lottery.png (如需要)
```

#### 圖片規格建議：
- **Banner 圖片**: 16:9 比例，建議尺寸 1920x1080px 或更高
- **卡片圖片**: 建議 4:3 或 16:9 比例，尺寸 800x600px 或更高
- **文章封面**: 建議 16:9 比例，尺寸 1200x675px 或更高
- **網紅頭像**: 建議 1:1 比例，尺寸 400x400px 或更高
- **格式**: 建議使用 JPG (照片) 或 PNG (需要透明背景時)

---

## 🤝 交接事項

1.  請先確認 React 站的 `/forum` 頁面，了解期望的論壇互動流程與視覺風格。
2.  依照 `WP_DEVELOPMENT_SPEC.md` 建立 WordPress 的後台欄位。
3.  使用 `src/data/mockForumData.ts` 中的內容作為初期填充資料。
4.  圖片素材請直接從 `public/images` 移植使用。
5.  **補充缺失的圖片**：請參考上方「缺失的圖片」清單，補充必要的圖片資源。

---

## 📝 更新日誌

### 2025-01-XX (最新更新)
- ✅ 完成所有遊戲頁面 Banner (16:9 比例)
- ✅ 完成導航欄 Banner 圖片
- ✅ 完成首頁熱門遊戲區塊圖片
- ✅ 完成遊戲專區頁面所有卡片圖片
- ⚠️ 待補充：文章、優惠、推薦等相關圖片
