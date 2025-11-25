import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Calculator } from 'lucide-react';

export const BonusesWageringRequirementsPage = () => {
  return (
    <>
      <SEO
        title="流水要求計算 - 如何計算和完成流水要求"
        description="YS 娛樂城流水要求計算教學：詳細說明如何計算流水要求，包含計算公式、完成方式等，幫助您順利完成流水並申請出金。"
        keywords="流水要求,流水計算,流水倍數,完成流水"
        canonical="/guides/casino/bonuses/wagering-requirements"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '優惠相關', url: '/guides/casino/bonuses' },
              { name: '流水要求計算', url: '/guides/casino/bonuses/wagering-requirements' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">流水要求計算</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Calculator className="text-cyan-400 mr-3" size={32} />
              <p className="text-lg text-slate-300">
                流水要求 = (優惠金額 + 儲值金額) × 流水倍數
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">計算範例</h3>
              <p className="text-slate-300 mb-2">假設您獲得體驗金168，流水倍數為10倍：</p>
              <p className="text-slate-300 mb-2">流水要求 = 168 × 10 = 1,680</p>
              <p className="text-slate-300">這表示您需要投注總額達到1,680元才能申請出金。</p>
            </div>
            <p className="text-slate-300">流水要求計算詳細內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

