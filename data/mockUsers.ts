import { User, Badge, UserActivity } from '../types/user';

export const mockBadges: Badge[] = [
  {
    id: 'b1',
    name: 'Söz Ustası',
    description: 'Added 50 words to the dictionary',
    image: 'https://example.com/badges/master_contributor.png',
    earnedAt: '2023-07-15T14:30:00Z',
    category: 'contributor',
    rarity: 'uncommon',
  },
  {
    id: 'b2',
    name: 'Dil Koruyucusu',
    description: 'Continuously active for 30 days',
    image: 'https://example.com/badges/language_guardian.png',
    earnedAt: '2023-08-22T09:15:00Z',
    category: 'engagement',
    rarity: 'rare',
  },
  {
    id: 'b3',
    name: 'Topluluk Yıldızı',
    description: 'Received 100 likes on contributions',
    image: 'https://example.com/badges/community_star.png',
    earnedAt: '2023-06-10T17:45:00Z',
    category: 'achievement',
    rarity: 'uncommon',
  },
  {
    id: 'b4',
    name: 'Kurucu Üye',
    description: 'Joined during the beta phase',
    image: 'https://example.com/badges/founding_member.png',
    earnedAt: '2023-01-05T11:20:00Z',
    category: 'special',
    rarity: 'legendary',
  },
  {
    id: 'b5',
    name: 'Ses Sanatçısı',
    description: 'Added 20 audio pronunciations',
    image: 'https://example.com/badges/voice_artist.png',
    earnedAt: '2023-09-03T13:10:00Z',
    category: 'contributor',
    rarity: 'rare',
  },
];

export const currentUser: User = {
  id: '101',
  username: 'mehmetcyprus',
  email: 'mehmet@example.com',
  avatar: 'https://i.pravatar.cc/150?img=1',
  bio: 'Passionate about preserving the Turkish Cypriot dialect and culture.',
  createdAt: '2023-01-10T08:30:00Z',
  stats: {
    wordsAdded: 73,
    wordsLiked: 189,
    wordsSaved: 42,
    commentsAdded: 56,
    totalLikesReceived: 312,
    totalContributions: 129,
    joinedDate: '2023-01-10T08:30:00Z',
    streak: 37,
    lastActive: '2023-10-01T15:45:00Z',
  },
  badges: mockBadges,
  preferences: {
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    language: 'tr-cy',
    fontScale: 1.0,
  },
};

export const mockUserActivities: UserActivity[] = [
  {
    id: 'act1',
    userId: '101',
    type: 'add_word',
    timestamp: '2023-09-30T14:20:00Z',
    data: {
      wordId: '6',
      word: 'Haşhaş',
    },
  },
  {
    id: 'act2',
    userId: '101',
    type: 'like_word',
    timestamp: '2023-09-30T16:45:00Z',
    data: {
      wordId: '3',
      word: 'Cırnık',
    },
  },
  {
    id: 'act3',
    userId: '101',
    type: 'add_comment',
    timestamp: '2023-09-29T09:10:00Z',
    data: {
      wordId: '5',
      word: 'Zivaniya',
      commentId: 'c12',
    },
  },
  {
    id: 'act4',
    userId: '101',
    type: 'earn_badge',
    timestamp: '2023-09-28T18:30:00Z',
    data: {
      badgeId: 'b5',
    },
  },
  {
    id: 'act5',
    userId: '101',
    type: 'save_word',
    timestamp: '2023-09-28T12:15:00Z',
    data: {
      wordId: '7',
      word: 'Dablez',
    },
  },
  {
    id: 'act6',
    userId: '101',
    type: 'add_word',
    timestamp: '2023-09-27T10:40:00Z',
    data: {
      wordId: '12',
      word: 'Ficimiz',
    },
  },
];