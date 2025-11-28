import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ShieldCheck } from 'lucide-react';

export const SecurityPage = () => {
  return (
    <>
      <SEO
        title="出金保障 - YS 娛樂城安全保障"
        description="YS 娛樂城提供完善的出金保障機制，確保玩家資金安全，快速出金5分鐘內到帳。"
        keywords="出金保障,安全保障,資金安全,YS娛樂城"
        canonical="/trust/security"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '出金保障', url: '/trust/security' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">出金保障</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <ShieldCheck className="text-cyan-400 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-white">安全保障機制</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              YS 娛樂城提供完善的出金保障機制，確保玩家資金安全...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

