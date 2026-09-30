export interface AnalysisItem {
  _id: string;
  url: string;
  overallScore: number;
  status: string;
  createdAt: string;
  categories: {
    seo: number;
    performance: number;
    accessibility: number;
    bestPractices: number;
  };
}
