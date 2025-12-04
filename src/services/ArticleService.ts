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
        skipEmptyLines: true,
        // 處理多行內容（HTML 可能包含換行）
        newline: '',
        // 引號處理，因為 Content 欄位可能包含引號和換行
        quoteChar: '"',
        escapeChar: '"',
        complete: (results: any) => {
          console.log('CSV Parse Results:', results.data.length, 'rows');
          
          const articles: Article[] = results.data
            .filter((row: any) => {
              // 過濾掉空行
              if (!row || Object.keys(row).length === 0) return false;
              
              // 檢查 Status 欄位，支援 'done', 'Done', 'DONE' 等大小寫變化
              const status = (row['Status'] || '').toString().trim().toLowerCase();
              const isDone = status === 'done';
              
              // Debug: 輸出過濾狀態
              if (row['title']) {
                console.log(`Article "${row['title']}": Status="${status}", isDone=${isDone}`);
              }
              
              return isDone;
            })
            .map((row: any, index: number) => {
              // 處理 Excerpt 欄位（注意 CSV 中可能有尾隨空格）
              const excerpt = (row['Excerpt '] || row['Excerpt'] || '').toString().trim();
              const title = (row['title'] || '').toString().trim();
              
              return {
                id: `google-sheet-${index}`,
                keyword: (row['Keyword'] || '').toString().trim(),
                title: title || '無標題',
                content: (row['Content'] || '').toString().trim(),
                excerpt: excerpt,
                tags: [], // CSV 中沒有 Tags 欄位，暫時留空（未來可以從 Category 或 Keyword 衍生）
                slug: title.replace(/\s+/g, '-').toLowerCase().replace(/[^\w-]/g, ''), // 簡單轉 slug，移除特殊字符
                // 優先從 Google Sheet 讀取 Date 欄位，如果沒有則使用當前日期
                date: (row['Date'] || row['date'] || new Date().toISOString().split('T')[0]).toString().trim(),
                category: (row['Category'] || '未分類').toString().trim(),
                image: DEFAULT_IMAGES[index % DEFAULT_IMAGES.length] // 輪播圖片
              };
            });
          
          console.log('Filtered articles:', articles.length);
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

