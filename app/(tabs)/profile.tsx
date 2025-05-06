import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { CreditCard as Edit, Award, LogOut, Settings, ChevronRight } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { Badge } from '../../components/ui/Badge';
import { TabBar } from '../../components/ui/TabBar';
import { currentUser, mockUserActivities } from '../../data/mockUsers';
import { mockWords } from '../../data/mockWords';
import { UserActivity } from '../../types/user';
import { WordCard } from '../../components/ui/WordCard';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('activities');

  const renderActivityItem = (activity: UserActivity) => {
    const getActivityDetails = () => {
      switch (activity.type) {
        case 'add_word':
          return {
            icon: <Plus size={16} color={colors.white} />,
            iconBg: colors.primary[500],
            message: `"${activity.data.word}" kelimesini eklediniz.`,
          };
        case 'like_word':
          return {
            icon: <Heart size={16} color={colors.white} />,
            iconBg: colors.accent[500],
            message: `"${activity.data.word}" kelimesini beğendiniz.`,
          };
        case 'save_word':
          return {
            icon: <Bookmark size={16} color={colors.white} />,
            iconBg: colors.secondary[500],
            message: `"${activity.data.word}" kelimesini kaydetdiniz.`,
          };
        case 'add_comment':
          return {
            icon: <MessageCircle size={16} color={colors.white} />,
            iconBg: colors.neutral[600],
            message: `"${activity.data.word}" kelimesine yorum yaptınız.`,
          };
        case 'earn_badge':
          const badge = currentUser.badges.find(b => b.id === activity.data.badgeId);
          return {
            icon: <Award size={16} color={colors.white} />,
            iconBg: colors.accent[500],
            message: `"${badge?.name}" rozetini kazandınız!`,
          };
        default:
          return {
            icon: <Info size={16} color={colors.white} />,
            iconBg: colors.neutral[600],
            message: 'Bir etkinlik gerçekleştirdiniz.',
          };
      }
    };

    const { icon, iconBg, message } = getActivityDetails();
    
    // Format the date (in a real app, use a proper date formatter)
    const timestamp = new Date(activity.timestamp);
    const formattedDate = timestamp.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: 'short',
    });

    return (
      <View style={styles.activityItem}>
        <View style={[styles.activityIcon, { backgroundColor: iconBg }]}>
          {icon}
        </View>
        <View style={styles.activityContent}>
          <Text style={styles.activityMessage}>{message}</Text>
          <Text style={styles.activityDate}>{formattedDate}</Text>
        </View>
      </View>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'activities':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Son Etkinlikler</Text>
            {mockUserActivities.map(activity => renderActivityItem(activity))}
          </View>
        );
      case 'words':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Eklediğim Kelimeler</Text>
            {mockWords
              .filter(word => word.contributor.id === currentUser.id)
              .map(word => (
                <WordCard key={word.id} word={word} compact />
              ))}
          </View>
        );
      case 'saved':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Kaydettiğim Kelimeler</Text>
            {mockWords
              .filter(word => word.isSaved)
              .map(word => (
                <WordCard key={word.id} word={word} compact />
              ))}
          </View>
        );
      case 'badges':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Rozetlerim</Text>
            <View style={styles.badgesGrid}>
              {currentUser.badges.map(badge => (
                <View key={badge.id} style={styles.badgeContainer}>
                  <Badge badge={badge} size="large" />
                  <Text style={styles.badgeName}>{badge.name}</Text>
                  <Text style={styles.badgeDescription}>{badge.description}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Settings size={24} color={colors.neutral[700]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <LogOut size={24} color={colors.neutral[700]} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: currentUser.avatar }} 
            style={styles.avatar}
          />
          <TouchableOpacity 
            style={styles.editButton}
            hitSlop={8}
          >
            <Edit size={16} color={colors.white} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.username}>{currentUser.username}</Text>
        <Text style={styles.bio}>{currentUser.bio}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{currentUser.stats.wordsAdded}</Text>
            <Text style={styles.statLabel}>Kelime</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{currentUser.stats.totalLikesReceived}</Text>
            <Text style={styles.statLabel}>Beğeni</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{currentUser.badges.length}</Text>
            <Text style={styles.statLabel}>Rozet</Text>
          </View>
        </View>
        
        <View style={styles.streakContainer}>
          <Award size={20} color={colors.accent[500]} />
          <Text style={styles.streakText}>
            {currentUser.stats.streak} günlük katkı serisi!
          </Text>
        </View>
      </View>
      
      <View style={styles.badgesPreview}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Rozetler</Text>
          <TouchableOpacity
            style={styles.seeAllButton}
            onPress={() => setActiveTab('badges')}
          >
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
            <ChevronRight size={16} color={colors.primary[500]} />
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.badgesScroll}
        >
          {currentUser.badges.map(badge => (
            <View key={badge.id} style={styles.badgePreviewContainer}>
              <Badge badge={badge} />
              <Text style={styles.badgePreviewName}>{badge.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.tabs}>
        <TabBar 
          tabs={[
            { id: 'activities', label: 'Etkinlikler' },
            { id: 'words', label: 'Kelimelerim' },
            { id: 'saved', label: 'Kaydedilenler' },
            { id: 'badges', label: 'Rozetlerim' },
          ]}
          activeTabId={activeTab}
          onTabPress={setActiveTab}
        />
      </View>
      
      {renderTabContent()}
    </ScrollView>
  );
}

import { Plus, Heart, Bookmark, MessageCircle, Info } from 'lucide-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[100],
  },
  scrollContent: {
    paddingBottom: spacing.xxxl,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: spacing.l,
    marginBottom: spacing.m,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.m,
  },
  headerButton: {
    padding: spacing.xs,
  },
  profileCard: {
    marginHorizontal: spacing.l,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.l,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileHeader: {
    position: 'relative',
    marginBottom: spacing.m,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.white,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary[500],
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  username: {
    ...typography.headingMedium,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
  },
  bio: {
    ...typography.bodySmall,
    color: colors.neutral[700],
    textAlign: 'center',
    marginBottom: spacing.m,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: spacing.m,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...typography.headingMedium,
    color: colors.primary[500],
  },
  statLabel: {
    ...typography.caption,
    color: colors.neutral[600],
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: colors.neutral[300],
    alignSelf: 'center',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accent[50],
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.m,
    gap: spacing.xs,
  },
  streakText: {
    ...typography.captionMedium,
    color: colors.accent[700],
  },
  badgesPreview: {
    marginTop: spacing.l,
    paddingHorizontal: spacing.l,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  sectionTitle: {
    ...typography.headingSmall,
    color: colors.neutral[800],
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    ...typography.bodySmallMedium,
    color: colors.primary[500],
    marginRight: spacing.xs,
  },
  badgesScroll: {
    paddingBottom: spacing.s,
  },
  badgePreviewContainer: {
    alignItems: 'center',
    marginRight: spacing.l,
    width: 80,
  },
  badgePreviewName: {
    ...typography.caption,
    color: colors.neutral[800],
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  tabs: {
    marginTop: spacing.l,
    paddingHorizontal: spacing.l,
  },
  tabContent: {
    marginTop: spacing.l,
    paddingHorizontal: spacing.l,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.m,
    backgroundColor: colors.white,
    padding: spacing.m,
    borderRadius: borderRadius.m,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.m,
  },
  activityContent: {
    flex: 1,
  },
  activityMessage: {
    ...typography.bodySmall,
    color: colors.neutral[800],
    marginBottom: spacing.xs,
  },
  activityDate: {
    ...typography.caption,
    color: colors.neutral[600],
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: spacing.m,
  },
  badgeContainer: {
    width: '45%',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  badgeName: {
    ...typography.bodySmallMedium,
    color: colors.neutral[900],
    marginTop: spacing.s,
    textAlign: 'center',
  },
  badgeDescription: {
    ...typography.caption,
    color: colors.neutral[700],
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});