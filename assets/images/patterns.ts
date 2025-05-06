// SVG patterns based on traditional Cypriot elements
// These can be used as decorative elements throughout the app

import { SvgProps } from 'react-native-svg';
import { ReactNode } from 'react';

// Types for pattern components
export interface PatternProps extends SvgProps {
  color?: string;
  secondaryColor?: string;
  size?: number;
  children?: ReactNode;
}

// Export pattern names for easy reference
export const PATTERN_TYPES = {
  OLIVE_BRANCH: 'olive-branch',
  LEFKARA: 'lefkara',
  WAVES: 'waves',
  DOTTED: 'dotted',
};

// Export default sizing for patterns
export const PATTERN_SIZES = {
  SMALL: 24,
  MEDIUM: 32,
  LARGE: 48,
  XLARGE: 64,
};