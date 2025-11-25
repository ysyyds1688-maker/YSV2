import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RegistrationVerificationPage = () => {
  return (
    <>
      <SEO
        title="身份驗證教學 - 如何完成身份驗證啟用所有功能"
        description="YS 娛樂城身份驗證教學：詳細說明如何完成身份驗證，啟用出金功能和其他所有功能，保障帳戶安全。"
        keywords="身份驗證,驗證教學,帳戶驗證,出金驗證"
        canonical="/guides/casino/registration/verification"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '註冊相關', url: '/guides/casino/registration' },
              { name: '身份驗證教學', url: '/guides/casino/registration/verification' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">身份驗證教學</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <ShieldCheck className="text-emerald-400 mr-3" size={32} />
              <p className="text-lg text-slate-300">
                完成身份驗證可以啟用所有功能，包括出金功能，並提高帳戶安全性。
              </p>
            </div>
            <p className="text-slate-300 mb-8">身份驗證詳細內容...</p>
            {/* 內容可以繼續擴充 */}
          </div>
        </div>
      </div>
    </>
  );
};

