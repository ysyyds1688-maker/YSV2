import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const SportsOddsAnalysisPage = () => {
  return (
    <>
      <SEO
        title="體育投注賠率分析 - 如何識別價值投注機會"
        description="學習如何分析體育投注賠率，識別價值投注機會，提高投注勝率與獲利。"
        keywords="賠率分析,價值投注,體育投注技巧,賠率計算"
        canonical="/guides/games/sports/odds-analysis"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '體育投注攻略', url: '/guides/games/sports' },
              { name: '賠率分析', url: '/guides/games/sports/odds-analysis' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">體育投注賠率分析</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">賠率分析是體育投注的核心技能...</p>
            {/* 內容可以繼續擴充 */}
          </div>
        </div>
      </div>
    </>
  );
};

