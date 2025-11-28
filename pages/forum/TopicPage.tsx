import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';

export const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <SEO 
        title={`話題 ${slug} - YS 論壇`} 
        description={`關於話題 ${slug} 的詳細討論內容。`} 
      />
      <div className="py-12 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: '論壇首頁', url: '/forum' },
            { name: '綜合討論', url: '/forum/c/1' },
            { name: `話題 ${slug}`, url: `/topic/${slug}` }
          ]} />
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-8">
            <h1 className="text-3xl font-black text-white mb-4">討論話題：{slug}</h1>
            <div className="flex items-center gap-4 text-slate-400 text-sm mb-8 pb-8 border-b border-slate-800">
              <span>發布於 2025-11-20</span>
              <span>作者: Admin</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p>這是一個示範的討論話題內容。</p>
              <p>未來這裡將會顯示完整的文章內容，包含圖片、影片以及更豐富的排版。</p>
              <h3>內容重點</h3>
              <ul>
                <li>重點一：測試站路由架構</li>
                <li>重點二：SEO 防護機制</li>
                <li>重點三：未來 WordPress 遷移規劃</li>
              </ul>
            </div>
          </div>
          
          {/* 留言區暫位 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">留言回應</h3>
            <p className="text-slate-400 text-center py-8">目前尚無留言</p>
          </div>
        </div>
      </div>
    </>
  );
};

