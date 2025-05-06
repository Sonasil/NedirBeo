import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography, fontFamily } from '../../theme/typography';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (text: string) => void;
  onClear?: () => void;
  initialValue?: string;
  autoFocus?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Kelime ara...',
  onSearch,
  onClear,
  initialValue = '',
  autoFocus = false,
}) => {
  const [searchText, setSearchText] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleChangeText = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  const handleClear = () => {
    setSearchText('');
    if (onClear) {
      onClear();
    } else {
      onSearch('');
    }
  };

  return (
    <View style={[
      styles.container,
      isFocused && styles.containerFocused
    ]}>
      <Search 
        size={20} 
        color={isFocused ? colors.primary[500] : colors.neutral[500]} 
        style={styles.searchIcon} 
      />
      
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.neutral[500]}
        value={searchText}
        onChangeText={handleChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus={autoFocus}
        autoCapitalize="none"
        autoCorrect={false}
      />
      
      {searchText !== '' && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <X size={16} color={colors.neutral[500]} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.neutral[100],
    borderRadius: borderRadius.l,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.s,
    marginVertical: spacing.m,
    borderWidth: 2,
    borderColor: colors.transparent,
  },
  containerFocused: {
    backgroundColor: colors.white,
    borderColor: colors.primary[100],
    shadowColor: colors.primary[500],
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: spacing.s,
  },
  input: {
    flex: 1,
    fontFamily: fontFamily.sansRegular,
    fontSize: 16,
    color: colors.neutral[900],
    padding: 0,
  },
  clearButton: {
    padding: spacing.xs,
  },
});