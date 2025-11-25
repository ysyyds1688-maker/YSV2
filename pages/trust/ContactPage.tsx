import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';

export const ContactPage = () => {
  return (
    <>
      <SEO
        title="客服頁 - 聯絡我們"
        description="YS 娛樂城客服中心，提供24小時線上客服服務，協助解決您的任何問題。"
        keywords="客服,聯絡我們,客服中心,YS娛樂城客服"
        canonical="/trust/contact"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '客服頁', url: '/trust/contact' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">客服頁</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 leading-relaxed">
              24小時線上客服服務...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

