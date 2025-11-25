import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const PokerPositionPlayPage = () => {
  return (
    <>
      <SEO
        title="德州撲克位置策略 - 位置的重要性與應用"
        description="了解位置在德州撲克中的重要性，學習不同位置的策略調整，提升遊戲水平。"
        keywords="位置策略,位置優勢,德州撲克位置,撲克技巧"
        canonical="/guides/games/poker/position-play"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '德州撲克攻略', url: '/guides/games/poker' },
              { name: '位置策略', url: '/guides/games/poker/position-play' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">德州撲克位置策略</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">位置策略內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

