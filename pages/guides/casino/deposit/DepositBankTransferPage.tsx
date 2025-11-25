import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const DepositBankTransferPage = () => {
  return (
    <>
      <SEO
        title="銀行轉帳教學 - 使用銀行轉帳進行儲值"
        description="YS 娛樂城銀行轉帳儲值教學：詳細說明如何使用銀行轉帳進行儲值，包含步驟、注意事項等。"
        keywords="銀行轉帳,儲值教學,銀行轉帳儲值"
        canonical="/guides/casino/deposit/bank-transfer"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '儲值相關', url: '/guides/casino/deposit' },
              { name: '銀行轉帳教學', url: '/guides/casino/deposit/bank-transfer' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">銀行轉帳教學</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">銀行轉帳儲值詳細內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

