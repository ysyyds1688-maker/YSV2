import React from 'react';
import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';

export const ForumIndexPage = () => {
  return (
    <>
      <SEO 
        title="論壇首頁" 
        description="YS 娛樂城論壇 - 討論最新娛樂城資訊、遊戲攻略與玩家心得。" 
        keywords="娛樂城論壇, 博弈討論區, 運彩分析, 老虎機攻略"
      />
      <div className="py-12 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '論壇首頁', url: '/forum' }]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">YS 娛樂城論壇</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              匯集全台最專業的博弈玩家，分享最真實的遊戲心得與攻略。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* 暫位內容：未來會是動態生成的版塊 */}
             {['綜合討論', '娛樂城評價', '遊戲攻略'].map((category, index) => (
               <Link key={index} to={`/forum/c/${index + 1}`} className="block p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                 <h3 className="text-2xl font-bold text-white mb-2">{category}</h3>
                 <p className="text-slate-400">點擊查看 {category} 的相關討論話題。</p>
               </Link>
             ))}
          </div>
        </div>
      </div>
    </>
  );
};

