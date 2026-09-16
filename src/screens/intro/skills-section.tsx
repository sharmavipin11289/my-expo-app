import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PROFILE } from '@/constants/profile';
import { Radius, Spacing } from '@/constants/theme';

import { IntroSection } from './intro-section';

export function SkillsSection() {
  return (
    <IntroSection title="Skills">
      {PROFILE.skills.map((group) => (
        <View key={group.id} style={styles.group}>
          <ThemedText type="smallBold">{group.title}</ThemedText>
          <View style={styles.chips}>
            {group.items.map((skill) => (
              <ThemedView key={skill} type="chip" style={styles.chip}>
                <ThemedText type="caption">{skill}</ThemedText>
              </ThemedView>
            ))}
          </View>
        </View>
      ))}
    </IntroSection>
  );
}

const styles = StyleSheet.create({
  group: {
    gap: Spacing.two,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.full,
  },
});
