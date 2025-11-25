import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';

export const FastWithdrawalPage = () => {
  return (
    <>
      <SEO
        title="快速出金娛樂城推薦 - 5分鐘內到帳"
        description="推薦出金速度最快的娛樂城，5分鐘內到帳，支援USDT等多種出金方式。"
        keywords="快速出金,出金速度,5分鐘出金,USDT出金"
        canonical="/recommendations/best-casinos/fast-withdrawal"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '娛樂城推薦', url: '/recommendations' },
              { name: '快速出金推薦', url: '/recommendations/best-casinos/fast-withdrawal' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">快速出金娛樂城推薦</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <p className="text-lg text-slate-300">快速出金推薦內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

