import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Filter, TrendingUp as SortDescending } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { SearchBar } from '../../components/ui/SearchBar';
import { WordCard } from '../../components/ui/WordCard';
import { TabBar } from '../../components/ui/TabBar';
import { mockWords } from '../../data/mockWords';
import { Word } from '../../types/word';

type SortOption = 'newest' | 'oldest' | 'mostLiked' | 'alphabetical';
type FilterOption = 'all' | 'food' | 'culture' | 'everyday' | 'expression' | 'household';

export default function DictionaryScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const tabs = [
    { id: 'all', label: 'Tümü' },
    { id: 'saved', label: 'Kaydedilenler', badge: 5 },
    { id: 'contributed', label: 'Eklediğim' },
  ];
  
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: 'En Yeni' },
    { value: 'oldest', label: 'En Eski' },
    { value: 'mostLiked', label: 'En Çok Beğenilen' },
    { value: 'alphabetical', label: 'A-Z' },
  ];
  
  const filterOptions: { value: FilterOption; label: string }[] = [
    { value: 'all', label: 'Tümü' },
    { value: 'food', label: 'Yemek' },
    { value: 'culture', label: 'Kültür' },
    { value: 'everyday', label: 'Günlük' },
    { value: 'expression', label: 'Deyim' },
    { value: 'household', label: 'Ev' },
  ];
  
  // Filter and sort words based on current selection
  const getFilteredWords = (): Word[] => {
    let filtered = [...mockWords];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(word => 
        word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply tab filter
    if (activeTab === 'saved') {
      filtered = filtered.filter(word => word.isSaved);
    } else if (activeTab === 'contributed') {
      filtered = filtered.filter(word => word.contributor.id === '101'); // Current user id
    }
    
    // Apply category filter
    if (filterBy !== 'all') {
      filtered = filtered.filter(word => 
        word.tags?.includes(filterBy)
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      case 'mostLiked':
        return filtered.sort((a, b) => b.likes - a.likes);
      case 'alphabetical':
        return filtered.sort((a, b) => a.word.localeCompare(b.word));
      default:
        return filtered;
    }
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleWordPress = (wordId: string) => {
    // Navigate to word details
    // router.push(`/word/${wordId}`);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sözlük</Text>
        
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} color={colors.primary[500]} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.sortButton}>
            <SortDescending size={20} color={colors.primary[500]} />
          </TouchableOpacity>
        </View>
      </View>
      
      <SearchBar
        placeholder="Kelime ara..."
        onSearch={handleSearch}
      />
      
      <TabBar 
        tabs={tabs}
        activeTabId={activeTab}
        onTabPress={setActiveTab}
      />
      
      {showFilters && (
        <View style={styles.filtersContainer}>
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>Sırala</Text>
            <View style={styles.optionsRow}>
              {sortOptions.map(option => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.optionButton,
                    sortBy === option.value && styles.optionButtonActive
                  ]}
                  onPress={() => setSortBy(option.value)}
                >
                  <Text 
                    style={[
                      styles.optionText,
                      sortBy === option.value && styles.optionTextActive
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>Kategori</Text>
            <View style={styles.optionsRow}>
              {filterOptions.map(option => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.optionButton,
                    filterBy === option.value && styles.optionButtonActive
                  ]}
                  onPress={() => setFilterBy(option.value)}
                >
                  <Text 
                    style={[
                      styles.optionText,
                      filterBy === option.value && styles.optionTextActive
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}
      
      <FlatList
        data={getFilteredWords()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <WordCard 
            word={item}
            onPress={() => handleWordPress(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[100],
    paddingHorizontal: spacing.l,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  title: {
    ...typography.displaySmall,
    color: colors.primary[500],
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: spacing.s,
  },
  filterButton: {
    padding: spacing.s,
    backgroundColor: colors.primary[50],
    borderRadius: borderRadius.s,
  },
  sortButton: {
    padding: spacing.s,
    backgroundColor: colors.primary[50],
    borderRadius: borderRadius.s,
  },
  filtersContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.l,
    padding: spacing.m,
    marginVertical: spacing.m,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  filterSection: {
    marginBottom: spacing.m,
  },
  filterTitle: {
    ...typography.bodySmallMedium,
    color: colors.neutral[700],
    marginBottom: spacing.s,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s,
  },
  optionButton: {
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: borderRadius.l,
    marginBottom: spacing.xs,
  },
  optionButtonActive: {
    backgroundColor: colors.primary[500],
    borderColor: colors.primary[500],
  },
  optionText: {
    ...typography.caption,
    color: colors.neutral[700],
  },
  optionTextActive: {
    color: colors.white,
  },
  listContent: {
    paddingVertical: spacing.m,
    paddingBottom: 120,
  },
});