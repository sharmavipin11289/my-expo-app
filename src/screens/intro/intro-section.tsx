import { type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Radius, Spacing } from '@/constants/theme';

interface Props {
  title: string;
  children: ReactNode;
}

export function IntroSection({ title, children }: Props) {
  return (
    <View style={styles.section}>
      <ThemedText type="smallBold" themeColor="textSecondary" style={styles.label}>
        {title}
      </ThemedText>
      <ThemedView type="backgroundElement" style={styles.body}>
        {children}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.two,
  },
  label: {
    paddingHorizontal: Spacing.one,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  body: {
    borderRadius: Radius.lg,
    borderCurve: 'continuous',
    overflow: 'hidden',
    padding: Spacing.three,
    gap: Spacing.three,
  },
});
