// Type definitions for statistics and analytics data

export interface DailyContribution {
  date: string;
  count: number;
}

export interface ContributionStats {
  total: number;
  daily: DailyContribution[];
  weeklyAverage: number;
  monthlyAverage: number;
  yearlyTotal: number;
}

export interface TopUser {
  id: string;
  username: string;
  avatar?: string;
  wordsAdded: number;
  totalLikes: number;
}

export interface PopularWord {
  id: string;
  word: string;
  meaning: string;
  likes: number;
  views: number;
  saves: number;
}

export interface StatisticsData {
  totalWords: number;
  totalUsers: number;
  totalInteractions: number;
  contributionsByMonth: {
    month: string;
    count: number;
  }[];
  topUsers: TopUser[];
  topWords: PopularWord[];
  recentWordsByCategory: {
    category: string;
    count: number;
  }[];
  userGrowth: {
    month: string;
    count: number;
  }[];
}

export interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    color?: (opacity?: number) => string;
    strokeWidth?: number;
  }[];
}