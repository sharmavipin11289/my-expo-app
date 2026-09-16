import { Stack } from 'expo-router/stack';

import { Colors } from '@/constants/theme';

const colors = Colors.dark;

export default function PortfolioLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitleEnabled: true,
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.background },
        headerLargeStyle: { backgroundColor: colors.background },
        headerTitleStyle: { color: colors.text },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.background },
        headerShown: process.env.EXPO_OS !== 'web',
      }}>
      <Stack.Screen name="index" options={{ title: 'Portfolio' }} />
    </Stack>
  );
}
