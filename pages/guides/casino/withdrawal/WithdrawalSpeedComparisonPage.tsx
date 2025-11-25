import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Zap, Clock } from 'lucide-react';

export const WithdrawalSpeedComparisonPage = () => {
  const methods = [
    { name: 'USDT (TRC20)', speed: '5分鐘', icon: Zap, color: 'text-cyan-400' },
    { name: 'USDT (ERC20)', speed: '10-15分鐘', icon: Zap, color: 'text-cyan-400' },
    { name: '銀行轉帳', speed: '1-3個工作天', icon: Clock, color: 'text-slate-400' },
  ];

  return (
    <>
      <SEO
        title="出金速度比較 - 各種出金方式速度對比"
        description="YS 娛樂城出金速度比較：詳細對比 USDT、銀行轉帳等各種出金方式的速度，幫助您選擇最快的出金方式。"
        keywords="出金速度,快速出金,USDT出金,出金時間"
        canonical="/guides/casino/withdrawal/speed-comparison"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '出金相關', url: '/guides/casino/withdrawal' },
              { name: '出金速度比較', url: '/guides/casino/withdrawal/speed-comparison' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">出金速度比較</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {methods.map((method) => (
                <div key={method.name} className="bg-slate-800 rounded-xl p-6 text-center">
                  <method.icon className={`${method.color} mx-auto mb-3`} size={32} />
                  <h3 className="text-white font-bold mb-2">{method.name}</h3>
                  <p className={`${method.color} font-bold text-lg`}>{method.speed}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300">出金速度比較詳細內容...</p>
          </div>
        </div>
      </div>
    </>
  );
};

