import { Platform, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { PORTFOLIO_LINKS } from '@/constants/portfolio';
import { PortfolioGrid, Spacing, WebTabOffset } from '@/constants/theme';
import { getPortfolioGrid } from '@/hooks/use-portfolio-grid';
import { useTheme } from '@/hooks/use-theme';

import { PortfolioCard } from './portfolio-card';

export function PortfolioScreen() {
  const theme = useTheme();
  const { width: windowWidth } = useWindowDimensions();
  const isWeb = process.env.EXPO_OS === 'web';
  const { cardWidth } = getPortfolioGrid(Math.max(windowWidth - Spacing.three * 2, 0));

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}>
      {Platform.OS === 'web' ? (
        <ThemedText type="headline" style={styles.webTitle}>
          Portfolio
        </ThemedText>
      ) : null}
      <View
        style={[
          styles.grid,
          isWeb
            ? {
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fill, minmax(${PortfolioGrid.minCardWidth}px, 1fr))`,
              }
            : styles.gridNative,
        ]}>
        {PORTFOLIO_LINKS.map((item) => (
          <PortfolioCard key={item.id} item={item} width={isWeb ? undefined : cardWidth} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    width: '100%',
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.six,
    ...(Platform.OS === 'web' ? { paddingTop: WebTabOffset } : null),
  },
  grid: {
    width: '100%',
    gap: Spacing.three,
  },
  gridNative: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  webTitle: {
    paddingBottom: Spacing.three,
  },
});
