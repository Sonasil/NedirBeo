
export interface Word {
  id: string;
  term: string;
  pronunciation: string;
  dialect: string;
  turkishEquivalent: string;
  definition: string;
  exampleSentence: string;
  exampleTranslation: string;
  imageUrl: string;
  likes: number;
  commentsCount: number;
  author: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  likes: number;
  timeAgo: string;
}

export interface UserStats {
  wordsCount: number;
  votesCount: string;
  followersCount: number;
}

export interface User {
  id: string;
  name: string;
  username: string;
  bio: string;
  location: string;
  avatar: string;
  stats: UserStats;
}
