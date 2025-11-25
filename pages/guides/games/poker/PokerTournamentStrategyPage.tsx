import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const PokerTournamentStrategyPage = () => {
  return (
    <>
      <SEO
        title="德州撲克錦標賽策略 - 不同階段的策略調整"
        description="學習德州撲克錦標賽不同階段的策略調整，包含早期、中期、後期與決賽桌的策略。"
        keywords="錦標賽策略,撲克錦標賽,MTT策略,錦標賽技巧"
        canonical="/guides/games/poker/tournament-strategy"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '德州撲克攻略', url: '/guides/games/poker' },
              { name: '錦標賽策略', url: '/guides/games/poker/tournament-strategy' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">德州撲克錦標賽策略</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">錦標賽策略內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

