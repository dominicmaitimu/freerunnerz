import { useMedia } from 'react-use';

type MediaQuery =
  | 'isDesktop'
  | 'isDesktopLarge'
  | 'isMobile'
  | 'isMobileLandscape'
  | 'isMobileLarge'
  | 'isDesktopLarge'
  | 'isMobileSmall'
  | 'isTabletLandscape'
  | 'isTabletPortrait'
  | 'isTouchDevice';

export const breakPoints = {
  isDesktop: '(min-width: 993px)',
  isDesktopLarge: '(min-width: 1680px)',
  isMobile: '(max-width: 767px)',
  isMobileLandscape: '(max-width: 480px)',
  isMobileLarge: '(min-width: 361px) and (max-width: 767px)',
  isMobileSmall: '(max-width: 360px)',
  isTabletLandscape: '(max-width: 992px)',
  isTabletLarge: '(min-width: 481px) and (max-width: 992px)',
  isTabletPortrait: '(min-width: 768px)',
};

export const useMediaQuery = (query: MediaQuery = 'isDesktop'): boolean => {
  const currentQuery =
    query === 'isTouchDevice' ? '(hover: none)' : breakPoints[query];
  return useMedia(currentQuery);
};
