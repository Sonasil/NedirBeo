import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heart, Bookmark, MessageCircle } from 'lucide-react-native';
import { Word } from '../../types/word';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { AudioPlayer } from './AudioPlayer';

interface WordCardProps {
  word: Word;
  onPress?: () => void;
  compact?: boolean;
  onLikePress?: () => void;
  onSavePress?: () => void;
  onCommentPress?: () => void;
}

export const WordCard: React.FC<WordCardProps> = ({
  word,
  onPress,
  compact = false,
  onLikePress,
  onSavePress,
  onCommentPress,
}) => {
  const renderTags = () => {
    if (!word.tags || word.tags.length === 0) return null;
    
    return (
      <View style={styles.tagsContainer}>
        {word.tags.slice(0, 3).map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
        {word.tags.length > 3 && (
          <Text style={styles.moreTagsText}>+{word.tags.length - 3}</Text>
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.header}>
        <Text style={styles.word}>{word.word}</Text>
        {word.partOfSpeech && (
          <Text style={styles.partOfSpeech}>{word.partOfSpeech}</Text>
        )}
      </View>

      <Text style={styles.meaning} numberOfLines={compact ? 2 : undefined}>
        {word.meaning}
      </Text>

      {!compact && word.example && (
        <Text style={styles.example}>"{word.example}"</Text>
      )}

      {!compact && (
        <View style={styles.audioContainer}>
          {word.cyprusAudio && (
            <View style={styles.audioItem}>
              <Text style={styles.audioLabel}>Kıbrıs Türkçesi</Text>
              <AudioPlayer audioUrl={word.cyprusAudio} variant="primary" size="small" />
            </View>
          )}
          {word.turkeyAudio && (
            <View style={styles.audioItem}>
              <Text style={styles.audioLabel}>Türkiye Türkçesi</Text>
              <AudioPlayer audioUrl={word.turkeyAudio} variant="secondary" size="small" />
            </View>
          )}
        </View>
      )}

      {!compact && renderTags()}

      <View style={styles.footer}>
        <View style={styles.contributorContainer}>
          {word.contributor.avatar && (
            <Image 
              source={{ uri: word.contributor.avatar }} 
              style={styles.avatar} 
            />
          )}
          <Text style={styles.contributorName}>{word.contributor.username}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={onLikePress}
          >
            <Heart 
              size={18} 
              color={word.isLiked ? colors.accent[500] : colors.neutral[500]} 
              fill={word.isLiked ? colors.accent[500] : 'none'} 
            />
            <Text style={styles.actionText}>{word.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={onCommentPress}
          >
            <MessageCircle size={18} color={colors.neutral[500]} />
            <Text style={styles.actionText}>{word.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={onSavePress}
          >
            <Bookmark 
              size={18} 
              color={word.isSaved ? colors.primary[500] : colors.neutral[500]} 
              fill={word.isSaved ? colors.primary[500] : 'none'} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.l,
    padding: spacing.m,
    marginBottom: spacing.m,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  word: {
    ...typography.displaySmall,
    color: colors.primary[500],
    marginRight: spacing.s,
  },
  partOfSpeech: {
    ...typography.caption,
    color: colors.neutral[600],
    backgroundColor: colors.neutral[200],
    paddingHorizontal: spacing.s,
    paddingVertical: 2,
    borderRadius: borderRadius.s,
  },
  meaning: {
    ...typography.bodyMedium,
    color: colors.neutral[800],
    marginBottom: spacing.s,
  },
  example: {
    ...typography.bodySmall,
    fontStyle: 'italic',
    color: colors.neutral[700],
    marginBottom: spacing.m,
  },
  audioContainer: {
    flexDirection: 'row',
    marginBottom: spacing.m,
    gap: spacing.l,
  },
  audioItem: {
    alignItems: 'flex-start',
  },
  audioLabel: {
    ...typography.captionMedium,
    color: colors.neutral[700],
    marginBottom: spacing.xs,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.m,
    gap: spacing.xs,
  },
  tag: {
    backgroundColor: colors.primary[100],
    paddingHorizontal: spacing.s,
    paddingVertical: 2,
    borderRadius: borderRadius.s,
  },
  tagText: {
    ...typography.caption,
    color: colors.primary[700],
  },
  moreTagsText: {
    ...typography.caption,
    color: colors.neutral[600],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  contributorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: spacing.xs,
  },
  contributorName: {
    ...typography.captionMedium,
    color: colors.neutral[700],
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: spacing.m,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  actionText: {
    ...typography.caption,
    color: colors.neutral[600],
  },
});