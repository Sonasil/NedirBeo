// Typography system for the app

import { StyleSheet } from 'react-native';
import { colors } from './colors';

// Font families
export const fontFamily = {
  serif: 'DMSerifDisplay-Regular',
  sansBold: 'PlusJakartaSans-Bold',
  sansSemiBold: 'PlusJakartaSans-SemiBold',
  sansMedium: 'PlusJakartaSans-Medium',
  sansRegular: 'PlusJakartaSans-Regular',
};

// Line heights
const lineHeight = {
  tight: 1.2,    // 120% - for headings
  normal: 1.5,   // 150% - for body text
  loose: 1.8,    // 180% - for larger text blocks
};

// Typography styles
export const typography = StyleSheet.create({
  // Display & Headings - Serif
  displayLarge: {
    fontFamily: fontFamily.serif,
    fontSize: 40,
    lineHeight: 40 * lineHeight.tight,
    color: colors.neutral[900],
  },
  displayMedium: {
    fontFamily: fontFamily.serif,
    fontSize: 32,
    lineHeight: 32 * lineHeight.tight,
    color: colors.neutral[900],
  },
  displaySmall: {
    fontFamily: fontFamily.serif,
    fontSize: 28,
    lineHeight: 28 * lineHeight.tight,
    color: colors.neutral[900],
  },
  headingLarge: {
    fontFamily: fontFamily.serif,
    fontSize: 24,
    lineHeight: 24 * lineHeight.tight,
    color: colors.neutral[900],
  },
  
  // Headings & Subheadings - Sans
  headingMedium: {
    fontFamily: fontFamily.sansBold,
    fontSize: 20,
    lineHeight: 20 * lineHeight.tight,
    color: colors.neutral[900],
  },
  headingSmall: {
    fontFamily: fontFamily.sansBold,
    fontSize: 18,
    lineHeight: 18 * lineHeight.tight,
    color: colors.neutral[900],
  },
  subheading: {
    fontFamily: fontFamily.sansSemiBold,
    fontSize: 16,
    lineHeight: 16 * lineHeight.tight,
    color: colors.neutral[900],
  },
  
  // Body text
  bodyLarge: {
    fontFamily: fontFamily.sansRegular,
    fontSize: 18,
    lineHeight: 18 * lineHeight.normal,
    color: colors.neutral[800],
  },
  bodyMedium: {
    fontFamily: fontFamily.sansRegular,
    fontSize: 16,
    lineHeight: 16 * lineHeight.normal,
    color: colors.neutral[800],
  },
  bodySmall: {
    fontFamily: fontFamily.sansRegular,
    fontSize: 14,
    lineHeight: 14 * lineHeight.normal,
    color: colors.neutral[800],
  },
  
  // Emphasized body text
  bodyLargeMedium: {
    fontFamily: fontFamily.sansMedium,
    fontSize: 18,
    lineHeight: 18 * lineHeight.normal,
    color: colors.neutral[900],
  },
  bodyMediumMedium: {
    fontFamily: fontFamily.sansMedium,
    fontSize: 16,
    lineHeight: 16 * lineHeight.normal,
    color: colors.neutral[900],
  },
  bodySmallMedium: {
    fontFamily: fontFamily.sansMedium,
    fontSize: 14,
    lineHeight: 14 * lineHeight.normal,
    color: colors.neutral[900],
  },
  
  // Supporting text
  caption: {
    fontFamily: fontFamily.sansRegular,
    fontSize: 12,
    lineHeight: 12 * lineHeight.normal,
    color: colors.neutral[700],
  },
  captionMedium: {
    fontFamily: fontFamily.sansMedium,
    fontSize: 12,
    lineHeight: 12 * lineHeight.normal,
    color: colors.neutral[700],
  },
  
  // Interactive elements
  button: {
    fontFamily: fontFamily.sansSemiBold,
    fontSize: 16,
    lineHeight: 16 * lineHeight.normal,
    color: colors.white,
  },
  buttonSmall: {
    fontFamily: fontFamily.sansSemiBold,
    fontSize: 14,
    lineHeight: 14 * lineHeight.normal,
    color: colors.white,
  },
});