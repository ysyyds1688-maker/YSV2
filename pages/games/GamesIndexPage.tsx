import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const GamesIndexPage = () => {
  const games = [
    { name: '真人百家樂', url: '/games/baccarat', desc: '專業荷官發牌，享受最真實的賭場體驗', icon: '🃏' },
    { name: '電子遊戲', url: '/games/slots', desc: '高RTP老虎機，累積獎池最高數百萬', icon: '🎰' },
    { name: '體育投注', url: '/games/sports', desc: 'NBA、足球、棒球等多種賽事', icon: '⚽' },
    { name: '棋牌遊戲', url: '/games/poker', desc: '德州撲克、21點、鬥地主', icon: '🀄' },
    { name: '捕魚機', url: '/games/fishing', desc: '刺激的捕魚遊戲，獎金豐厚', icon: '🎣' },
    { name: '彩票', url: '/games/lottery', desc: '時時彩、快三、六合彩', icon: '🎫' },
    { name: '電競', url: '/games/esports', desc: '英雄聯盟、CS:GO等電競賽事', icon: '🎮' },
  ];

  return (
    <>
      <SEO
        title="遊戲專區 - 多種遊戲選擇"
        description="YS 娛樂城提供多種遊戲選擇，包含真人百家樂、電子遊戲、體育投注、棋牌遊戲、捕魚機、彩票、電競等。"
        keywords="遊戲專區,線上遊戲,娛樂城遊戲,YS娛樂城"
        canonical="/games"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '遊戲專區', url: '/games' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">遊戲專區</h1>
          <p className="text-slate-400 mb-12 text-lg">選擇您喜愛的遊戲類型，立即開始遊玩</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Link
                key={game.url}
                to={game.url}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="text-5xl mb-4">{game.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{game.name}</h3>
                <p className="text-slate-400 mb-4">{game.desc}</p>
                <span className="text-cyan-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  查看詳情 <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

