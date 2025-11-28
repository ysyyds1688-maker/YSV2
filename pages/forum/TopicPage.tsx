import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { FORUM_TOPICS, FORUM_CATEGORIES } from '@/data/mockForumData';
import { Clock, Eye, MessageCircle, User, Calendar, Tag, Share2, ThumbsUp } from 'lucide-react';

export const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // 查找文章
  const topic = FORUM_TOPICS.find(t => t.slug === slug || t.id === slug);
  
  if (!topic) {
    return <div className="text-white text-center py-20">找不到該話題</div>;
  }

  const category = FORUM_CATEGORIES.find(c => c.id === topic.categoryId);

  return (
    <>
      <SEO 
        title={`${topic.title} - YS 論壇`} 
        description={topic.summary}
        keywords={topic.tags.join(',')}
      />
      <div className="py-12 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: '論壇首頁', url: '/forum' },
            { name: category?.name || '版塊', url: `/forum/c/${category?.id}` },
            { name: topic.title, url: `/topic/${topic.slug}` }
          ]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-8">
                
                {/* Featured Image */}
                <div 
                  className="w-full h-64 md:h-96 bg-cover bg-center"
                  style={{ backgroundImage: `url("${topic.image}")` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                </div>

                {/* Article Header - Now overlaying or below image */}
                <div className="px-8 py-6 border-b border-slate-800 bg-slate-900 -mt-20 relative z-10 mx-4 rounded-t-2xl border-t border-x shadow-xl">
                   <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-500/30 font-medium">
                        {category?.name}
                      </span>
                      {topic.tags.map(tag => (
                        <span key={tag} className="text-slate-500 text-xs">#{tag}</span>
                      ))}
                   </div>
                   <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                     {topic.title}
                   </h1>
                   
                   <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                     <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                         {topic.author[0]}
                       </div>
                       <span className="text-white font-medium">{topic.author}</span>
                     </div>
                     <span className="flex items-center gap-1">
                       <Calendar size={14} /> {topic.date}
                     </span>
                     <span className="flex items-center gap-1">
                       <Eye size={14} /> {topic.views} 閱讀
                     </span>
                     <span className="flex items-center gap-1">
                       <MessageCircle size={14} /> {topic.replies} 回覆
                     </span>
                   </div>
                </div>

                {/* Article Body */}
                <div className="p-8 prose prose-invert prose-lg max-w-none bg-slate-900">
                  {/* 使用 dangerouslySetInnerHTML 渲染 HTML 內容 */}
                  <div dangerouslySetInnerHTML={{ __html: topic.content }} />
                </div>

                {/* Article Footer Actions */}
                <div className="px-8 py-6 bg-slate-800/30 border-t border-slate-800 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                    <ThumbsUp size={18} />
                    <span>覺得實用</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <Share2 size={18} />
                    <span>分享話題</span>
                  </button>
                </div>
              </div>
              
              {/* Comments Section (Mock) */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageCircle className="text-cyan-400" />
                  最新回覆 ({topic.replies})
                </h3>
                
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold shrink-0 border border-slate-700">
                        U{i}
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-800">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-medium text-sm">User_{9527 + i}</span>
                            <span className="text-slate-500 text-xs">{i} 小時前</span>
                          </div>
                          <p className="text-slate-300 text-sm">
                            這篇文章寫得很詳細，特別是關於{topic.tags[0]}的部分，解決了我很多疑惑！希望能多出一些這類型的教學。
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 px-2">
                           <button className="text-xs text-slate-500 hover:text-cyan-400">回覆</button>
                           <button className="text-xs text-slate-500 hover:text-cyan-400">點讚</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                  <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors">
                    登入後參與討論
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
               <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
                 <h3 className="text-lg font-bold text-white mb-4">推薦閱讀</h3>
                 <div className="space-y-4">
                   {FORUM_TOPICS.filter(t => t.id !== topic.id).slice(0, 3).map(t => (
                     <Link key={t.id} to={`/topic/${t.slug}`} className="block group">
                       <div className="flex gap-3">
                          <div 
                            className="w-16 h-16 bg-cover bg-center rounded-lg shrink-0 border border-slate-700"
                            style={{ backgroundImage: `url("${t.image}")` }}
                          ></div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors line-clamp-2 mb-1">
                              {t.title}
                            </h4>
                            <span className="text-xs text-slate-500">{t.views} 次瀏覽</span>
                          </div>
                       </div>
                     </Link>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
