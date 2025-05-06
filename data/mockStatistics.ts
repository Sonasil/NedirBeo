import { StatisticsData, TopUser, PopularWord } from '../types/statistics';

export const mockTopUsers: TopUser[] = [
  {
    id: '101',
    username: 'mehmetcyprus',
    avatar: 'https://i.pravatar.cc/150?img=1',
    wordsAdded: 73,
    totalLikes: 312,
  },
  {
    id: '107',
    username: 'zehra75',
    avatar: 'https://i.pravatar.cc/150?img=7',
    wordsAdded: 65,
    totalLikes: 287,
  },
  {
    id: '104',
    username: 'elifnicosia',
    avatar: 'https://i.pravatar.cc/150?img=4',
    wordsAdded: 58,
    totalLikes: 254,
  },
  {
    id: '109',
    username: 'fatmasultana',
    avatar: 'https://i.pravatar.cc/150?img=9',
    wordsAdded: 52,
    totalLikes: 243,
  },
  {
    id: '102',
    username: 'ayselefteki',
    avatar: 'https://i.pravatar.cc/150?img=2',
    wordsAdded: 47,
    totalLikes: 215,
  },
];

export const mockPopularWords: PopularWord[] = [
  {
    id: '9',
    word: 'Molohiya',
    meaning: 'A type of green, leafy vegetable used in Cypriot cuisine',
    likes: 187,
    views: 543,
    saves: 98,
  },
  {
    id: '1',
    word: 'Hellim',
    meaning: 'A traditional Cypriot cheese made from a mixture of goat and sheep milk',
    likes: 156,
    views: 489,
    saves: 87,
  },
  {
    id: '5',
    word: 'Zivaniya',
    meaning: 'A traditional Cypriot alcoholic spirit',
    likes: 143,
    views: 462,
    saves: 76,
  },
  {
    id: '3',
    word: 'Cırnık',
    meaning: 'Palm of the hand or a handful of something',
    likes: 132,
    views: 412,
    saves: 65,
  },
  {
    id: '7',
    word: 'Dablez',
    meaning: 'Upside down or messy, chaotic',
    likes: 112,
    views: 387,
    saves: 58,
  },
];

export const mockStatisticsData: StatisticsData = {
  totalWords: 1243,
  totalUsers: 768,
  totalInteractions: 15872,
  contributionsByMonth: [
    { month: 'Jan', count: 87 },
    { month: 'Feb', count: 93 },
    { month: 'Mar', count: 105 },
    { month: 'Apr', count: 118 },
    { month: 'May', count: 127 },
    { month: 'Jun', count: 142 },
    { month: 'Jul', count: 156 },
    { month: 'Aug', count: 163 },
    { month: 'Sep', count: 175 },
    { month: 'Oct', count: 77 }, // Current month (partial)
  ],
  topUsers: mockTopUsers,
  topWords: mockPopularWords,
  recentWordsByCategory: [
    { category: 'food', count: 278 },
    { category: 'everyday', count: 243 },
    { category: 'expression', count: 187 },
    { category: 'cultural', count: 156 },
    { category: 'household', count: 134 },
    { category: 'nature', count: 98 },
    { category: 'other', count: 147 },
  ],
  userGrowth: [
    { month: 'Jan', count: 45 },
    { month: 'Feb', count: 52 },
    { month: 'Mar', count: 61 },
    { month: 'Apr', count: 58 },
    { month: 'May', count: 67 },
    { month: 'Jun', count: 78 },
    { month: 'Jul', count: 85 },
    { month: 'Aug', count: 93 },
    { month: 'Sep', count: 101 },
    { month: 'Oct', count: 32 }, // Current month (partial)
  ],
};