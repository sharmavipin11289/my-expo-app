import { useState } from 'react';
import { Image } from 'expo-image';
import { type Href } from 'expo-router';
import { Pressable, StyleSheet, View, type LayoutChangeEvent } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { type PortfolioLink } from '@/constants/portfolio';
import { PortfolioGrid, Radius, Shadows, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface Props {
  item: PortfolioLink;
  width?: number;
}

function getLinkLabel(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (host === 'apps.apple.com') {
      return 'App Store';
    }
    return host;
  } catch {
    return url;
  }
}

export function PortfolioCard({ item, width }: Props) {
  const theme = useTheme();
  const initial = item.title.charAt(0).toUpperCase();
  const [tileWidth, setTileWidth] = useState(0);
  const iconSize = Math.max(tileWidth - PortfolioGrid.iconInset * 2, 0);

  const onTileLayout = (event: LayoutChangeEvent): void => {
    const nextWidth = Math.floor(event.nativeEvent.layout.width);
    if (nextWidth > 0 && nextWidth !== tileWidth) {
      setTileWidth(nextWidth);
    }
  };

  return (
    <View
      style={[styles.tile, width != null ? { width, maxWidth: width, minWidth: width } : null]}
      onLayout={onTileLayout}>
      <ExternalLink href={item.url as Href & string} asChild>
        <Pressable
          accessibilityRole="link"
          accessibilityLabel={`${item.title}, opens ${getLinkLabel(item.url)}`}
          style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}>
          <ThemedView type="backgroundElement" style={styles.card}>
            <View
              style={[
                styles.previewWrap,
                { backgroundColor: theme.chip, aspectRatio: 1 },
              ]}>
              {tileWidth > 0 && item.image ? (
                <Image
                  source={item.image}
                  style={{ width: iconSize, height: iconSize, borderRadius: Radius.lg }}
                  contentFit="cover"
                />
              ) : null}
              {tileWidth > 0 && !item.image ? (
                <View
                  style={[
                    styles.fallback,
                    {
                      width: iconSize,
                      height: iconSize,
                      backgroundColor: theme.backgroundSelected,
                    },
                  ]}>
                  <ThemedText type="headline">{initial}</ThemedText>
                </View>
              ) : null}
            </View>
            <View style={styles.meta}>
              <ThemedText type="smallBold" numberOfLines={1}>
                {item.title}
              </ThemedText>
              <ThemedText type="caption" themeColor="textSecondary" numberOfLines={2}>
                {item.description}
              </ThemedText>
              <ThemedText type="caption" themeColor="accent" numberOfLines={1}>
                {getLinkLabel(item.url)}
              </ThemedText>
            </View>
          </ThemedView>
        </Pressable>
      </ExternalLink>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: '100%',
    minWidth: 0,
    overflow: 'hidden',
  },
  pressable: {
    width: '100%',
  },
  pressed: {
    opacity: 0.85,
  },
  card: {
    borderRadius: Radius.lg,
    borderCurve: 'continuous',
    overflow: 'hidden',
    boxShadow: Shadows.card,
  },
  previewWrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.lg,
    borderCurve: 'continuous',
  },
  meta: {
    height: PortfolioGrid.metaHeight,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
    gap: Spacing.one,
    justifyContent: 'center',
  },
});
