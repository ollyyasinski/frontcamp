export interface Article {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ArticlePatch {
  title: string;
  content: string;
  description: string;
}

interface ArticleSource {
  id: string;
  name: string;
}
