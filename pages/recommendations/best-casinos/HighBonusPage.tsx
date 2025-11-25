import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';

export const HighBonusPage = () => {
  return (
    <>
      <SEO
        title="高額優惠娛樂城推薦 - 最高紅利與體驗金"
        description="推薦提供最高額優惠的娛樂城，包含體驗金、首存優惠、返水等。"
        keywords="高額優惠,體驗金,首存優惠,返水優惠"
        canonical="/recommendations/best-casinos/high-bonus"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '娛樂城推薦', url: '/recommendations' },
              { name: '高額優惠推薦', url: '/recommendations/best-casinos/high-bonus' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">高額優惠娛樂城推薦</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <p className="text-lg text-slate-300">高額優惠推薦內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

