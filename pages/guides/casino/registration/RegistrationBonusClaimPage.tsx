import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Gift } from 'lucide-react';

export const RegistrationBonusClaimPage = () => {
  return (
    <>
      <SEO
        title="優惠領取教學 - 如何領取體驗金和首存優惠"
        description="YS 娛樂城優惠領取教學：詳細說明註冊後如何領取體驗金168和首存優惠，最大化您的遊戲體驗。"
        keywords="優惠領取,體驗金領取,首存優惠,優惠申請"
        canonical="/guides/casino/registration/bonus-claim"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '註冊相關', url: '/guides/casino/registration' },
              { name: '優惠領取教學', url: '/guides/casino/registration/bonus-claim' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">優惠領取教學</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Gift className="text-fuchsia-400 mr-3" size={32} />
              <p className="text-lg text-slate-300">
                註冊完成後，系統會自動發放體驗金168，無需手動領取。
              </p>
            </div>
            <p className="text-slate-300 mb-8">優惠領取詳細內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

