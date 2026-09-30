import type { ReactNode } from "react";

/* ---------- Home ---------- */
export interface HomeFeature {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface HomeHowItWorksStep {
  num: string;
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface HomeFooterLinkGroup {
  title: string;
  links: string[];
}

/* ---------- Analysis ---------- */
export interface AnalysisCategories {
  seo: number;
  performance: number;
  accessibility: number;
  bestPractices: number;
}

export interface AnalysisMetaData {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  viewport: string;
  charset: string;
}

export interface AnalysisHeadings {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  h1Texts: string[];
}

export interface AnalysisLinks {
  broken: number;
  internal: number;
  external: number;
  total: number;
}

export interface AnalysisImages {
  total: number;
  missingAlt: number;
  withAlt: number;
}

export type AnalysisStatus = "pending" | "processing" | "completed" | "failed";

export interface WebsiteAnalysisSummary {
  _id: string;
  userId: string;
  url: string;
  status: AnalysisStatus;
  overallScore: number;
  loadTime: number; // ms
  pageSize: number; // bytes
  wordCount: number;
  categories: AnalysisCategories;
  metaData: AnalysisMetaData;
  headings: AnalysisHeadings;
  links: AnalysisLinks;
  images: AnalysisImages;
  createdAt: string;
  updatedAt: string;
}

export interface AnalysisKeyword {
  _id: string;
  word: string;
  count: number;
  density: number;
}

export type IssueSeverity = "error" | "warning" | "info";

export interface AnalysisIssue {
  severity: IssueSeverity;
  category: string;
  message: string;
  recommendation: string;
}

export interface WebsiteAnalysis extends WebsiteAnalysisSummary {
  keywords: AnalysisKeyword[];
  issues: AnalysisIssue[];
}

/* ---------- Rankings ---------- */
export interface RankingCompetitor {
  position: number;
  url: string;
  domain: string;
  title: string;
  snippet: string;
}

export interface RankHistoryEntry {
  date: string;
  position: number;
  page: number;
  title: string;
  snippet: string;
}

export interface Ranking {
  _id: string;
  userId: string;
  keyword: string;
  url: string;
  domain: string;
  currentPosition: number | null;
  currentPage: number | null;
  bestPosition: number;
  positionChange: number;
  active: boolean;
  lastChecked: string;
  status: AnalysisStatus;
  competitors: RankingCompetitor[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface WebsiteRanking extends Ranking {
  rankHistory: RankHistoryEntry[];
}
