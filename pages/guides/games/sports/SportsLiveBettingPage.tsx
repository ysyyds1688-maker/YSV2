import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const SportsLiveBettingPage = () => {
  return (
    <>
      <SEO
        title="滾球投注技巧 - 掌握滾球投注的時機與策略"
        description="學習滾球投注（Live Betting）的技巧與策略，掌握最佳投注時機，提高獲勝機率。"
        keywords="滾球投注,Live Betting,滾球技巧,即時投注"
        canonical="/guides/games/sports/live-betting"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '體育投注攻略', url: '/guides/games/sports' },
              { name: '滾球投注技巧', url: '/guides/games/sports/live-betting' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">滾球投注技巧</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">滾球投注內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

