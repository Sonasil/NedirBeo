// Type definitions for word-related data

export interface Word {
  id: string;
  word: string;
  meaning: string;
  example?: string;
  cyprusAudio?: string;
  turkeyAudio?: string;
  pronunciation?: string;
  partOfSpeech?: string;
  contributor: {
    id: string;
    username: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt: string;
  likes: number;
  comments: number;
  isSaved?: boolean;
  isLiked?: boolean;
  etymology?: string;
  tags?: string[];
  related?: {
    id: string;
    word: string;
  }[];
}

export interface Comment {
  id: string;
  wordId: string;
  user: {
    id: string;
    username: string;
    avatar?: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  isLiked?: boolean;
}

export interface UserWordInteraction {
  wordId: string;
  userId: string;
  liked: boolean;
  saved: boolean;
  lastViewed?: string;
}

export interface WordAddForm {
  word: string;
  meaning: string;
  example?: string;
  pronunciation?: string;
  partOfSpeech?: string;
  etymology?: string;
  tags?: string[];
  cyprusAudio?: string;
  turkeyAudio?: string;
}