import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Smartphone, Trophy } from 'lucide-react';

const games = [
  { name: 'TOP 體育', category: '體育賽事', image: '/images/games/sports-hero.jpg', link: '/games/sports' },
  { name: 'DG 真人', category: '真人視訊', image: '/images/baccarat/baccarat-cover.png', link: '/games/baccarat' },
  { name: '88SOFT 電子', category: '電子遊戲', image: '/images/games/slots-hero.jpg', link: '/games/electronic' },
  { name: '高登棋牌', category: '棋牌對戰', image: '/images/games/poker-hero.jpg', link: '/games/poker' },
];

const articles = [
  {
    id: '1',
    title: 'TOP 體育 vs 熊貓體育：賠率實測大公開',
    category: '遊戲攻略',
    date: '2025-11-28',
    image: '/images/articles/sports-analysis.jpg',
    link: '/topic/mr9-sports-odds-review'
  },
  {
    id: '2',
    title: 'DG 真人百家樂：多檯監控抓龍技巧',
    category: '真人攻略',
    date: '2025-11-26',
    image: '/images/guides/baccarat-road-reading.jpg',
    link: '/topic/dg-baccarat-road-reading'
  },
  {
    id: '3',
    title: 'MR9 新手福利：體驗金與首存紅利全攻略',
    category: '優惠情報',
    date: '2025-11-25',
    image: '/images/promotions/welcome-bonus.jpg',
    link: '/topic/mr9-welcome-bonus-guide'
  }
];

export const HomePage = () => {
  return (
    <>
      <SEO 
        title="MR9 娛樂城論壇 - 亞洲頂級博弈玩家交流區" 
        description="專為 MR9 玩家打造的交流論壇。提供 TOP 體育賠率分析、DG 真人百家樂攻略、88SOFT 電子爆分技巧以及最新優惠情報。" 
        keywords="MR9論壇, MR9娛樂城, TOP體育, DG真人, 88SOFT電子, 娛樂城評價"
      />
      
      {/* Hero Section with Banner */}
      <div className="relative h-[500px] sm:h-[600px] overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ 
            backgroundImage: 'url("/images/home-banner.png")',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center z-10 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold mb-6 animate-fade-in-up">
            <Star size={16} className="mr-2 fill-cyan-400" /> 
            2025 亞洲最佳娛樂城論壇
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            MR9 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">娛樂論壇</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            匯集全台高手，獨家揭秘 <span className="text-cyan-400 font-bold">TOP 體育</span> 賠率優勢與 <span className="text-fuchsia-400 font-bold">DG 真人</span> 必勝攻略。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/forum" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all hover:scale-105 flex items-center justify-center">
              進入討論區 <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/games/sports" className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full text-white font-bold text-lg hover:bg-slate-700 transition-all hover:scale-105 flex items-center justify-center">
              查看遊戲攻略
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <Trophy className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">極速存提款實測</h3>
              <p className="text-slate-400">我們實測了 MR9 的出金速度，平均 3-5 分鐘到帳，支援 USDT 與多種支付方式。</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">專業遊戲設計</h3>
              <p className="text-slate-400">收錄 TOP 體育、DG 真人、88SOFT 電子等頂級平台，提供最公平公正的遊戲環境。</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <Smartphone className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">行動端完美支援</h3>
              <p className="text-slate-400">專屬 APP 下載，支援 iOS 與 Android，隨時隨地暢玩所有遊戲。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Categories */}
      <div className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">MR9 熱門遊戲</h2>
              <p className="text-slate-400 text-lg">精選最受歡迎的遊戲平台與攻略</p>
            </div>
            <Link to="/games" className="hidden md:flex items-center text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
              全部遊戲 <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <Link key={index} to={game.link} className="group relative h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${game.image}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2 block">{game.category}</span>
                  <h3 className="text-2xl font-black text-white mb-2">{game.name}</h3>
                  <div className="w-12 h-1 bg-cyan-500 rounded-full group-hover:w-full transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/games" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-bold">
              全部遊戲 <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Forum Topics */}
      <div className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">MR9 玩家熱議</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              不錯過任何關於 TOP 體育、DG 真人與優惠活動的最新情報
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} to={article.link} className="group block bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${article.image}")` }}
                  ></div>
                  <div className="absolute top-4 left-4 bg-cyan-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-slate-500 text-xs mb-3">
                    <Clock size={12} className="mr-1" /> {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-cyan-500 text-sm font-bold">
                    閱讀全文 <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/forum" className="inline-flex items-center px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-white font-bold transition-all">
              進入討論區查看更多
            </Link>
          </div>
        </div>
      </div>

      {/* App Download CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            隨時隨地，暢玩 MR9
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            下載 MR9 專屬 APP，支援 iOS 與 Android。體驗極速存提款，不錯過任何一場 TOP 體育賽事。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center shadow-lg">
              <Smartphone className="mr-2" /> 下載 iOS 版本
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
              <Smartphone className="mr-2" /> 下載 Android 版本
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// 為了避免在 HomePage 中重新定義，這裡簡單模擬 Clock icon，實際應該 import
const Clock = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
