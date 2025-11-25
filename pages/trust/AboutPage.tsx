import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';

export const AboutPage = () => {
  return (
    <>
      <SEO
        title="關於我們 - YS 娛樂城"
        description="YS 娛樂城致力於提供最安全、最可靠的線上娛樂服務，擁有專業團隊與完善保障機制。"
        keywords="關於我們,YS娛樂城,公司介紹"
        canonical="/trust/about"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '關於我們', url: '/trust/about' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">關於我們</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 leading-relaxed">
              YS 娛樂城致力於提供最安全、最可靠的線上娛樂服務...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

