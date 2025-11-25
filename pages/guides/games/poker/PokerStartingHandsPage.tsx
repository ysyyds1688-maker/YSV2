import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const PokerStartingHandsPage = () => {
  return (
    <>
      <SEO
        title="德州撲克起手牌範圍 - 翻牌前選擇策略"
        description="學習德州撲克起手牌範圍（Pre-flop Ranges），了解翻牌前應該選擇哪些手牌，提高勝率。"
        keywords="起手牌範圍,Pre-flop Ranges,德州撲克起手牌,撲克策略"
        canonical="/guides/games/poker/starting-hands"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '德州撲克攻略', url: '/guides/games/poker' },
              { name: '起手牌範圍', url: '/guides/games/poker/starting-hands' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">德州撲克起手牌範圍</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">起手牌範圍內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

