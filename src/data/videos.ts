// Portfolio videos, shared by the videography page and the /work/ hub.
// Each item takes a `youtubeId` or a Bunny embed `src`; an item with neither
// renders as a placeholder tile. New Bunny videos also need their thumbnail
// filename in BunnyVideo.astro.

export interface PortfolioVideo {
  label: string;
  src?: string;
  youtubeId?: string;
}

export const reels: PortfolioVideo[] = [
  { label: 'Property Reel 01', src: 'https://iframe.mediadelivery.net/embed/469110/a398883b-93b3-4fc5-a769-2f53e5a536a7?autoplay=true&loop=false&muted=true&preload=false&responsive=true' },
  { label: 'Property Reel 02', src: 'https://iframe.mediadelivery.net/embed/469110/d06939c7-91da-484b-80ae-00ee67190b93?autoplay=true&loop=false&muted=true&preload=false&responsive=true' },
  { label: 'Property Reel 03', src: 'https://iframe.mediadelivery.net/embed/469110/fa91653c-8e19-4a2c-98ef-5fe4e21adec0?autoplay=true&loop=false&muted=true&preload=false&responsive=true' },
  { label: 'Property Reel 04', src: 'https://iframe.mediadelivery.net/embed/469110/cd183067-e645-4ff6-9cc2-313b89f6e251?autoplay=true&loop=false&muted=true&preload=false&responsive=true' },
  { label: 'Property Reel 05', src: 'https://iframe.mediadelivery.net/embed/469110/415bc110-011a-46c5-8cb8-daaac92ab4e9?autoplay=true&loop=false&muted=true&preload=false&responsive=true' },
  { label: 'Property Reel 06', src: 'https://iframe.mediadelivery.net/embed/469110/5e262981-3ef2-4357-ac91-73686c3c08f2?autoplay=true&loop=false&muted=true&preload=false&responsive=true' },
];

export const cinematic: PortfolioVideo[] = [
  { label: 'Greenwich — Cinematic Showcase', youtubeId: 'gyvaricJimI' },
  { label: 'Cinematic Showcase 02', youtubeId: 'tZ1Q5klP3Zo' },
];
