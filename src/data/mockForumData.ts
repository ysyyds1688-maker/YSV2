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
    description: '討論各種博弈相關話題，分享心情與八卦。',
    icon: 'MessageSquare'
  },
  {
    id: '2',
    name: '娛樂城評價',
    description: '真實玩家的娛樂城遊玩體驗與評測，避雷必看。',
    icon: 'Star'
  },
  {
    id: '3',
    name: '遊戲攻略',
    description: '百家樂、老虎機、體育投注等專業遊戲技巧分享。',
    icon: 'BookOpen'
  },
  {
    id: '4',
    name: '優惠情報',
    description: '最新娛樂城體驗金、首存優惠、返水資訊彙整。',
    icon: 'Gift'
  }
];

export const FORUM_TOPICS: ForumTopic[] = [
  {
    id: '1',
    slug: '2025-top-10-casinos-review',
    categoryId: '2',
    title: '【2025年度評測】十大娛樂城推薦總整理：出金速度、優惠力度實測',
    author: '賭場老司機',
    date: '2025-11-20',
    views: 12580,
    replies: 45,
    tags: ['娛樂城推薦', '出金實測', '2025排名'],
    summary: '經過團隊實測，整理出 2025 年最值得遊玩的十大娛樂城。我們針對出金速度、遊戲種類、客服品質進行了全方位的評比...',
    image: '/images/recommendations/casino-1.jpg',
    content: `
      <h2>為什麼選擇正確的娛樂城很重要？</h2>
      <p>在網路上搜尋娛樂城，成千上萬的結果讓人眼花撩亂。選錯平台不僅可能遇到不出金的詐騙，還可能因為遊戲公平性問題而輸得不明不白。本篇評測旨在幫助玩家避開黑網，找到真正安全、好玩的平台。</p>
      
      <h2>評測標準說明</h2>
      <ul>
        <li><strong>出金速度：</strong> 我們實際存款並申請提款，記錄到帳時間。</li>
        <li><strong>遊戲豐富度：</strong> 是否包含主流的真人百家樂、老虎機品牌。</li>
        <li><strong>優惠誠意：</strong> 流水倍數是否合理，是否為看得到吃不到的優惠。</li>
      </ul>

      <h2>Top 1. YS 娛樂城</h2>
      <p>作為目前市場上信譽最好的平台之一，YS 娛樂城以其穩定的出金和高水位的賠率著稱。我們測試了 5 筆大額提款，平均到帳時間在 10 分鐘以內。</p>
      
      <h2>總結</h2>
      <p>選擇娛樂城時，切記不要被過於誇張的優惠（如存1000送5000）所迷惑，安全出金才是最重要的。</p>
    `
  },
  {
    id: '2',
    slug: 'baccarat-road-reading-guide',
    categoryId: '3',
    title: '百家樂看路法教學：三珠路實戰解析，提高勝率 20%',
    author: '百家樂算牌手',
    date: '2025-11-18',
    views: 8960,
    replies: 32,
    tags: ['百家樂', '看路法', '三珠路'],
    summary: '三珠路是百家樂高階玩家常用的看路技巧。本文詳細解析如何繪製三珠路，以及如何利用它來判斷下注時機...',
    image: '/images/guides/baccarat-road-reading.jpg',
    content: `
      <h2>什麼是三珠路？</h2>
      <p>三珠路是一種將大路結果每三局分為一組的記錄方式。通過觀察每一組的莊閒分佈，我們可以發現某種規律的重複或破壞。</p>

      <h2>三珠路的基本型態</h2>
      <p>三珠路主要有以下幾種型態：</p>
      <ul>
        <li><strong>絕對正式：</strong> BBB, PPP</li>
        <li><strong>絕對反式：</strong> BPP, PBB, BPB, PBP</li>
      </ul>

      <h2>實戰應用策略</h2>
      <p>當發現牌路呈現「連跳連跳」的規律時，是切入的最佳時機。建議配合纜法（如馬丁格爾策略）進行資金管理，但務必設定止損點。</p>
    `
  },
  {
    id: '3',
    slug: 'free-bonus-168-no-deposit',
    categoryId: '4',
    title: '獨家！註冊即送 168 體驗金，免儲值可提領（限時領取）',
    author: '優惠情報員',
    date: '2025-11-25',
    views: 15400,
    replies: 88,
    tags: ['體驗金', '免儲值', '限時優惠'],
    summary: 'YS 娛樂城最新限時活動！新會員註冊並完成身份驗證，即可向客服申請 168 體驗金。流水僅需 1 倍，贏錢可直接提領！',
    image: '/images/promotions/welcome-bonus.jpg',
    content: `
      <h2>活動詳情</h2>
      <p>為了回饋新玩家，本站特別推出限時體驗金活動。不同於其他平台的高流水要求，我們主打「真實體驗」。</p>

      <h2>領取步驟</h2>
      <ol>
        <li>點擊本站連結前往註冊頁面。</li>
        <li>完成手機號碼驗證。</li>
        <li>加入官方 LINE 客服，發送截圖申請。</li>
        <li>審核通過後，168 點數自動入帳。</li>
      </ol>

      <h2>注意事項</h2>
      <p>本活動每位會員限領一次，同 IP 只能申請一次。發現惡意刷分行為將凍結帳號。</p>
    `
  },
  {
    id: '4',
    slug: 'slots-rtp-high-return',
    categoryId: '3',
    title: '老虎機咬分期怎麼看？挑選高 RTP 機台的秘密',
    author: '老虎機殺手',
    date: '2025-11-22',
    views: 6700,
    replies: 12,
    tags: ['老虎機', 'RTP', '選台技巧'],
    summary: '為什麼你的老虎機總是只咬不吐？可能你選錯了機台！本文教你如何查詢機台 RTP，以及判斷機台是否處於吐分期。',
    image: '/images/articles/slots-rtp-guide.jpg',
    content: `
      <h2>RTP 的重要性</h2>
      <p>RTP (Return to Player) 代表機台的理論回報率。選擇 RTP 高於 96% 的機台，長期下來你的虧損會顯著減少。</p>

      <h2>如何判斷吐分期？</h2>
      <p>當你發現一台機器頻繁出現小獎（如 Scatter 經常出現 2 個），這可能是一個訊號。建議使用小注碼測試 50 轉，觀察中獎頻率。</p>
    `
  },
  {
    id: '5',
    slug: 'sports-betting-bankroll-management',
    categoryId: '1',
    title: '心態崩了？運彩投注最重要的資金管理心法',
    author: '運彩分析師',
    date: '2025-11-15',
    views: 4300,
    replies: 28,
    tags: ['心態調整', '資金管理', '運彩'],
    summary: '運彩贏錢靠的不是運氣，而是心態與資金管理。輸錢了想凹回來？這就是你破產的開始。',
    image: '/images/articles/sports-bankroll.jpg',
    content: `
      <h2>均注法 vs 倍投法</h2>
      <p>對於新手玩家，我們強烈建議使用「均注法」。將你的總資金分成 100 等份，每場比賽只下注 1-2 份。這樣即使遭遇連敗，也不會傷筋動骨。</p>

      <h2>設定止盈止損</h2>
      <p>每天設定一個目標，例如贏 20% 就停，輸 10% 就停。嚴格執行紀律，是成為職業玩家的第一步。</p>
    `
  }
];
