import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';

export const USDTDepositGuidePage = () => {
  return (
    <>
      <SEO
        title="如何 USDT 儲值？完整儲值教學"
        description="YS 娛樂城 USDT 儲值教學：詳細說明如何使用 USDT 進行儲值，包含 TRC20、ERC20 協議選擇、儲值步驟、注意事項等。"
        keywords="USDT儲值,如何USDT儲值,加密貨幣儲值,USDT充值,YS娛樂城"
        canonical="/guides/usdt-deposit"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '新手教學', url: '/guides' }, { name: '如何 USDT 儲值', url: '/guides/usdt-deposit' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">如何 USDT 儲值？</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">USDT 儲值是最快速、最安全的儲值方式...</p>
            {/* 內容可以繼續擴充 */}
          </div>
        </div>
      </div>
    </>
  );
};

