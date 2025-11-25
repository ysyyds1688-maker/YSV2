import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen, 
  Menu, 
  Search, 
  ChevronRight, 
  Flame,
  Globe,
  Filter,
  CheckCircle,
  Clock,
  ArrowRight,
  LayoutGrid,
  List,
  Calendar,
  Zap,
  BarChart3,
  Users,
  Lock,
  ArrowLeft,
  Share2,
  Bookmark
} from 'lucide-react';

// --- Types & Navigation Logic ---

type PageType = 'home' | 'rankings' | 'news' | 'strategy' | 'news-detail' | 'strategy-detail';

// --- Mock Data (Global) ---

const RANKINGS_DATA = [
  { rank: 1, name: "RoyaleBet Pro", rating: 4.9, tags: ['極速出金', 'USDT'], bonus: "$5000", payout: "5分鐘", winRate: "97.8%" },
  { rank: 2, name: "DragonCity 88", rating: 4.8, tags: ['真人荷官', '中文客服'], bonus: "$168", payout: "15分鐘", winRate: "96.5%" },
  { rank: 3, name: "PokerKing", rating: 4.7, tags: ['德州撲克', '國際賽事'], bonus: "門票券", payout: "即時", winRate: "95.2%" },
  { rank: 4, name: "SlotMaster", rating: 4.5, tags: ['電子遊戲', '累積獎池'], bonus: "100轉", payout: "1小時", winRate: "98.1%" },
  { rank: 5, name: "Bet365 Asia", rating: 4.4, tags: ['體育賽事', '滾球盤'], bonus: "50%", payout: "3小時", winRate: "94.5%" },
  { rank: 6, name: "LuckyCrypto", rating: 4.2, tags: ['純加密貨幣', '匿名'], bonus: "1 BTC", payout: "自動", winRate: "97.0%" },
];

const NEWS_DATA = [
  { 
    id: 1, 
    category: "產業動態", 
    date: "2024-03-20", 
    title: "亞洲博弈市場 Q1 報告：加密貨幣支付佔比大幅提升", 
    desc: "根據最新的市場調查顯示，超過 40% 的線上娛樂用戶傾向使用 USDT 進行存取款，這標誌著去中心化金融在娛樂產業的全面落地。本文將深入探討各大平台的應對策略與未來趨勢。", 
    image: "from-blue-900 to-slate-900",
    content: `
      <p class="mb-6">2024年第一季度的亞洲博弈市場報告顯示了一個顯著的趨勢：加密貨幣支付，特別是 USDT (Tether)，正在迅速取代傳統銀行轉帳，成為玩家的首選支付方式。</p>
      <h3 class="text-xl font-bold text-white mb-4">為什麼玩家轉向加密貨幣？</h3>
      <p class="mb-6">主要原因在於隱私性與速度。傳統銀行監管日益嚴格，導致大額存取款經常面臨風控審查。相比之下，USDT 的點對點傳輸不僅能在幾分鐘內到帳，還能有效保護用戶的資金隱私。此外，許多平台針對加密貨幣存款提供了額外的 5-10% 紅利，這進一步推動了使用率。</p>
      <h3 class="text-xl font-bold text-white mb-4">平台的應對與挑戰</h3>
      <p class="mb-6">為了適應這一變化，包括 RoyaleBet Pro 和 LuckyCrypto 在內的頭部平台已經完成了支付網關的升級，全面支持 TRC20 與 ERC20 協議。然而，中小型平台由於技術門檻，目前仍面臨轉型困難。專家預測，未來兩年內，無法提供穩定加密貨幣支付通道的平台將流失 30% 以上的高端用戶。</p>
      <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-500 mb-6">
        <p class="text-slate-300 italic">"這不僅僅是支付方式的改變，這是一場關於信任機制重構的革命。" —— YS 資深分析師 Jason Wu</p>
      </div>
      <p>隨著監管環境的變遷，我們預計 Q2 將會有更多關於「去中心化賭場 (DeFi Gambling)」的創新應用出現，請持續關注 YS 的後續報導。</p>
    `
  },
  { 
    id: 2, 
    category: "法規政策", 
    date: "2024-03-18", 
    title: "台灣線上博弈法規懶人包：遊玩是否違法？", 
    desc: "深入解析台灣現行法律對於線上博弈的定義與灰色地帶，保護玩家自身權益必讀。從刑法賭博罪到洗錢防制法，我們為您整理了五大關鍵QA。", 
    image: "from-red-900 to-slate-900",
    content: `
      <p class="mb-6">近期關於線上博弈的法律新聞頻傳，許多玩家對於「在家玩娛樂城是否違法」感到困惑。YS 法務團隊特別整理了目前的實務見解，希望能釐清大家的疑慮。</p>
      <h3 class="text-xl font-bold text-white mb-4">關鍵一：賭博罪的定義</h3>
      <p class="mb-6">根據刑法第 266 條，在「公共場所」或「公眾得出入之場所」賭博財物者，才構成賭博罪。過去法院多認為網路空間具有私密性，不屬於公共場所。然而，最新的修法趨勢與部分判例已經開始將「網路賭博」納入規範範圍，特別是當網站具有公開招募性質時。</p>
      <h3 class="text-xl font-bold text-white mb-4">如何保護自己？</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>選擇境外合法執照平台：</strong> 伺服器與公司設立在博弈合法的國家（如菲律賓、馬耳他），相對較難被認定為在境內犯罪。</li>
        <li><strong>避免使用個人銀行帳戶直連：</strong> 使用第三方支付或加密貨幣，可以減少金流被追蹤的風險。</li>
        <li><strong>低調遊玩：</strong> 切勿在公開社群媒體上張貼獲利截圖或招攬如下線，這極易觸犯「意圖營利供給賭博場所罪」。</li>
      </ul>
      <p class="mb-6">總結來說，雖然目前針對單純玩家的查緝力度相對較小，但風險依然存在。建議玩家保持低調，並隨時關注最新的法律動態。</p>
      <p class="text-xs text-slate-500">*免責聲明：本文僅供資訊交流，不構成法律建議。具體個案請諮詢專業律師。</p>
    `
  },
  { id: 3, category: "新台發布", date: "2024-03-15", title: "SlotMaster 推出全新 3D 老虎機，RTP 高達 98%", desc: "知名電子遊戲開發商昨日發布了年度大作，主打高回報率與沉浸式體驗。", image: "from-amber-900 to-slate-900", content: "<p>內容撰寫中...</p>" },
  { id: 4, category: "賽事分析", date: "2024-03-12", title: "NBA 季後賽運彩盤口分析：勇士 vs 湖人", desc: "資深分析師帶你拆解盤口陷阱，從數據面看這場焦點之戰的投注價值。", image: "from-green-900 to-slate-900", content: "<p>內容撰寫中...</p>" },
  { id: 5, category: "產業動態", date: "2024-03-10", title: "真人百家樂技術革新：VR 賭場即將來臨？", desc: "隨著 Apple Vision Pro 上市，博弈產業正積極探索虛擬實境賭場的可能性。", image: "from-purple-900 to-slate-900", content: "<p>內容撰寫中...</p>" },
  { id: 6, category: "詐騙警示", date: "2024-03-08", title: "【黑名單】3月份網友舉報不出金平台總整理", desc: "YS 收到超過 50 份投訴，以下這幾家平台請玩家務必避開。", image: "from-slate-800 to-black", content: "<p>內容撰寫中...</p>" },
];

const GUIDES_DATA = [
  { 
    id: 1,
    title: "凱利公式 (Kelly Criterion) 在運彩中的應用詳解", 
    category: "體育運彩", 
    level: "進階", 
    readTime: "8 min",
    content: `
      <p class="mb-6 text-lg text-slate-300">「贏多少不重要，重要的是在輸的時候你還剩下多少籌碼。」這就是凱利公式的核心精神。在體育博彩中，資金管理往往比預測賽果更重要。</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">什麼是凱利公式？</h3>
      <p class="mb-6">凱利公式是一個用來計算在每次投注中，為了最大化長期增長率，應該投入多少比例資金的數學公式。公式如下：</p>
      
      <div class="bg-slate-800 p-6 rounded-lg font-mono text-cyan-400 mb-6 text-center text-lg">
        f* = (bp - q) / b
      </div>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-slate-400">
        <li><strong class="text-white">f*</strong> = 應投注的資金比例</li>
        <li><strong class="text-white">b</strong> = 賠率 (小數盤賠率 - 1)</li>
        <li><strong class="text-white">p</strong> = 獲勝機率 (你預測的勝率)</li>
        <li><strong class="text-white">q</strong> = 落敗機率 (1 - p)</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">實際應用案例</h3>
      <p class="mb-4">假設一場 NBA 比賽，你認為湖人隊的勝率是 60% (p=0.6)，而博彩公司開出的賠率是 2.0 (即 b=1)。</p>
      <p class="mb-6">代入公式：<br> f* = (1 * 0.6 - 0.4) / 1 = 0.2 <br> 這意味著，根據凱利公式，你應該下注你總資金的 20%。</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">YS 專家的建議：半凱利法</h3>
      <p class="mb-6">雖然凱利公式能最大化收益，但在實際操作中，它的波動性極大。如果你的勝率估算稍有誤差，全凱利可能會導致資金大幅回撤。因此，職業玩家通常使用「半凱利 (Half-Kelly)」甚至「四分之一凱利」，即只下注公式計算出來金額的 1/2 或 1/4，以降低破產風險。</p>
    `
  },
  { id: 2, title: "百家樂看路法：大路、小路、蟑螂路怎麼看？", category: "百家樂攻略", level: "新手", readTime: "5 min", content: "<p>百家樂路單是賭場提供給玩家的歷史記錄...</p>" },
  { id: 3, title: "老虎機 RTP 與 波動率 (Volatility) 的關係", category: "老虎機技巧", level: "中階", readTime: "6 min", content: "<p>RTP 代表玩家回報率...</p>" },
  { id: 4, title: "德州撲克起手牌範圍表 (Pre-flop Ranges)", category: "德州撲克", level: "進階", readTime: "12 min", content: "<p>在翻牌前選擇正確的手牌範圍是勝利的基礎...</p>" },
  { id: 5, title: "資金控管：如何設定止損點與止盈點", category: "通用觀念", level: "新手", readTime: "4 min", content: "<p>設定止損點是為了活下去...</p>" },
  { id: 6, title: "21點算牌術：Hi-Lo 計數法入門", category: "紙牌遊戲", level: "高階", readTime: "10 min", content: "<p>電影《決勝21點》中的算牌法其實並不難...</p>" },
];

// --- Components ---

// Neon Logo Component
const YSLogo = () => (
  <div className="relative group flex items-center justify-center">
    {/* Glow effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse-glow"></div>
    <div className="relative flex items-center">
      <span className="text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 mr-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        YS
      </span>
      <span className="font-bold text-white tracking-wide text-sm border-l-2 border-slate-600 pl-2 ml-1 hidden sm:block">
        娛樂論壇
      </span>
    </div>
  </div>
);

// 1. Navbar
const Navbar: React.FC<{ currentPage: PageType; onNavigate: (page: PageType) => void }> = ({ currentPage, onNavigate }) => {
  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'YS 首頁' },
    { id: 'rankings', label: '年度排名' },
    { id: 'news', label: '產業快訊' },
    { id: 'strategy', label: '贏家攻略' },
  ];

  // Helper to determine active state (including sub-pages)
  const isActive = (id: string) => {
    if (currentPage === id) return true;
    if (id === 'news' && currentPage === 'news-detail') return true;
    if (id === 'strategy' && currentPage === 'strategy-detail') return true;
    return false;
  };

  return (
    <nav className="bg-slate-950/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-slate-800 shadow-2xl shadow-cyan-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            className="flex items-center space-x-2 cursor-pointer focus:outline-none hover:scale-105 transition-transform duration-300" 
            onClick={() => onNavigate('home')}
          >
            <YSLogo />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive(item.id)
                      ? 'text-cyan-950 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] scale-105' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Search size={20} />
            </button>
            <button className="md:hidden p-2 text-slate-400 hover:text-white">
              <Menu size={20} />
            </button>
            <button className="hidden md:block bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-fuchsia-900/50 border border-fuchsia-500/30 hover:scale-105 active:scale-95">
              VIP 登入
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// 2. Footer
const Footer = ({ onNavigate }: { onNavigate: (page: PageType) => void }) => (
  <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none animate-blob"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="text-white font-bold mb-4 flex items-center"><Zap size={16} className="text-cyan-400 mr-2"/> 熱門分類</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => onNavigate('rankings')} className="hover:text-cyan-400 transition-colors">YS 嚴選百家樂</button></li>
            <li><button onClick={() => onNavigate('rankings')} className="hover:text-cyan-400 transition-colors">線上麻將推薦</button></li>
            <li><button onClick={() => onNavigate('rankings')} className="hover:text-cyan-400 transition-colors">體育運彩盤口</button></li>
            <li><button onClick={() => onNavigate('rankings')} className="hover:text-cyan-400 transition-colors">電子老虎機</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 flex items-center"><BookOpen size={16} className="text-fuchsia-400 mr-2"/> 策略教學</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => onNavigate('strategy')} className="hover:text-fuchsia-400 transition-colors">資金管理法</button></li>
            <li><button onClick={() => onNavigate('strategy')} className="hover:text-fuchsia-400 transition-colors">賠率計算教學</button></li>
            <li><button onClick={() => onNavigate('strategy')} className="hover:text-fuchsia-400 transition-colors">德州撲克起手牌</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">關於 YS</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="cursor-pointer hover:text-white transition-colors">關於我們</span></li>
            <li><span className="cursor-pointer hover:text-white transition-colors">聯絡方式</span></li>
            <li><span className="cursor-pointer hover:text-white transition-colors">免責聲明</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">訂閱 YS 週報</h4>
          <p className="text-xs mb-4 text-slate-500">獲取每週最新的賠率分析與獨家優惠碼。</p>
          <div className="flex">
            <input type="email" placeholder="您的 Email" className="bg-slate-900 border border-slate-800 rounded-l-md px-3 py-2 text-sm w-full focus:ring-1 focus:ring-cyan-400 focus:outline-none text-white placeholder-slate-600" />
            <button className="bg-cyan-500 text-slate-900 px-3 py-2 rounded-r-md font-bold text-sm hover:bg-cyan-400 transition-colors">GO</button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0">
          &copy; 2024 YS Forum. All rights reserved.
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <Globe size={16} />
            <span>繁體中文</span>
          </div>
          <span className="text-xs text-slate-600">本站僅供資訊交流，請遵守當地法律規範。</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

// PAGE: Home (Dashboard)
const HomePage = ({ onNavigate }: { onNavigate: (page: PageType) => void }) => {
  return (
    <div className="min-h-screen bg-slate-950 animate-fade-in-up">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 pointer-events-none">
           <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
           <div className="absolute top-20 right-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
           <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-sm font-bold mb-8 backdrop-blur-sm hover:bg-cyan-900/20 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            2024 最新娛樂城評級已更新
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
            <span className="block mb-2">掌握數據</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_15px_rgba(216,180,254,0.3)]">贏在起跑點</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
            YS 是全台最權威的博弈數據中心。我們透過大數據分析與實戰測試，為您篩選出高勝率、高回報的優質平台與策略。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate('rankings')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all flex items-center justify-center group"
            >
              查看年度排名 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20}/>
            </button>
            <button 
              onClick={() => onNavigate('strategy')}
              className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-full text-white font-bold hover:bg-slate-700 hover:border-slate-600 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-slate-700/30"
            >
              瀏覽策略教學
            </button>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="stagger-item bg-slate-900/80 backdrop-blur border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)]" onClick={() => onNavigate('rankings')} style={{ animationDelay: '100ms' }}>
            <div className="w-14 h-14 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
              <Trophy className="text-cyan-400 group-hover:text-cyan-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">權威平台排名</h3>
            <p className="text-slate-400 mb-4 group-hover:text-slate-300">獨家演算法分析 50+ 家娛樂城，針對出金速度、賠率與安全性進行評級。</p>
            <span className="text-cyan-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">查看榜單 <ChevronRight size={16} /></span>
          </div>

          {/* Card 2 */}
          <div className="stagger-item bg-slate-900/80 backdrop-blur border border-slate-800 p-8 rounded-2xl hover:border-fuchsia-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(217,70,239,0.3)]" onClick={() => onNavigate('strategy')} style={{ animationDelay: '200ms' }}>
            <div className="w-14 h-14 bg-fuchsia-900/30 rounded-xl flex items-center justify-center mb-6 border border-fuchsia-500/20 group-hover:bg-fuchsia-500/20 group-hover:scale-110 transition-all duration-300">
              <BarChart3 className="text-fuchsia-400 group-hover:text-fuchsia-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors">勝率策略分析</h3>
            <p className="text-slate-400 mb-4 group-hover:text-slate-300">從百家樂看路到德州撲克 GTO，提供專業玩家驗證的獲利模型。</p>
            <span className="text-fuchsia-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">學習策略 <ChevronRight size={16} /></span>
          </div>

          {/* Card 3 */}
          <div className="stagger-item bg-slate-900/80 backdrop-blur border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]" onClick={() => onNavigate('news')} style={{ animationDelay: '300ms' }}>
            <div className="w-14 h-14 bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
              <ShieldCheck className="text-emerald-400 group-hover:text-emerald-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">安全與黑名單</h3>
            <p className="text-slate-400 mb-4 group-hover:text-slate-300">即時更新詐騙平台警示，以及最新的產業法規動態，保障您的資金安全。</p>
            <span className="text-emerald-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">閱讀新聞 <ChevronRight size={16} /></span>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-slate-900 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center space-x-2 group cursor-default">
            <ShieldCheck size={24} className="text-cyan-500 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-bold text-slate-300 group-hover:text-white">SSL 加密認證</span>
          </div>
          <div className="flex items-center space-x-2 group cursor-default">
            <Users size={24} className="text-fuchsia-500 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-bold text-slate-300 group-hover:text-white">10,000+ 會員見證</span>
          </div>
          <div className="flex items-center space-x-2 group cursor-default">
            <Lock size={24} className="text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-bold text-slate-300 group-hover:text-white">公正第三方稽核</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// PAGE: Ranking List
const RankingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 py-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
          <h1 className="text-3xl font-bold text-white pl-4">2024 年度 YS 精選平台排名</h1>
          <p className="mt-2 text-slate-400 pl-4">
            YS 團隊每月實測，根據<span className="font-bold text-cyan-400">出金速度、賠率優勢、客服響應</span>等 24 項指標進行權威排序。
          </p>
        </div>

        {/* Filters */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 mb-8 flex flex-wrap gap-4 items-center shadow-lg">
          <div className="flex items-center text-slate-400 mr-2">
            <Filter size={18} className="mr-2" />
            <span className="font-bold text-sm">篩選：</span>
          </div>
          <button className="px-4 py-1.5 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 text-sm rounded-full font-bold hover:scale-105 transition-transform">全部顯示</button>
          <button className="px-4 py-1.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 text-sm rounded-full font-medium transition-all hover:scale-105">出金最快</button>
          <button className="px-4 py-1.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 text-sm rounded-full font-medium transition-all hover:scale-105">體育博彩</button>
          <button className="px-4 py-1.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 text-sm rounded-full font-medium transition-all hover:scale-105">電子老虎機</button>
          <button className="px-4 py-1.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 text-sm rounded-full font-medium transition-all hover:scale-105">加密貨幣</button>
        </div>

        {/* List Header (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-900 border-b border-slate-800 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-t-lg">
          <div className="col-span-1 text-center">排名</div>
          <div className="col-span-4">平台資訊</div>
          <div className="col-span-2">特色標籤</div>
          <div className="col-span-2">核心數據</div>
          <div className="col-span-3 text-right">首存優惠 / 行動</div>
        </div>

        {/* Ranking Items */}
        <div className="space-y-4">
          {RANKINGS_DATA.map((item, index) => (
            <div 
              key={item.rank} 
              className="stagger-item bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 md:p-0 md:grid md:grid-cols-12 md:gap-4 md:items-center hover:border-cyan-500/50 hover:bg-slate-900 transition-all group hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* Rank Badge */}
              <div className="md:col-span-1 flex justify-between md:justify-center items-center mb-4 md:mb-0">
                <div className={`w-10 h-10 flex items-center justify-center font-bold text-xl rounded-lg transform rotate-3 transition-transform group-hover:rotate-6 group-hover:scale-110
                  ${item.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-600 text-white shadow-lg shadow-orange-500/30' : 
                    item.rank === 2 ? 'bg-gradient-to-br from-slate-300 to-slate-500 text-white shadow shadow-slate-500/30' : 
                    item.rank === 3 ? 'bg-gradient-to-br from-orange-300 to-red-400 text-white shadow shadow-red-500/30' : 'bg-slate-800 text-slate-500'}`}>
                  {item.rank}
                </div>
                <div className="md:hidden text-xs font-bold text-cyan-400">#{item.rank} YS CHOICE</div>
              </div>

              {/* Name & Rating */}
              <div className="md:col-span-4 flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-slate-800 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center text-slate-600 font-bold text-xs border border-slate-700 group-hover:border-cyan-500/30 transition-colors">LOGO</div>
                <div>
                  <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">{item.name}</h3>
                  <div className="flex items-center text-yellow-500 text-sm">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} className={i < Math.floor(item.rating) ? "" : "text-slate-700"} />
                      ))}
                    </div>
                    <span className="ml-2 font-bold text-slate-400">{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="md:col-span-2 mb-4 md:mb-0">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700 group-hover:border-slate-600 transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="md:col-span-2 grid grid-cols-2 md:block gap-4 mb-4 md:mb-0">
                <div className="flex items-center text-sm text-slate-400 mb-1">
                  <Clock size={14} className="mr-2 text-slate-500" />
                  <span>出金: <span className="font-semibold text-cyan-400">{item.payout}</span></span>
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <TrendingUp size={14} className="mr-2 text-slate-500" />
                  <span>勝率: <span className="font-semibold text-white">{item.winRate}</span></span>
                </div>
              </div>

              {/* Action */}
              <div className="md:col-span-3 flex flex-col md:items-end gap-2 pr-0 md:pr-4">
                 <div className="text-sm font-bold text-fuchsia-400 bg-fuchsia-400/10 border border-fuchsia-400/20 px-3 py-1 rounded inline-block text-center md:text-right w-full md:w-auto">
                    首存: {item.bonus}
                 </div>
                 <button className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-900/50 transition-all text-sm flex items-center justify-center hover:scale-105 active:scale-95">
                    前往官網 <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PAGE: News List
const NewsPage = ({ onReadArticle }: { onReadArticle: (id: number) => void }) => {
  return (
    <div className="min-h-screen bg-slate-950 py-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* News Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">YS 產業新聞與深度專欄</h1>
            <p className="mt-2 text-slate-400">掌握第一手市場脈動、法規變遷與賽事分析。</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <button className="p-2 bg-slate-800 border border-slate-700 rounded hover:bg-slate-700 text-white transition-colors"><LayoutGrid size={20} /></button>
            <button className="p-2 bg-transparent border border-transparent rounded hover:bg-slate-800 text-slate-400 transition-colors"><List size={20} /></button>
          </div>
        </div>

        {/* Featured Article (Hero) */}
        <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden mb-12 border border-slate-800 flex flex-col md:flex-row stagger-item cursor-pointer" style={{ animationDelay: '0ms' }} onClick={() => onReadArticle(1)}>
          <div className="md:w-3/5 h-64 md:h-auto relative group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 to-purple-900/80 transition-transform duration-700 group-hover:scale-110"></div>
             {/* Abstract Pattern */}
             <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100/10 via-slate-900 to-slate-900"></div>
            
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <span className="px-3 py-1 bg-fuchsia-600 text-white text-xs font-bold rounded mb-3 inline-block shadow-lg shadow-fuchsia-900/50">YS 編輯精選</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-200 transition-colors">2024 娛樂城洗碼量與流水倍數全解析：<br/>別被高額紅利騙了</h2>
              <p className="text-slate-200 mb-6 line-clamp-2">許多新手玩家看到「存1000送1000」就衝動存款，卻忽略了背後高達 20 倍的流水限制。本文將教你如何計算真實期望值。</p>
              <button className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center transition-all group-hover:translate-x-2">閱讀完整報告 <ArrowRight size={16} className="ml-2" /></button>
            </div>
          </div>
          <div className="md:w-2/5 p-8 bg-slate-900 border-l border-slate-800">
            <h3 className="font-bold text-white text-lg mb-4">熱門標籤</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {['百家樂', '區塊鏈', '黑網爆料', '運彩教學', '老虎機攻略'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-400 hover:border-cyan-500 hover:text-cyan-400 cursor-pointer transition-all hover:-translate-y-0.5">#{tag}</span>
              ))}
            </div>
            <h3 className="font-bold text-white text-lg mb-4">訂閱 YS 週報</h3>
            <p className="text-sm text-slate-500 mb-4">不錯過任何黑名單更新與獨家優惠。</p>
            <div className="flex" onClick={(e) => e.stopPropagation()}>
              <input type="text" placeholder="Email Address" className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-l focus:outline-none focus:border-cyan-500 text-white transition-colors" />
              <button className="bg-white text-slate-900 px-3 py-2 rounded-r text-sm font-bold hover:bg-slate-200 transition-colors">訂閱</button>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((article, index) => (
            <article 
              key={article.id} 
              onClick={() => onReadArticle(article.id)}
              className="stagger-item bg-slate-900 rounded-xl border border-slate-800 shadow-lg hover:shadow-cyan-900/20 hover:border-cyan-500/30 transition-all hover:-translate-y-2 group flex flex-col h-full overflow-hidden cursor-pointer"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`h-48 bg-gradient-to-br ${article.image} w-full relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-500"></div>
                 <div className="absolute inset-0 bg-black/20 group-hover:scale-110 transition-transform duration-700"></div>
                 <div className="absolute top-4 left-4 z-10">
                   <span className="px-2 py-1 bg-black/60 backdrop-blur text-cyan-400 text-xs font-bold rounded border border-cyan-500/30">{article.category}</span>
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col relative z-10 bg-slate-900">
                <div className="flex items-center text-xs text-slate-500 mb-3">
                  <Calendar size={14} className="mr-1" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-1">
                  {article.desc}
                </p>
                <div className="text-cyan-500 font-bold text-sm hover:text-cyan-400 mt-auto flex items-center group-hover:translate-x-1 transition-transform">閱讀更多 <ChevronRight size={14} className="ml-1"/></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

// PAGE: News Detail View
const NewsDetailPage = ({ id, onBack }: { id: number, onBack: () => void }) => {
  const article = NEWS_DATA.find(a => a.id === id) || NEWS_DATA[0];

  return (
    <div className="min-h-screen bg-slate-950 animate-fade-in-up">
      {/* Article Hero */}
      <div className={`relative h-96 w-full bg-gradient-to-br ${article.image}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-5xl mx-auto">
          <button onClick={onBack} className="flex items-center text-slate-300 hover:text-white mb-6 group transition-colors">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 返回新聞列表
          </button>
          <span className="px-3 py-1 bg-cyan-600/20 border border-cyan-500/50 text-cyan-400 text-xs font-bold rounded mb-4 inline-block">{article.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{article.title}</h1>
          <div className="flex items-center text-slate-400 text-sm space-x-6">
            <span className="flex items-center"><Calendar size={14} className="mr-2"/> {article.date}</span>
            <span className="flex items-center"><Users size={14} className="mr-2"/> YS 編輯部</span>
            <span className="flex items-center"><Clock size={14} className="mr-2"/> 5 min read</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-10">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
           <div className="prose prose-invert prose-lg max-w-none prose-headings:text-cyan-50 text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }}></div>
           
           <hr className="my-12 border-slate-800"/>
           
           <div className="flex justify-between items-center">
             <div className="flex space-x-4">
               <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"><Share2 size={18}/> <span>分享</span></button>
               <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"><Bookmark size={18}/> <span>收藏</span></button>
             </div>
             <button onClick={onBack} className="text-cyan-400 font-bold hover:text-cyan-300">閱讀更多文章</button>
           </div>
        </div>
      </div>
    </div>
  );
};

// PAGE: Strategy List
const StrategyPage = ({ onReadGuide }: { onReadGuide: (id: number) => void }) => {
  const categories = [
    { title: "百家樂攻略", count: 12, icon: LayoutGrid, color: "text-rose-400", bg: "bg-rose-950/30 border-rose-900" },
    { title: "德州撲克", count: 8, icon: Trophy, color: "text-amber-400", bg: "bg-amber-950/30 border-amber-900" },
    { title: "體育運彩", count: 15, icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-950/30 border-emerald-900" },
    { title: "老虎機技巧", count: 10, icon: Flame, color: "text-orange-400", bg: "bg-orange-950/30 border-orange-900" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">YS <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">戰略研究室</span></h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            停止依賴運氣。透過數學概率、資金管理與賽事分析，建立屬於你的長期獲利模型。
          </p>
          <div className="mt-8 relative max-w-xl mx-auto group">
            <input 
              type="text" 
              placeholder="搜尋攻略 (例如：算牌、讓分盤...)" 
              className="w-full pl-12 pr-4 py-4 rounded-full bg-slate-900 border border-slate-800 shadow-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none text-white placeholder-slate-600 transition-all group-hover:border-slate-600"
            />
            <Search className="absolute left-4 top-4 text-slate-500 group-hover:text-fuchsia-400 transition-colors" size={20} />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((cat, idx) => (
            <div key={idx} className={`stagger-item p-6 rounded-2xl border ${cat.bg} shadow-lg hover:shadow-xl transition-all cursor-pointer text-center group hover:-translate-y-2`} style={{ animationDelay: `${idx * 100}ms` }}>
              <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-slate-900/50 ${cat.color}`}>
                <cat.icon size={24} />
              </div>
              <h3 className="font-bold text-white group-hover:text-white transition-colors">{cat.title}</h3>
              <span className="text-xs text-slate-500">{cat.count} 篇文章</span>
            </div>
          ))}
        </div>

        {/* Latest Guides List */}
        <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden stagger-item" style={{ animationDelay: '400ms' }}>
          <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <h2 className="text-xl font-bold text-white flex items-center">
              <BookOpen className="mr-2 text-fuchsia-500" size={20} /> 最新發布教學
            </h2>
            <button className="text-sm text-fuchsia-400 font-semibold hover:text-fuchsia-300 transition-colors">查看全部</button>
          </div>
          <div className="divide-y divide-slate-800">
            {GUIDES_DATA.map((guide, idx) => (
              <div 
                key={guide.id} 
                onClick={() => onReadGuide(guide.id)}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-800/50 transition-colors group cursor-pointer"
              >
                <div className="mb-2 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-xs font-bold text-cyan-500 uppercase tracking-wide">{guide.category}</span>
                    <span className={`text-xs px-2 py-0.5 rounded border ${
                      guide.level === '新手' ? 'bg-green-900/20 text-green-400 border-green-900' :
                      guide.level === '進階' ? 'bg-amber-900/20 text-amber-400 border-amber-900' :
                      'bg-purple-900/20 text-purple-400 border-purple-900'
                    }`}>
                      {guide.level}
                    </span>
                  </div>
                  <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors">{guide.title}</h3>
                </div>
                <div className="flex items-center text-slate-500 text-xs">
                  <Clock size={12} className="mr-1" /> {guide.readTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// PAGE: Strategy Detail View
const StrategyDetailPage = ({ id, onBack }: { id: number, onBack: () => void }) => {
  const guide = GUIDES_DATA.find(g => g.id === id) || GUIDES_DATA[0];

  return (
    <div className="min-h-screen bg-slate-950 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 group transition-colors">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 返回攻略列表
        </button>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm">
           <div className="p-8 md:p-12 border-b border-slate-800 bg-slate-900">
             <div className="flex items-center space-x-3 mb-4">
               <span className="px-3 py-1 bg-fuchsia-900/30 text-fuchsia-400 text-xs font-bold rounded border border-fuchsia-500/30">{guide.category}</span>
               <span className="text-slate-400 text-sm flex items-center"><Clock size={14} className="mr-1"/> {guide.readTime}</span>
             </div>
             <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{guide.title}</h1>
             <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                </div>
                <span className="text-sm text-slate-400">已有 2,304 人閱讀此攻略</span>
             </div>
           </div>
           
           <div className="p-8 md:p-12">
             <div className="prose prose-invert max-w-none text-slate-300 leading-8" dangerouslySetInnerHTML={{ __html: guide.content }}></div>
             <div className="mt-12 p-6 bg-cyan-900/10 border border-cyan-500/20 rounded-xl">
               <h4 className="font-bold text-cyan-400 mb-2 flex items-center"><Zap size={18} className="mr-2"/> YS 實戰筆記</h4>
               <p className="text-sm text-slate-400">本策略建議搭配資金管理系統（Money Management）使用，切勿在單一場次投入超過總資金的 5%。</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};


// --- Main App Component ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedId]);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    setSelectedId(null);
  };

  const handleReadArticle = (id: number) => {
    setSelectedId(id);
    setCurrentPage('news-detail');
  };

  const handleReadGuide = (id: number) => {
    setSelectedId(id);
    setCurrentPage('strategy-detail');
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="relative">
        {/* Render page with key to force re-render on switch for animation trigger */}
        <div key={currentPage}>
           {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
           {currentPage === 'rankings' && <RankingPage />}
           
           {currentPage === 'news' && <NewsPage onReadArticle={handleReadArticle} />}
           {currentPage === 'news-detail' && selectedId && (
             <NewsDetailPage id={selectedId} onBack={() => handleNavigate('news')} />
           )}

           {currentPage === 'strategy' && <StrategyPage onReadGuide={handleReadGuide} />}
           {currentPage === 'strategy-detail' && selectedId && (
             <StrategyDetailPage id={selectedId} onBack={() => handleNavigate('strategy')} />
           )}
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}