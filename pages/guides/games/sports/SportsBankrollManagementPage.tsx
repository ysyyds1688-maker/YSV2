import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const SportsBankrollManagementPage = () => {
  return (
    <>
      <SEO
        title="體育投注資金管理法 - 凱利公式與固定比例策略"
        description="學習體育投注資金管理法，包含凱利公式、固定比例下注等策略，幫助玩家長期穩定獲利。"
        keywords="資金管理,凱利公式,固定比例,體育投注策略"
        canonical="/guides/games/sports/bankroll-management"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '體育投注攻略', url: '/guides/games/sports' },
              { name: '資金管理法', url: '/guides/games/sports/bankroll-management' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">體育投注資金管理法</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">資金管理是體育投注成功的關鍵...</p>
          </div>
        </div>
      </div>
    </>
  );
};

