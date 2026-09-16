import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { PROFILE } from '@/constants/profile';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { IntroSection } from './intro-section';

export function EducationSection() {
  const theme = useTheme();

  return (
    <IntroSection title="Education">
      {PROFILE.education.map((item, index) => (
        <View key={item.id} style={styles.row}>
          {index > 0 ? <View style={[styles.separator, { backgroundColor: theme.separator }]} /> : null}
          <ThemedText type="default" selectable>
            {item.degree}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary" selectable>
            {item.school}
          </ThemedText>
          <ThemedText type="caption" themeColor="accent">
            Grade: {item.grade}
          </ThemedText>
        </View>
      ))}
    </IntroSection>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: Spacing.one,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginBottom: Spacing.three,
  },
});
