import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';

export const USDTFriendlyPage = () => {
  return (
    <>
      <SEO
        title="USDT友好娛樂城推薦 - 最適合加密貨幣用戶"
        description="推薦最適合使用USDT的娛樂城，包含儲值、出金、優惠等完整支援。"
        keywords="USDT娛樂城,加密貨幣娛樂城,USDT儲值,USDT出金"
        canonical="/recommendations/best-casinos/usdt-friendly"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '娛樂城推薦', url: '/recommendations' },
              { name: 'USDT友好推薦', url: '/recommendations/best-casinos/usdt-friendly' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">USDT友好娛樂城推薦</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <p className="text-lg text-slate-300">USDT友好推薦內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

