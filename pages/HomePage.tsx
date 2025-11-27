import { SEO } from '../components/SEO';
import { ArrowRight, Trophy, BarChart3, ShieldCheck, ChevronRight, Users, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'YS 娛樂城',
    description: 'YS 娛樂城提供體驗金168、快速出金、安全可靠的線上娛樂服務',
    url: 'https://ys-entertainment.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ys-entertainment.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <SEO
        title="YS 娛樂城｜體驗金168・快速出金"
        description="YS 娛樂城提供體驗金168、快速出金、安全可靠的線上娛樂服務。包含電子遊戲、真人百家樂、體育投注、棋牌遊戲等多種遊戲選擇。"
        keywords="娛樂城,線上娛樂城,體驗金,出金安全,YS娛樂城,體驗金168,快速出金"
        canonical="/"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-slate-950 animate-fade-in-up">
        {/* Hero Section with Banner */}
        <div className="relative pt-20 pb-32 overflow-hidden">
          {/* Banner Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/home-banner.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* Dark overlay for text readability - lighter overlay to show image */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/60"></div>
            </div>
            {/* Fallback gradient if image not loaded */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-fuchsia-950/20"></div>
          </div>
          
          {/* Animated Blob Effects (overlay) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none z-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-sm font-bold mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              體驗金168 限時優惠中
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
              <span className="block mb-2">YS 娛樂城</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_15px_rgba(216,180,254,0.3)]">
                體驗金168・快速出金
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
              全台最安全可靠的線上娛樂平台，提供體驗金168、秒出金服務，包含電子遊戲、真人百家樂、體育投注等多種遊戲選擇。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all flex items-center justify-center group"
              >
                立即註冊領取體驗金 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20}/>
              </Link>
              <Link 
                to="/games"
                className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-full text-white font-bold hover:bg-slate-700 hover:border-slate-600 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-slate-700/30"
              >
                瀏覽遊戲
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: 體驗金 */}
            <div className="stagger-item bg-slate-900/80 backdrop-blur border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)]" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                <Trophy className="text-cyan-400 group-hover:text-cyan-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">體驗金168</h3>
              <p className="text-slate-400 mb-4 group-hover:text-slate-300">新會員註冊即送體驗金168，無需存款即可體驗多種遊戲。</p>
              <Link to="/promotions" className="text-cyan-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                查看優惠 <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 2: 快速出金 */}
            <div className="stagger-item bg-slate-900/80 backdrop-blur border border-slate-800 p-8 rounded-2xl hover:border-fuchsia-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(217,70,239,0.3)]" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 bg-fuchsia-900/30 rounded-xl flex items-center justify-center mb-6 border border-fuchsia-500/20 group-hover:bg-fuchsia-500/20 group-hover:scale-110 transition-all duration-300">
                <BarChart3 className="text-fuchsia-400 group-hover:text-fuchsia-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors">秒出金服務</h3>
              <p className="text-slate-400 mb-4 group-hover:text-slate-300">業界最快出金速度，5分鐘內到帳，支援USDT等多種支付方式。</p>
              <Link to="/guides/withdrawal" className="text-fuchsia-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                了解出金流程 <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 3: 安全保障 */}
            <div className="stagger-item bg-slate-900/80 backdrop-blur border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="text-emerald-400 group-hover:text-emerald-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">出金安全保障</h3>
              <p className="text-slate-400 mb-4 group-hover:text-slate-300">SSL加密認證、第三方稽核，保障您的資金安全與個人隱私。</p>
              <Link to="/trust/security" className="text-emerald-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                查看保障 <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* 遊戲入口 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">熱門遊戲專區</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: '電子遊戲', url: '/games/slots', icon: '🎰' },
              { name: '真人百家樂', url: '/games/baccarat', icon: '🃏' },
              { name: '體育投注', url: '/games/sports', icon: '⚽' },
              { name: '棋牌遊戲', url: '/games/poker', icon: '🀄' },
              { name: '彩票', url: '/games/lottery', icon: '🎫' },
            ].map((game) => (
              <Link
                key={game.url}
                to={game.url}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="text-4xl mb-3">{game.icon}</div>
                <div className="text-white font-bold group-hover:text-cyan-400 transition-colors">{game.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* 遊戲攻略與娛樂城推薦入口 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Link
              to="/guides/games"
              className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 hover:bg-cyan-900/40 transition-all group"
            >
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">遊戲攻略中心</h2>
              <p className="text-slate-300 mb-4">從基礎到進階，完整的遊戲攻略教學</p>
              <div className="flex items-center text-cyan-400 font-bold text-sm">
                查看攻略 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link
              to="/recommendations"
              className="bg-gradient-to-br from-fuchsia-900/30 to-purple-900/30 border border-fuchsia-500/30 rounded-2xl p-8 hover:border-fuchsia-400/50 hover:bg-fuchsia-900/40 transition-all group"
            >
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-fuchsia-400 transition-colors">娛樂城推薦</h2>
              <p className="text-slate-300 mb-4">2025年最佳娛樂城推薦與評比</p>
              <div className="flex items-center text-fuchsia-400 font-bold text-sm">
                查看推薦 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* 最新攻略文章串接 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">最新攻略文章</h2>
            <Link to="/guides/games" className="text-cyan-400 hover:text-cyan-300 font-bold text-sm">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '百家樂看路法完整教學', url: '/guides/games/baccarat/road-reading', category: '百家樂', readTime: '8 min' },
              { title: '老虎機 RTP 選擇指南', url: '/guides/games/slots/rtp-guide', category: '老虎機', readTime: '6 min' },
              { title: '體育投注資金管理法', url: '/guides/games/sports/bankroll-management', category: '體育投注', readTime: '10 min' },
            ].map((article) => (
              <Link
                key={article.url}
                to={article.url}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <span className="text-xs text-cyan-400 font-bold mb-2 block">{article.category}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                  <ArrowRight size={14} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 新手教學入口 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">新手教學</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: '如何註冊', url: '/guides/register', desc: '快速註冊流程教學' },
              { name: '如何出金', url: '/guides/withdrawal', desc: '出金步驟詳解' },
              { name: 'USDT儲值', url: '/guides/usdt-deposit', desc: '加密貨幣儲值教學' },
              { name: '忘記密碼', url: '/guides/forgot-password', desc: '密碼重置指南' },
            ].map((guide) => (
              <Link
                key={guide.url}
                to={guide.url}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-fuchsia-500/50 hover:bg-slate-800 transition-all group"
              >
                <h3 className="text-white font-bold mb-2 group-hover:text-fuchsia-400 transition-colors">{guide.name}</h3>
                <p className="text-slate-400 text-sm">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* APP 下載 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">下載 YS 娛樂城 APP</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              隨時隨地享受遊戲樂趣，支援 iOS 與 Android 系統，安全快速，體驗更流暢
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white font-bold hover:bg-slate-700 transition-all flex items-center justify-center">
                <span className="mr-2">📱</span>
                iOS 下載
              </button>
              <button className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white font-bold hover:bg-slate-700 transition-all flex items-center justify-center">
                <span className="mr-2">🤖</span>
                Android 下載
              </button>
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
    </>
  );
};

