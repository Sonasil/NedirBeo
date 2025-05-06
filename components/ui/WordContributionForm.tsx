import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ScrollView, 
  TouchableOpacity,
  Platform
} from 'react-native';
import { Plus, X, Upload, Check } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography, fontFamily } from '../../theme/typography';
import { Button } from './Button';
import { WordAddForm } from '../../types/word';

interface WordContributionFormProps {
  onSubmit: (formData: WordAddForm) => void;
  onCancel: () => void;
}

export const WordContributionForm: React.FC<WordContributionFormProps> = ({
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState<WordAddForm>({
    word: '',
    meaning: '',
    example: '',
    pronunciation: '',
    partOfSpeech: '',
    etymology: '',
    tags: [],
  });
  
  const [tagInput, setTagInput] = useState('');
  const [uploadStatus, setUploadStatus] = useState({
    cyprus: false,
    turkey: false,
  });
  
  const updateField = (field: keyof WordAddForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const addTag = () => {
    if (tagInput.trim() !== '' && !formData.tags?.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()]
      }));
      setTagInput('');
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove)
    }));
  };
  
  const handleSubmit = () => {
    onSubmit(formData);
  };
  
  const simulateAudioUpload = (type: 'cyprus' | 'turkey') => {
    // Simulate uploading audio
    setUploadStatus(prev => ({ ...prev, [type]: true }));
    
    // In a real app, you would actually upload the file to a server
    // and get back a URL to store in formData
    
    const mockUrl = `https://example.com/audio/${formData.word}_${type}.mp3`;
    
    if (type === 'cyprus') {
      setFormData(prev => ({ ...prev, cyprusAudio: mockUrl }));
    } else {
      setFormData(prev => ({ ...prev, turkeyAudio: mockUrl }));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yeni Kelime Ekle</Text>
        <TouchableOpacity onPress={onCancel} hitSlop={8}>
          <X size={24} color={colors.neutral[600]} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Kelime</Text>
        <TextInput
          style={styles.input}
          value={formData.word}
          onChangeText={(text) => updateField('word', text)}
          placeholder="Kelimeyi girin"
          placeholderTextColor={colors.neutral[400]}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Anlamı</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={formData.meaning}
          onChangeText={(text) => updateField('meaning', text)}
          placeholder="Kelimenin anlamını girin"
          placeholderTextColor={colors.neutral[400]}
          multiline
          numberOfLines={Platform.OS === 'ios' ? undefined : 4}
          textAlignVertical="top"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Örnek Cümle</Text>
        <TextInput
          style={styles.input}
          value={formData.example}
          onChangeText={(text) => updateField('example', text)}
          placeholder="Örnek cümle girin"
          placeholderTextColor={colors.neutral[400]}
        />
      </View>
      
      <View style={styles.row}>
        <View style={[styles.formGroup, { flex: 1 }]}>
          <Text style={styles.label}>Okunuş</Text>
          <TextInput
            style={styles.input}
            value={formData.pronunciation}
            onChangeText={(text) => updateField('pronunciation', text)}
            placeholder="Okunuşu girin"
            placeholderTextColor={colors.neutral[400]}
          />
        </View>
        
        <View style={[styles.formGroup, { flex: 1 }]}>
          <Text style={styles.label}>Söz Türü</Text>
          <TextInput
            style={styles.input}
            value={formData.partOfSpeech}
            onChangeText={(text) => updateField('partOfSpeech', text)}
            placeholder="İsim, fiil, sıfat, vb."
            placeholderTextColor={colors.neutral[400]}
          />
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Etimoloji</Text>
        <TextInput
          style={styles.input}
          value={formData.etymology}
          onChangeText={(text) => updateField('etymology', text)}
          placeholder="Kelimenin kökeni (isteğe bağlı)"
          placeholderTextColor={colors.neutral[400]}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Etiketler</Text>
        <View style={styles.tagInputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={tagInput}
            onChangeText={setTagInput}
            placeholder="Etiket ekle ve + butonuna bas"
            placeholderTextColor={colors.neutral[400]}
            onSubmitEditing={addTag}
          />
          <TouchableOpacity 
            style={styles.addTagButton}
            onPress={addTag}
          >
            <Plus size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
        
        {formData.tags && formData.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {formData.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
                <TouchableOpacity 
                  onPress={() => removeTag(tag)}
                  hitSlop={8}
                >
                  <X size={12} color={colors.primary[700]} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Ses Kayıtları</Text>
        
        <View style={styles.audioUploads}>
          <View style={styles.audioUpload}>
            <Text style={styles.audioLabel}>Kıbrıs Türkçesi</Text>
            <Button
              variant={uploadStatus.cyprus ? "primary" : "outline"}
              label={uploadStatus.cyprus ? "Yüklendi" : "Ses Yükle"}
              icon={uploadStatus.cyprus ? 
                <Check size={18} color={colors.white} /> : 
                <Upload size={18} color={colors.primary[500]} />
              }
              onPress={() => simulateAudioUpload('cyprus')}
            />
          </View>
          
          <View style={styles.audioUpload}>
            <Text style={styles.audioLabel}>Türkiye Türkçesi</Text>
            <Button
              variant={uploadStatus.turkey ? "primary" : "outline"}
              label={uploadStatus.turkey ? "Yüklendi" : "Ses Yükle"}
              icon={uploadStatus.turkey ? 
                <Check size={18} color={colors.white} /> : 
                <Upload size={18} color={colors.primary[500]} />
              }
              onPress={() => simulateAudioUpload('turkey')}
            />
          </View>
        </View>
      </View>
      
      <View style={styles.formActions}>
        <Button
          variant="ghost"
          label="İptal"
          onPress={onCancel}
          buttonStyle={{ marginRight: spacing.m, flex: 1 }}
        />
        <Button
          variant="primary"
          label="Gönder"
          onPress={handleSubmit}
          buttonStyle={{ flex: 1 }}
          disabled={!formData.word || !formData.meaning}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.l,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.l,
  },
  title: {
    ...typography.headingMedium,
    color: colors.neutral[900],
  },
  formGroup: {
    marginBottom: spacing.m,
  },
  label: {
    ...typography.bodySmallMedium,
    color: colors.neutral[700],
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: borderRadius.m,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.s,
    fontFamily: fontFamily.sansRegular,
    fontSize: 16,
    color: colors.neutral[900],
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: spacing.m,
  },
  tagInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
  },
  addTagButton: {
    backgroundColor: colors.primary[500],
    width: 40,
    height: 40,
    borderRadius: borderRadius.s,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.s,
    gap: spacing.xs,
  },
  tag: {
    backgroundColor: colors.primary[100],
    paddingHorizontal: spacing.s,
    paddingVertical: 4,
    borderRadius: borderRadius.s,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  tagText: {
    ...typography.caption,
    color: colors.primary[700],
  },
  audioUploads: {
    flexDirection: 'row',
    gap: spacing.l,
  },
  audioUpload: {
    flex: 1,
  },
  audioLabel: {
    ...typography.captionMedium,
    color: colors.neutral[700],
    marginBottom: spacing.xs,
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: spacing.l,
  },
});