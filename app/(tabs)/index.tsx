import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { Search, TrendingUp, BookOpen, User, Calendar } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { SearchBar } from '../../components/ui/SearchBar';
import { WordCard } from '../../components/ui/WordCard';
import { AudioPlayer } from '../../components/ui/AudioPlayer';
import { StatCard } from '../../components/ui/StatCard';
import { wordOfTheDay, mockWords } from '../../data/mockWords';
import { mockStatisticsData } from '../../data/mockStatistics';

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentWords] = useState(mockWords.slice(0, 5));
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      // router.push('/search?q=' + query);
    }
  };
  
  const handleWordPress = (wordId: string) => {
    // router.push(`/word/${wordId}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nedir Be O</Text>
          <Text style={styles.headerSubtitle}>
            Kıbrıs Türk dilini keşfedin ve koruyun
          </Text>
        </View>

        <SearchBar
          placeholder="Kelime ara..."
          onSearch={handleSearch}
        />
        
        {/* Word of the Day */}
        <View style={styles.wordOfDaySection}>
          <View style={styles.wordOfDayHeader}>
            <View style={styles.wordOfDayTitleContainer}>
              <Calendar size={20} color={colors.primary[500]} />
              <Text style={styles.wordOfDayTitle}>Günün Kelimesi</Text>
            </View>
            <Text style={styles.date}>14 Ekim 2023</Text>
          </View>
          
          <View style={styles.wordOfDayContent}>
            <Text style={styles.wordOfDayWord}>{wordOfTheDay.word}</Text>
            <Text style={styles.pronunciation}>{wordOfTheDay.pronunciation}</Text>
            <Text style={styles.meaning}>{wordOfTheDay.meaning}</Text>
            
            <View style={styles.audioPlayers}>
              <View style={styles.audioPlayerContainer}>
                <Text style={styles.audioLabel}>Kıbrıs Türkçesi</Text>
                <AudioPlayer 
                  audioUrl={wordOfTheDay.cyprusAudio || ''} 
                  variant="primary"
                />
              </View>
              
              <View style={styles.audioPlayerContainer}>
                <Text style={styles.audioLabel}>Türkiye Türkçesi</Text>
                <AudioPlayer 
                  audioUrl={wordOfTheDay.turkeyAudio || ''} 
                  variant="secondary"
                />
              </View>
            </View>
            
            {wordOfTheDay.example && (
              <View style={styles.exampleContainer}>
                <Text style={styles.exampleLabel}>Örnek:</Text>
                <Text style={styles.example}>"{wordOfTheDay.example}"</Text>
              </View>
            )}
          </View>
        </View>
        
        {/* Quick Stats */}
        <View style={styles.statsGrid}>
          <StatCard 
            title="Toplam Kelime"
            value={mockStatisticsData.totalWords}
            icon={<BookOpen size={20} color={colors.primary[500]} />}
          />
          
          <StatCard 
            title="Toplam Kullanıcı"
            value={mockStatisticsData.totalUsers}
            icon={<User size={20} color={colors.secondary[500]} />}
            color={colors.secondary[500]}
          />
        </View>
        
        {/* Categories */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Kategoriler</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {['Yemek', 'Kültür', 'Günlük', 'Deyim', 'Ev', 'Doğa'].map((category, index) => (
              <TouchableOpacity 
                key={category} 
                style={[
                  styles.categoryCard,
                  { backgroundColor: index % 2 === 0 ? colors.primary[500] : colors.secondary[500] }
                ]}
              >
                <Text style={styles.categoryText}>{category}</Text>
                <Text style={styles.categoryCount}>24</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        {/* Recent Words */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Son Eklenenler</Text>
            <Search size={18} color={colors.primary[500]} />
          </View>
          
          {recentWords.map(word => (
            <WordCard 
              key={word.id}
              word={word}
              compact={true}
              onPress={() => handleWordPress(word.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  header: {
    paddingTop: 60,
    paddingBottom: spacing.l,
  },
  headerTitle: {
    ...typography.displayLarge,
    color: colors.primary[500],
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    ...typography.bodyLarge,
    color: colors.neutral[600],
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.l,
    paddingBottom: spacing.xxxl,
  },
  wordOfDaySection: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    marginVertical: spacing.l,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  wordOfDayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.m,
    backgroundColor: colors.primary[50],
  },
  wordOfDayTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  wordOfDayTitle: {
    ...typography.headingSmall,
    color: colors.primary[500],
  },
  date: {
    ...typography.caption,
    color: colors.neutral[600],
  },
  wordOfDayContent: {
    padding: spacing.l,
  },
  wordOfDayWord: {
    ...typography.displayMedium,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
  },
  pronunciation: {
    ...typography.bodySmall,
    color: colors.neutral[600],
    fontStyle: 'italic',
    marginBottom: spacing.s,
  },
  meaning: {
    ...typography.bodyMedium,
    color: colors.neutral[700],
    marginBottom: spacing.l,
  },
  audioPlayers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: spacing.l,
  },
  audioPlayerContainer: {
    alignItems: 'center',
  },
  audioLabel: {
    ...typography.caption,
    color: colors.neutral[600],
    marginBottom: spacing.xs,
  },
  exampleContainer: {
    backgroundColor: colors.neutral[50],
    padding: spacing.m,
    borderRadius: borderRadius.m,
    marginTop: spacing.m,
  },
  exampleLabel: {
    ...typography.captionMedium,
    color: colors.neutral[700],
    marginBottom: spacing.xs,
  },
  example: {
    ...typography.bodyMedium,
    color: colors.neutral[800],
    fontStyle: 'italic',
  },
  statsGrid: {
    marginBottom: spacing.l,
  },
  categoriesSection: {
    marginBottom: spacing.xl,
  },
  categoriesContainer: {
    paddingVertical: spacing.m,
    gap: spacing.m,
  },
  categoryCard: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.m,
    borderRadius: borderRadius.l,
    marginRight: spacing.m,
    alignItems: 'center',
  },
  categoryText: {
    ...typography.bodyMediumMedium,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  categoryCount: {
    ...typography.caption,
    color: colors.white,
    opacity: 0.8,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  sectionTitle: {
    ...typography.headingMedium,
    color: colors.neutral[800],
  },
});