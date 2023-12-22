// Default DIFF Pixel
export const PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO = 0.01;
// We wait max for .5 second for mounting
export const PLAYWRIGHT_DEFAULT_TIMEOUT = 100;
// We check difference > 4px
export const PLAYWRIGHT_MAX_DIFF_PIXEL = 4;
// Acceptable perceived color difference between the same pixel in compared images, ranging from 0 (strict) and 1 (lax). "pixelmatch" comparator computes color difference in YIQ color space
export const PLAYWRIGHT_YIQ_PIXELMATCH_COLOR = 0.1;
