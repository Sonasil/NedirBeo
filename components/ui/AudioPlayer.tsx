import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface AudioPlayerProps {
  audioUrl: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUrl,
  variant = 'primary',
  size = 'medium',
  label
}) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Determine sizes based on the size prop
  const buttonSize = size === 'small' ? 32 : size === 'medium' ? 40 : 48;
  const iconSize = size === 'small' ? 16 : size === 'medium' ? 20 : 24;

  // Determine colors based on variant
  const bgColor = variant === 'primary' ? colors.primary[500] : colors.secondary[500];
  const iconColor = colors.white;

  async function playSound() {
    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          if (status.isPlaying) {
            await sound.pauseAsync();
            setIsPlaying(false);
          } else {
            await sound.playAsync();
            setIsPlaying(true);
          }
        }
      } else {
        setIsLoading(true);
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: audioUrl },
          { shouldPlay: true, isMuted }
        );
        
        setSound(newSound);
        setIsPlaying(true);
        
        // Update playing status when playback finishes
        newSound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
          if (status.isLoaded && status.didJustFinish) {
            setIsPlaying(false);
          }
        });
        
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error playing sound:', error);
      setIsLoading(false);
    }
  }

  async function toggleMute() {
    if (sound) {
      await sound.setIsMutedAsync(!isMuted);
      setIsMuted(!isMuted);
    } else {
      setIsMuted(!isMuted);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.playButton, 
          { backgroundColor: bgColor, width: buttonSize, height: buttonSize }
        ]}
        onPress={playSound}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color={iconColor} size="small" />
        ) : isPlaying ? (
          <Pause color={iconColor} size={iconSize} />
        ) : (
          <Play color={iconColor} size={iconSize} />
        )}
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.volumeButton} 
        onPress={toggleMute}
      >
        {isMuted ? (
          <VolumeX color={colors.neutral[600]} size={iconSize - 2} />
        ) : (
          <Volume2 color={colors.neutral[600]} size={iconSize - 2} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  playButton: {
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  volumeButton: {
    padding: 4,
  },
});