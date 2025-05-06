import React from 'react';
import {
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  TouchableOpacityProps,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../../theme/colors';
import { borderRadius, spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

// Button variants
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  isLoading = false,
  icon,
  iconPosition = 'left',
  disabled,
  buttonStyle,
  textStyle,
  ...props
}) => {
  // Determine styles based on variant and size
  const buttonStyles: ViewStyle[] = [
    styles.button,
    styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}`],
    styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    disabled ? styles.buttonDisabled : {},
    iconPosition === 'right' ? { flexDirection: 'row-reverse' } : {},
    buttonStyle || {},
  ];

  const textStyles: TextStyle[] = [
    styles.text,
    styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}`],
    styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    disabled ? styles.textDisabled : {},
    textStyle || {},
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? colors.white : colors.primary[500]} 
          size="small" 
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && <>{icon}</>}
          <Text style={textStyles}>{label}</Text>
          {icon && iconPosition === 'right' && <>{icon}</>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.m,
    gap: spacing.s,
  },
  buttonSmall: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.m,
    minHeight: 36,
  },
  buttonMedium: {
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.l,
    minHeight: 44,
  },
  buttonLarge: {
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.xl,
    minHeight: 52,
  },
  buttonPrimary: {
    backgroundColor: colors.primary[500],
  },
  buttonSecondary: {
    backgroundColor: colors.secondary[500],
  },
  buttonTertiary: {
    backgroundColor: colors.accent[500],
  },
  buttonOutline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.primary[500],
  },
  buttonGhost: {
    backgroundColor: colors.transparent,
  },
  buttonDisabled: {
    backgroundColor: colors.neutral[300],
    borderColor: colors.neutral[300],
  },
  text: {
    ...typography.button,
    textAlign: 'center',
  },
  textSmall: {
    ...typography.buttonSmall,
  },
  textMedium: {
    ...typography.button,
  },
  textLarge: {
    ...typography.button,
    fontSize: 18,
  },
  textPrimary: {
    color: colors.white,
  },
  textSecondary: {
    color: colors.white,
  },
  textTertiary: {
    color: colors.white,
  },
  textOutline: {
    color: colors.primary[500],
  },
  textGhost: {
    color: colors.primary[500],
  },
  textDisabled: {
    color: colors.neutral[600],
  },
});