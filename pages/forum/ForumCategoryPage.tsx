import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';

export const ForumCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  return (
    <>
      <SEO 
        title={`版塊 ${category} - YS 論壇`} 
        description={`這是版塊 ${category} 的討論列表。`} 
      />
      <div className="py-12 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: '論壇首頁', url: '/forum' },
            { name: `版塊 ${category}`, url: `/forum/c/${category}` }
          ]} />
          
          <h1 className="text-3xl font-bold text-white mb-8">版塊 {category} 討論區</h1>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <Link key={item} to={`/topic/topic-${item}`} className="block p-6 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">討論主題範例 {item}</h3>
                <div className="text-sm text-slate-400 flex gap-4">
                  <span>作者: Admin</span>
                  <span>回覆: {Math.floor(Math.random() * 100)}</span>
                  <span>瀏覽: {Math.floor(Math.random() * 1000)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

