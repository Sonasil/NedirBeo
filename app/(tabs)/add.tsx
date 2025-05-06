import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Plus, Mic, Upload, Info } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { Button } from '../../components/ui/Button';
import { WordContributionForm } from '../../components/ui/WordContributionForm';
import { WordAddForm } from '../../types/word';

export default function AddScreen() {
  const [showForm, setShowForm] = useState(false);
  
  const handleAddWord = () => {
    setShowForm(true);
  };
  
  const handleFormSubmit = (formData: WordAddForm) => {
    console.log('Form submitted with data:', formData);
    // In a real app, you would save this data to your backend
    setShowForm(false);
    
    // Show success message or navigate back
  };
  
  const handleFormCancel = () => {
    setShowForm(false);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sözlüğe Katkıda Bulun</Text>
      </View>
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {!showForm ? (
          <>
            <View style={styles.infoCard}>
              <View style={styles.infoIconContainer}>
                <Info size={24} color={colors.primary[500]} />
              </View>
              <Text style={styles.infoText}>
                Kıbrıs Türk dilini korumak için her katkı önemlidir. Bildiğiniz kelimeleri, deyimleri ve kullanımları ekleyerek dilin yaşamasına yardımcı olabilirsiniz.
              </Text>
            </View>
            
            <View style={styles.contributionCards}>
              <TouchableOpacity 
                style={styles.contributionCard}
                onPress={handleAddWord}
              >
                <View style={[styles.cardIcon, { backgroundColor: colors.primary[100] }]}>
                  <Plus size={28} color={colors.primary[500]} />
                </View>
                <Text style={styles.cardTitle}>Kelime Ekle</Text>
                <Text style={styles.cardDescription}>
                  Bildiğiniz Kıbrıs Türkçesi kelimeleri, anlamları ve örnekleriyle ekleyin.
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.contributionCard}>
                <View style={[styles.cardIcon, { backgroundColor: colors.secondary[100] }]}>
                  <Mic size={28} color={colors.secondary[500]} />
                </View>
                <Text style={styles.cardTitle}>Telaffuz Ekle</Text>
                <Text style={styles.cardDescription}>
                  Mevcut kelimelere doğru telaffuz kayıtları ekleyerek katkıda bulunun.
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.contributionCard}>
                <View style={[styles.cardIcon, { backgroundColor: colors.accent[100] }]}>
                  <Upload size={28} color={colors.accent[500]} />
                </View>
                <Text style={styles.cardTitle}>Görsel Ekle</Text>
                <Text style={styles.cardDescription}>
                  Kültürel öğeleri temsil eden görseller ekleyerek sözlüğü zenginleştirin.
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.recentContributions}>
              <Text style={styles.sectionTitle}>Son Katkılarınız</Text>
              
              <View style={styles.contributionItem}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/150?img=1' }} 
                  style={styles.contributorAvatar}
                />
                <View style={styles.contributionDetails}>
                  <Text style={styles.contributionWord}>Haşhaş</Text>
                  <Text style={styles.contributionTimestamp}>10 Eylül 2023</Text>
                </View>
                <View style={styles.contributionStatus}>
                  <View style={styles.statusIndicator} />
                  <Text style={styles.statusText}>Onaylandı</Text>
                </View>
              </View>
              
              <View style={styles.contributionItem}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/150?img=1' }} 
                  style={styles.contributorAvatar}
                />
                <View style={styles.contributionDetails}>
                  <Text style={styles.contributionWord}>Ficimiz</Text>
                  <Text style={styles.contributionTimestamp}>27 Eylül 2023</Text>
                </View>
                <View style={styles.contributionStatus}>
                  <View style={[styles.statusIndicator, styles.pendingIndicator]} />
                  <Text style={styles.pendingText}>İnceleniyor</Text>
                </View>
              </View>
              
              <Button 
                label="Tüm Katkılarımı Gör"
                variant="outline"
                buttonStyle={styles.viewAllButton}
              />
            </View>
          </>
        ) : (
          <WordContributionForm 
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        )}
      </ScrollView>
      
      {!showForm && (
        <View style={styles.floatingButtonContainer}>
          <Button 
            label="Kelime Ekle"
            icon={<Plus size={20} color={colors.white} />}
            onPress={handleAddWord}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[100],
  },
  header: {
    paddingTop: 60,
    paddingBottom: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    ...typography.displaySmall,
    color: colors.primary[500],
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.l,
    paddingBottom: 100,
  },
  infoCard: {
    backgroundColor: colors.primary[50],
    borderRadius: borderRadius.l,
    padding: spacing.l,
    marginBottom: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.s,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.m,
  },
  infoText: {
    ...typography.bodySmall,
    color: colors.primary[700],
    flex: 1,
  },
  contributionCards: {
    marginBottom: spacing.xl,
  },
  contributionCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.l,
    padding: spacing.l,
    marginBottom: spacing.m,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.m,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  cardTitle: {
    ...typography.headingMedium,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
  },
  cardDescription: {
    ...typography.bodySmall,
    color: colors.neutral[700],
  },
  recentContributions: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.l,
    padding: spacing.l,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    ...typography.headingSmall,
    color: colors.neutral[900],
    marginBottom: spacing.m,
  },
  contributionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  contributorAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: spacing.m,
  },
  contributionDetails: {
    flex: 1,
  },
  contributionWord: {
    ...typography.bodyMediumMedium,
    color: colors.neutral[900],
  },
  contributionTimestamp: {
    ...typography.caption,
    color: colors.neutral[600],
  },
  contributionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success[500],
    marginRight: spacing.xs,
  },
  pendingIndicator: {
    backgroundColor: colors.warning[500],
  },
  statusText: {
    ...typography.captionMedium,
    color: colors.success[700],
  },
  pendingText: {
    ...typography.captionMedium,
    color: colors.warning[700],
  },
  viewAllButton: {
    marginTop: spacing.l,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: spacing.xl,
    right: spacing.l,
    left: spacing.l,
  },
});