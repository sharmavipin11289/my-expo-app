import * as Linking from 'expo-linking';

export async function openSystemUrl(url: string): Promise<void> {
  const canOpen = await Linking.canOpenURL(url);
  if (!canOpen) {
    return;
  }
  await Linking.openURL(url);
}
