// Spacing system for the app, based on 8px grid

export const spacing = {
  xs: 4,    // Extra small: 4px
  s: 8,     // Small: 8px
  m: 16,    // Medium: 16px
  l: 24,    // Large: 24px
  xl: 32,   // Extra large: 32px
  xxl: 48,  // 2x Extra large: 48px
  xxxl: 64, // 3x Extra large: 64px
  
  // Helper function to get multiples of base unit (4px)
  unit: (multiplier: number): number => multiplier * 4,
};

// Border radius values
export const borderRadius = {
  xs: 4,    // Extra small corners
  s: 8,     // Small corners
  m: 12,    // Medium corners
  l: 16,    // Large corners
  xl: 24,   // Extra large corners
  xxl: 32,  // 2x Extra large corners
  round: 9999, // Fully rounded (for circular elements)
};