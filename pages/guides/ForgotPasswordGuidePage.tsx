import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';

export const ForgotPasswordGuidePage = () => {
  return (
    <>
      <SEO
        title="忘記密碼怎麼辦？YS 娛樂城密碼重置教學"
        description="YS 娛樂城忘記密碼教學：詳細說明如何透過手機號碼或電子郵件重設密碼，包含步驟說明與常見問題。"
        keywords="忘記密碼,密碼重置,YS娛樂城忘記密碼,如何重設密碼"
        canonical="/guides/forgot-password"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '新手教學', url: '/guides' }, { name: '忘記密碼怎麼辦', url: '/guides/forgot-password' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">忘記密碼怎麼辦？</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8">如果您忘記了 YS 娛樂城的登入密碼，可以透過以下方式重設...</p>
            {/* 內容可以繼續擴充 */}
          </div>
        </div>
      </div>
    </>
  );
};

