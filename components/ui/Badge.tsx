import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { Badge as BadgeType } from '../../types/user';

interface BadgeProps {
  badge: BadgeType;
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  badge,
  size = 'medium',
  onPress,
}) => {
  // Determine badge styling based on rarity
  const getBadgeColor = () => {
    switch (badge.rarity) {
      case 'common':
        return colors.neutral[300];
      case 'uncommon':
        return colors.secondary[300];
      case 'rare':
        return colors.primary[300];
      case 'epic':
        return colors.secondary[500];
      case 'legendary':
        return colors.accent[500];
      default:
        return colors.neutral[300];
    }
  };

  // Determine badge size
  const getBadgeSize = () => {
    switch (size) {
      case 'small':
        return { width: 48, height: 48 };
      case 'medium':
        return { width: 64, height: 64 };
      case 'large':
        return { width: 80, height: 80 };
      default:
        return { width: 64, height: 64 };
    }
  };

  const BadgeContent = () => (
    <View style={[
      styles.container,
      { backgroundColor: getBadgeColor() },
      getBadgeSize(),
    ]}>
      {badge.image ? (
        <Image 
          source={{ uri: badge.image }} 
          style={styles.image} 
          resizeMode="contain"
        />
      ) : (
        <Text style={styles.placeholderText}>
          {badge.name.substring(0, 2)}
        </Text>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <BadgeContent />
      </TouchableOpacity>
    );
  }

  return <BadgeContent />;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: spacing.xs,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    ...typography.headingMedium,
    color: colors.white,
    textAlign: 'center',
  },
});