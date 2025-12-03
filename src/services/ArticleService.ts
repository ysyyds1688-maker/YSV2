import { useState, useEffect } from 'react';

// 定義文章資料結構
export interface Article {
  id: string;
  keyword: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  slug: string;
  date: string;
  category: string;
  image: string; // 預設圖片
}

// Google Sheet CSV 連結
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTppUqCnAnjejecRJ_C-NWDYVIubEalTIzJFq9tTJD9vjMYKYGlLj06IlYBX15S09HpEanMP2lZmVPZ/pub?output=csv';

// 預設圖片庫 (隨機分配給文章)
const DEFAULT_IMAGES = [
  '/images/已使用/首頁文章1.png',
  '/images/已使用/首頁文章2.png',
  '/images/已使用/首頁文章3.png'
];

export const ArticleService = {
  // 抓取所有文章
  async getAllArticles(): Promise<Article[]> {
    return new Promise((resolve, reject) => {
      // @ts-ignore - Papa is loaded from CDN
      if (!window.Papa) {
        console.error('PapaParse not loaded');
        reject('PapaParse not loaded');
        return;
      }

      // @ts-ignore
      window.Papa.parse(SHEET_CSV_URL, {
        download: true,
        header: true,
        complete: (results: any) => {
          const articles: Article[] = results.data
            .filter((row: any) => row['是否發布'] === 'done' || row['是否發布'] === 'Done') // 只抓已發布的
            .map((row: any, index: number) => {
              return {
                id: `google-sheet-${index}`,
                keyword: row['Keyword'] || '',
                title: row['title'] || '無標題',
                content: row['Content'] || '',
                excerpt: row['Excerpt'] || '',
                tags: (row['Tags'] || '').split(',').map((t: string) => t.trim()),
                slug: (row['title'] || '').replace(/\s+/g, '-').toLowerCase(), // 簡單轉 slug
                date: new Date().toISOString().split('T')[0], // 暫時用今天日期
                category: row['Category'] || '未分類',
                image: DEFAULT_IMAGES[index % DEFAULT_IMAGES.length] // 輪播圖片
              };
            });
          
          resolve(articles);
        },
        error: (error: any) => {
          console.error('CSV Parse Error:', error);
          reject(error);
        }
      });
    });
  },

  // 根據 Slug 抓取單篇文章
  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const articles = await this.getAllArticles();
    // 這裡做一個模糊比對，因為中文轉 slug 可能有編碼問題，暫時比對 title
    return articles.find(a => a.title === slug || a.slug === slug);
  }
};

// React Hook for easy usage
export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ArticleService.getAllArticles()
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('無法載入文章');
        setLoading(false);
      });
  }, []);

  return { articles, loading, error };
};

