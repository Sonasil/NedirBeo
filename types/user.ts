// Type definitions for user-related data

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
  stats: UserStats;
  badges: Badge[];
  preferences: UserPreferences;
}

export interface UserStats {
  wordsAdded: number;
  wordsLiked: number;
  wordsSaved: number;
  commentsAdded: number;
  totalLikesReceived: number;
  totalContributions: number;
  joinedDate: string;
  streak: number;
  lastActive: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  earnedAt: string;
  category: 'contributor' | 'engagement' | 'achievement' | 'special';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export interface UserPreferences {
  notifications: boolean;
  emailUpdates: boolean;
  darkMode: boolean;
  language: 'tr-cy' | 'tr' | 'en';
  fontScale: number;
}

export interface UserActivity {
  id: string;
  userId: string;
  type: 'add_word' | 'like_word' | 'save_word' | 'add_comment' | 'earn_badge';
  timestamp: string;
  data: {
    wordId?: string;
    word?: string;
    commentId?: string;
    badgeId?: string;
  };
}

export interface ProfileTabData {
  words: number;
  saved: number;
  badges: number;
}