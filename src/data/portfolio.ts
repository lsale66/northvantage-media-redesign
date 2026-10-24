/** Portfolio photos in /public/images/photos — shared by the home page grid and the /card/ gallery. */
export const photos = [
  { file: '001-twilight (Large).jpg', alt: 'Twilight exterior photograph of a Calgary listing' },
  { file: '003-DJI_0230 (Large).jpg', alt: 'Aerial drone photograph of a Calgary property' },
  { file: '011-DSC01084 (Large).jpg', alt: 'Interior photograph of a Calgary listing' },
  { file: '052-DJI_0256_pinned (Large).jpg', alt: 'Aerial drone photograph of a Calgary property' },
  { file: '2-summer-Large.jpg', alt: 'Exterior photograph of a Calgary listing' },
  { file: 'DJI_0430_1_2_3_4-Large.jpg', alt: 'Aerial drone photograph of a Calgary property' },
  { file: 'DSC03866-dh-Edit-Large.jpg', alt: 'Interior photograph of a Calgary listing' },
  { file: 'DSC04417_8_9-SM.jpg', alt: 'Interior photograph of a Calgary listing' },
  { file: 'DSC04512-dh-Large.jpg', alt: 'Interior photograph of a Calgary listing' },
  { file: 'DSC05410-Large.jpg', alt: 'Interior photograph of a Calgary listing' },
  { file: 'DSC05800-Large.jpg', alt: 'Interior photograph of a Calgary listing' },
  { file: 'DSC06181-Large.jpg', alt: 'Interior photograph of a Calgary listing' },
];

/**
 * The /work/ hub's Photography grid: exterior, then drone, then interior.
 * Same files as `photos` except the last, which is hub-only. Each file also
 * needs a copy in src/assets/portfolio/ for its thumbnail.
 */
const byFile = (file: string) => photos.find((p) => p.file === file)!;
export const workPhotos = [
  byFile('001-twilight (Large).jpg'),
  byFile('003-DJI_0230 (Large).jpg'),
  byFile('052-DJI_0256_pinned (Large).jpg'),
  byFile('2-summer-Large.jpg'),
  byFile('DJI_0430_1_2_3_4-Large.jpg'),
  byFile('011-DSC01084 (Large).jpg'),
  byFile('DSC03866-dh-Edit-Large.jpg'),
  byFile('DSC04417_8_9-SM.jpg'),
  byFile('DSC04512-dh-Large.jpg'),
  byFile('DSC05410-Large.jpg'),
  byFile('DSC05800-Large.jpg'),
  { file: '037-DSC02730-edit.jpg', alt: 'Interior photograph of a Calgary listing' },
];

export const photoSrc = (file: string) => `/images/photos/${encodeURIComponent(file)}`;
