import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { PROFILE } from '@/constants/profile';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { IntroSection } from './intro-section';

export function ExperienceSection() {
  const theme = useTheme();

  return (
    <IntroSection title="Experience">
      {PROFILE.experience.map((job, index) => (
        <View key={job.id} style={styles.job}>
          {index > 0 ? <View style={[styles.separator, { backgroundColor: theme.separator }]} /> : null}
          <ThemedText type="default">{job.role}</ThemedText>
          <ThemedText type="small" themeColor="accent">
            {job.company}
          </ThemedText>
          <ThemedText type="caption" themeColor="textSecondary">
            {job.period} · {job.location}
          </ThemedText>
          <View style={styles.highlights}>
            {job.highlights.map((highlight) => (
              <ThemedText key={highlight} type="small" themeColor="textSecondary" selectable>
                {highlight}
              </ThemedText>
            ))}
          </View>
        </View>
      ))}
    </IntroSection>
  );
}

const styles = StyleSheet.create({
  job: {
    gap: Spacing.one,
  },
  highlights: {
    gap: Spacing.one,
    paddingTop: Spacing.one,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginBottom: Spacing.three,
  },
});
