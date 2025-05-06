import { colors } from './colors';
import { spacing, borderRadius } from './spacing';
import { typography, fontFamily } from './typography';

export const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  fontFamily,
};

export type Theme = typeof theme;
export { colors, spacing, borderRadius, typography, fontFamily };