export interface NewsGetResponse {
  id: string;
  created_at: string;
  main_image: string;
  news_svg: string;
  main_title: string;
  main_description: string;
  years: number[];
  news: News;
  NewsData: NewsData;
}

export interface News {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsGetResponse[];
}

export interface NewsData {
  years: number[];
  news: News;
}
