export interface ForumTopic {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  author: string;
  date: string;
  views: number;
  replies: number;
  tags: string[];
  summary: string;
  content: string; // 這裡存儲 HTML 內容或 Markdown
  image: string; // 新增圖片欄位
}

export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name or image path
}

export const FORUM_CATEGORIES: ForumCategory[] = [
  {
    id: '1',
    name: '綜合討論',
    description: 'MR9 玩家交流區，分享遊戲心得與心情。',
    icon: 'MessageSquare'
  },
  {
    id: '2',
    name: '娛樂城評價',
    description: 'MR9 出金速度、客服品質真實評測。',
    icon: 'Star'
  },
  {
    id: '3',
    name: '遊戲攻略',
    description: 'TOP體育、DG真人、88SOFT電子等專業攻略。',
    icon: 'BookOpen'
  },
  {
    id: '4',
    name: '優惠情報',
    description: 'MR9 最新體驗金、首存優惠活動整理。',
    icon: 'Gift'
  }
];

export const FORUM_TOPICS: ForumTopic[] = [
  {
    id: '1',
    slug: 'mr9-sports-odds-review',
    categoryId: '3',
    title: '【體育實測】TOP體育 vs 熊貓體育：哪家賠率更好？MR9 玩家實測數據大公開',
    author: '運彩分析師',
    date: '2025-11-28',
    views: 12580,
    replies: 45,
    tags: ['MR9體育', 'TOP體育', '賠率分析'],
    summary: '許多 MR9 的玩家都在問，到底該玩 TOP 體育還是熊貓體育？我們團隊針對 NBA 和英超賽事進行了為期一週的賠率追蹤實測...',
    image: '/images/articles/sports-analysis.jpg',
    content: `
      <h2>為什麼選擇合適的體育平台很重要？</h2>
      <p>在 MR9 娛樂城中，提供了 TOP、熊貓、LIVE、WG 等多個體育平台。不同的平台在盤口開出時間、賠率水位以及滾球流暢度上都有差異。</p>
      
      <h2>TOP 體育實測優勢</h2>
      <ul>
        <li><strong>賠率水位：</strong> 經過比對，TOP 體育在五大聯賽的讓分盤賠率平均高出 0.02-0.03。</li>
        <li><strong>介面操作：</strong> 介面簡潔，特別適合手機端快速下注。</li>
        <li><strong>返水優惠：</strong> 配合 MR9 的首頁活動，TOP 體育享有高達 1.2% 的返水。</li>
      </ul>

      <h2>熊貓體育的特色</h2>
      <p>熊貓體育則在「虛擬體育」和「電競盤口」上擁有更多選擇。如果你是喜歡玩英雄聯盟或傳說對決的玩家，熊貓體育會是更好的選擇。</p>
      
      <h2>總結建議</h2>
      <p>如果你是足球迷或籃球迷，追求最高賠率，首選 **TOP 體育**。如果你喜歡玩電競或冷門賽事，建議選擇 **熊貓體育**。</p>
    `
  },
  {
    id: '2',
    slug: 'dg-baccarat-road-reading',
    categoryId: '3',
    title: 'DG真人百家樂實戰：利用 MR9 多檯介面抓長龍技巧',
    author: '百家樂算牌手',
    date: '2025-11-26',
    views: 8960,
    replies: 32,
    tags: ['MR9真人', 'DG百家樂', '長龍技巧'],
    summary: 'DG 真人是 MR9 最受歡迎的真人視訊平台之一。本文將教你如何利用 MR9 的多檯監控功能，快速鎖定好路長龍...',
    image: '/images/guides/baccarat-road-reading.jpg',
    content: `
      <h2>為什麼選擇 DG 真人？</h2>
      <p>DG (Dream Gaming) 以其高清流暢的視訊和美麗的荷官著稱。在 MR9 平台上，DG 真人的連線穩定度極高，幾乎不會出現卡頓情況，這對於抓路玩家來說至關重要。</p>

      <h2>多檯介面抓龍法</h2>
      <p>MR9 支援「多檯模式」，你可以同時監控 4-8 桌的牌路。當你發現某桌出現以下路單時，請立即切入：</p>
      <ul>
        <li><strong>長莊/長閒：</strong> 連續 6 口以上。</li>
        <li><strong>單跳路：</strong> 莊閒交替出現 6 口以上。</li>
      </ul>

      <h2>實戰心法</h2>
      <p>切記，跟長龍時要「敢贏怯輸」。第一注平注，贏了可以考慮適度加注（勝進），一旦斷龍立即停手或換桌，不要與趨勢作對。</p>
    `
  },
  {
    id: '3',
    slug: 'mr9-welcome-bonus-guide',
    categoryId: '4',
    title: 'MR9 新手福利：註冊體驗金 + 首存優惠如何最大化利用？',
    author: '優惠情報員',
    date: '2025-11-25',
    views: 15400,
    replies: 88,
    tags: ['MR9優惠', '體驗金', '首存紅利'],
    summary: 'MR9 娛樂城針對新會員推出了一系列福利。很多新手不知道如何申請，甚至錯過了首存加贈的機會。本文手把手教你領好領滿！',
    image: '/images/promotions/welcome-bonus.jpg',
    content: `
      <h2>第一步：註冊與驗證</h2>
      <p>前往 MR9 官網完成註冊後，務必先到「個人中心」完成手機號碼驗證與銀行卡綁定。這是領取體驗金的必要條件。</p>

      <h2>第二步：領取體驗金</h2>
      <p>驗證完成後，不要急著儲值！先聯繫 24 小時在線客服，申請「新會員體驗金」。這筆錢是完全免費的，可以用來熟悉平台操作。</p>

      <h2>第三步：首存優惠攻略</h2>
      <p>MR9 的首存優惠通常是階梯式的。建議第一次儲值金額稍微高一點（例如達到活動最高門檻），這樣獲得的紅利比例最划算。記得在儲值前先查看當期的活動代碼或規則。</p>
    `
  },
  {
    id: '4',
    slug: '88soft-caishen-big-win',
    categoryId: '3',
    title: '88SOFT 電子《財神來了》爆分時刻分享：我在 MR9 贏了 5000 倍',
    author: '老虎機殺手',
    date: '2025-11-22',
    views: 6700,
    replies: 12,
    tags: ['MR9電子', '88SOFT', '爆分視頻'],
    summary: '88SOFT 是 MR9 上非常熱門的電子遊戲平台。昨天我在玩《財神來了》時，意外觸發了全盤財神，直接爆出 5000 倍大獎...',
    image: '/images/articles/slots-rtp-guide.jpg',
    content: `
      <h2>遊戲介紹：財神來了</h2>
      <p>這款由 88SOFT 開發的《財神來了》，以其中獎率高、畫面喜氣著稱。遊戲採用 243 路賠付機制，只要連續出現相同符號即可中獎。</p>

      <h2>我的爆分過程</h2>
      <p>當時我設定每轉 10 元，自動旋轉 50 次。大概在第 20 轉的時候，畫面突然變暗，然後出現了三個金元寶（Scatter），進入免費遊戲。在免費遊戲中，財神符號具有加倍功能，最後一轉直接堆疊了滿版財神！</p>

      <h2>選台技巧</h2>
      <p>建議大家在 MR9 玩電子遊戲時，可以觀察「熱門遊戲」排行榜。通常榜上有名的遊戲，正處於吐分期，中獎機率相對較高。</p>
    `
  }
];
