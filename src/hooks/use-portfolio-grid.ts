import { PortfolioGrid, Spacing } from '@/constants/theme';

const GAP = Spacing.three;

export function getPortfolioGrid(availableWidth: number): {
  numColumns: number;
  cardWidth: number;
  gap: number;
} {
  const usableWidth = Math.max(availableWidth - Spacing.two, 0);
  if (usableWidth <= 0) {
    return { numColumns: PortfolioGrid.minColumns, cardWidth: 0, gap: GAP };
  }

  const fittedColumns = Math.floor((usableWidth + GAP) / (PortfolioGrid.minCardWidth + GAP));
  const numColumns =
    usableWidth < PortfolioGrid.compactMaxWidth
      ? PortfolioGrid.minColumns
      : Math.max(PortfolioGrid.minColumns, fittedColumns);
  const cardWidth = Math.floor((usableWidth - GAP * (numColumns - 1)) / numColumns);

  return { numColumns, cardWidth, gap: GAP };
}
