import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SportsPage = () => {
  return (
    <>
      <SEO
        title="體育投注 - 賽事分析與下注教學"
        description="YS 娛樂城提供最完整的體育投注服務，包含NBA、足球、棒球等多種賽事，提供專業賽事分析與下注教學。"
        keywords="體育投注,運彩,體育下注,賽事分析,YS娛樂城"
        canonical="/games/sports"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '遊戲專區', url: '/games' }, { name: '體育投注', url: '/games/sports' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">體育投注</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <p className="text-slate-300 mb-6">提供NBA、足球、棒球等多種賽事投注服務。</p>
            <Link to="/register" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold">
              <Play size={20} className="mr-2" />立即遊玩
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

