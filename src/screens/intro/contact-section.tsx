import { SymbolView, type SymbolViewProps } from 'expo-symbols';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { PROFILE } from '@/constants/profile';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { openSystemUrl } from '@/services/openLink';

import { IntroSection } from './intro-section';

interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: SymbolViewProps['name'];
}

const CONTACTS: ContactItem[] = [
  {
    id: 'email',
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: { ios: 'envelope.fill', android: 'mail', web: 'mail' },
  },
  {
    id: 'phone',
    label: 'Phone',
    value: PROFILE.phone,
    href: PROFILE.phoneHref,
    icon: { ios: 'phone.fill', android: 'call', web: 'call' },
  },
];

export function ContactSection() {
  const theme = useTheme();

  return (
    <IntroSection title="Contact">
      {CONTACTS.map((item, index) => (
        <View key={item.id}>
          {index > 0 ? <View style={[styles.separator, { backgroundColor: theme.separator }]} /> : null}
          <Pressable
            accessibilityRole="link"
            accessibilityLabel={`${item.label}: ${item.value}`}
            onPress={() => {
              void openSystemUrl(item.href);
            }}
            style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
            <SymbolView name={item.icon} size={18} tintColor={theme.accent} />
            <View style={styles.copy}>
              <ThemedText type="caption" themeColor="textSecondary">
                {item.label}
              </ThemedText>
              <ThemedText type="default" selectable>
                {item.value}
              </ThemedText>
            </View>
          </Pressable>
        </View>
      ))}
    </IntroSection>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.one,
  },
  copy: {
    flex: 1,
    gap: Spacing.half,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginVertical: Spacing.two,
  },
  pressed: {
    opacity: 0.7,
  },
});
