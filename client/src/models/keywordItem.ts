export interface KeywordItem {
  _id: string;
  keyword: string;
  url: string;
  domain: string;
  currentPosition: number | null;
  currentPage: number | null;
  bestPosition: number | null;
  positionChange: number;
  active: boolean;
  lastChecked: string | null;
  status: string;
  competitors: {
    position: number;
    url: string;
    domain: string;
    title: string;
    snippet: string;
  }[];
}
