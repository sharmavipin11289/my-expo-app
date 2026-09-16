import { Platform, ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { MaxContentWidth, Spacing, WebTabOffset } from '@/constants/theme';
import { PROFILE } from '@/constants/profile';
import { useTheme } from '@/hooks/use-theme';

import { ContactSection } from './contact-section';
import { EducationSection } from './education-section';
import { ExperienceSection } from './experience-section';
import { ProfileHero } from './profile-hero';
import { SkillsSection } from './skills-section';

export function IntroScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}>
      <ProfileHero />
      <ThemedText type="small" themeColor="textSecondary" selectable style={styles.summary}>
        {PROFILE.summary}
      </ThemedText>
      <ContactSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    maxWidth: MaxContentWidth,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.six,
    gap: Spacing.four,
    ...(Platform.OS === 'web' ? { paddingTop: WebTabOffset } : null),
  },
  summary: {
    lineHeight: 22,
  },
});
