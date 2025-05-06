import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Users, BookOpen, TrendingUp, Calendar } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { StatCard } from '../../components/ui/StatCard';
import { mockStatisticsData, mockTopUsers } from '../../data/mockStatistics';

// Simplified bar chart component for demonstration
const BarChart = ({ data, height = 200, barWidth = 30, gap = 10 }) => {
  const maxValue = Math.max(...data.map(item => item.count));
  
  return (
    <View style={[styles.chartContainer, { height }]}>
      <View style={styles.yAxis}>
        <Text style={styles.axisLabel}>{maxValue}</Text>
        <Text style={styles.axisLabel}>{Math.round(maxValue / 2)}</Text>
        <Text style={styles.axisLabel}>0</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.barContainer}
      >
        {data.map((item, index) => {
          const barHeight = (item.count / maxValue) * height;
          
          return (
            <View key={index} style={styles.barGroup}>
              <View style={styles.barLabelContainer}>
                <View 
                  style={[
                    styles.bar, 
                    { 
                      height: barHeight, 
                      width: barWidth,
                      backgroundColor: colors.primary[500],
                    }
                  ]} 
                />
              </View>
              <Text style={styles.barLabel}>{item.month}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

// Simplified pie chart component for demonstration
const CategoryDistribution = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.count, 0);
  
  return (
    <View style={styles.categoryContainer}>
      {data.map((item, index) => {
        const percentage = Math.round((item.count / total) * 100);
        
        // Assign different colors based on index
        const colors = [
          '#7D8C5B', // primary
          '#5190BA', // secondary
          '#C66C49', // accent
          '#8AA971', // primary light
          '#3F7798', // secondary dark
          '#A0563A', // accent dark
          '#BAB09A', // neutral
        ];
        
        return (
          <View key={index} style={styles.categoryItem}>
            <View style={styles.categoryLabelContainer}>
              <View 
                style={[
                  styles.categoryColorIndicator, 
                  { backgroundColor: colors[index % colors.length] }
                ]} 
              />
              <Text style={styles.categoryLabel}>{item.category}</Text>
            </View>
            <Text style={styles.categoryPercentage}>{percentage}%</Text>
          </View>
        );
      })}
    </View>
  );
};

export default function StatisticsScreen() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>İstatistikler</Text>
        <Text style={styles.subtitle}>
          Kıbrıs Türk dilini koruma çabalarımızın verileri
        </Text>
      </View>
      
      <View style={styles.statsGrid}>
        <StatCard 
          title="Toplam Kelime"
          value={mockStatisticsData.totalWords}
          icon={<BookOpen size={20} color={colors.primary[500]} />}
        />
        
        <StatCard 
          title="Toplam Kullanıcı"
          value={mockStatisticsData.totalUsers}
          icon={<Users size={20} color={colors.secondary[500]} />}
          color={colors.secondary[500]}
        />
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Aylık Katkılar</Text>
          <TrendingUp size={20} color={colors.primary[500]} />
        </View>
        
        <View style={styles.chartCard}>
          <BarChart data={mockStatisticsData.contributionsByMonth} />
        </View>
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kategori Dağılımı</Text>
          <Calendar size={20} color={colors.primary[500]} />
        </View>
        
        <View style={styles.chartCard}>
          <CategoryDistribution data={mockStatisticsData.recentWordsByCategory} />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>En Çok Katkıda Bulunanlar</Text>
        
        {mockTopUsers.map((user, index) => (
          <View key={user.id} style={styles.userItem}>
            <Text style={styles.userRank}>#{index + 1}</Text>
            <View style={styles.userInfo}>
              <View style={styles.userImageContainer}>
                <Text style={styles.userInitial}>{user.username[0].toUpperCase()}</Text>
              </View>
              <View>
                <Text style={styles.userName}>{user.username}</Text>
                <Text style={styles.userStats}>
                  {user.wordsAdded} kelime, {user.totalLikes} beğeni
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

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
    marginBottom: spacing.l,
  },
  title: {
    ...typography.displaySmall,
    color: colors.primary[500],
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.bodyMedium,
    color: colors.neutral[700],
  },
  statsGrid: {
    paddingHorizontal: spacing.l,
    marginBottom: spacing.l,
  },
  section: {
    paddingHorizontal: spacing.l,
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
    marginBottom: spacing.m,
  },
  chartCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.l,
    padding: spacing.l,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  yAxis: {
    height: '100%',
    justifyContent: 'space-between',
    marginRight: spacing.s,
    paddingBottom: 20, // Space for x-axis labels
  },
  axisLabel: {
    ...typography.caption,
    color: colors.neutral[600],
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: spacing.xs,
  },
  barGroup: {
    alignItems: 'center',
    marginRight: spacing.m,
  },
  barLabelContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bar: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  barLabel: {
    ...typography.caption,
    color: colors.neutral[600],
    marginTop: spacing.xs,
  },
  categoryContainer: {
    marginTop: spacing.s,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.s,
  },
  categoryLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryColorIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: spacing.s,
  },
  categoryLabel: {
    ...typography.bodySmall,
    color: colors.neutral[800],
  },
  categoryPercentage: {
    ...typography.bodySmallMedium,
    color: colors.neutral[900],
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.m,
    borderRadius: borderRadius.m,
    marginBottom: spacing.s,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  userRank: {
    ...typography.headingMedium,
    color: colors.primary[500],
    width: 40,
    textAlign: 'center',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.neutral[300],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.m,
  },
  userInitial: {
    ...typography.headingSmall,
    color: colors.white,
  },
  userName: {
    ...typography.bodyMediumMedium,
    color: colors.neutral[900],
  },
  userStats: {
    ...typography.caption,
    color: colors.neutral[600],
  },
});