import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LotteryPage = () => {
  return (
    <>
      <SEO
        title="彩票遊戲 - 多種彩票選擇"
        description="YS 娛樂城提供多種彩票遊戲，包含時時彩、快三、六合彩等。"
        keywords="彩票,時時彩,快三,六合彩,YS娛樂城"
        canonical="/games/lottery"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '遊戲專區', url: '/games' }, { name: '彩票', url: '/games/lottery' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">彩票遊戲</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <p className="text-slate-300 mb-6">提供時時彩、快三、六合彩等多種彩票遊戲。</p>
            <Link to="/register" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold">
              <Play size={20} className="mr-2" />立即遊玩
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

