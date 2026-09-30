interface RankHistoryEntry {
  date: string;
  position: number | null;
  page: number | null;
  title: string;
  snippet: string;
}

interface Competitor {
  position: number;
  url: string;
  domain: string;
  title: string;
  snippet: string;
}

export interface TrackingData {
  _id: string;
  keyword: string;
  url: string;
  domain: string;
  currentPosition: number | null;
  currentPage: number | null;
  bestPosition: number | null;
  positionChange: number;
  rankHistory: RankHistoryEntry[];
  competitors: Competitor[];
  active: boolean;
  lastChecked: string | null;
  status: string;
  createdAt: string;
}
