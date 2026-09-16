import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { PROFILE } from '@/constants/profile';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function ProfileHero() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/profile.png')}
        style={styles.photo}
        contentFit="cover"
        accessibilityLabel={`${PROFILE.name} profile photo`}
      />
      <ThemedText type="subtitle" selectable>
        {PROFILE.name}
      </ThemedText>
      <ThemedText type="default" themeColor="accent" style={styles.title}>
        {PROFILE.title}
      </ThemedText>
      <View style={styles.locationRow}>
        <SymbolView
          name={{ ios: 'location.fill', android: 'location_on', web: 'location_on' }}
          size={14}
          tintColor={theme.textSecondary}
        />
        <ThemedText type="small" themeColor="textSecondary" selectable>
          {PROFILE.location}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: Spacing.two,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.three,
  },
  photo: {
    width: 128,
    height: 128,
    borderRadius: Radius.full,
    marginBottom: Spacing.two,
  },
  title: {
    textAlign: 'center',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
});
