// Case studies for /work/<slug>/ — one real listing laid out deliverable by
// deliverable, so agents can see exactly what a package gets them.
//
// Image files live in src/assets/work/<slug>/{photos,drone,plans,website}/ and
// are referenced here by filename. Add a listing by adding an entry + its folder.

export interface WorkPhoto {
  file: string;
  caption: string;
  /** Spans both columns of the photo grid. */
  wide?: boolean;
}

export interface WorkListing {
  slug: string;
  address: string;
  city: string;
  packageName: string;
  /** Matches the "From" price for this package on /pricing. */
  packageFrom: string;
  agent: { name: string; url: string };
  summary: string;
  /** Filename in photos/; also the social share image. */
  hero: string;
  // Every deliverable except photos is optional: leave it out and its section,
  // its row in the "what's included" list and its mention in the CTA all drop.
  /** Bunny embed URL (same format as the videography page) + a line on what this reel was. */
  reel?: { src: string; copy: string };
  /** Cinematic Property Showcase on YouTube. */
  youtubeId?: string;
  photos: WorkPhoto[];
  /** Listing-specific line added to the photos blurb (twilight, staging...). */
  photosNote?: string;
  drone?: WorkPhoto[];
  website?: { url: string; label: string; screenshot: string };
  floorplans?: { file: string; label: string }[];
  floorplanPdf?: string;
  iguide?: { embed: string; url: string };
}

export const work: WorkListing[] = [
  {
    slug: '34-monterra-link',
    address: '34 Monterra Link',
    city: 'Cochrane, Alberta',
    packageName: 'Luxury Package',
    packageFrom: '$999',
    agent: { name: 'Jennifer Kinch', url: 'https://jenniferkinch.com/' },
    summary:
      'A 2010 Astoria custom two-storey in Monterra on Cochrane Lake, backing onto a treed green space. Vaulted great room, chef’s kitchen, a finished lower level with a home theatre, and a heated triple garage. A home like this needs media that keeps up with it.',
    hero: '001-twilight.jpg',
    reel: {
      src: 'https://iframe.mediadelivery.net/embed/469110/fa91653c-8e19-4a2c-98ef-5fe4e21adec0?autoplay=true&loop=false&muted=true&preload=false&responsive=true',
      copy: 'A fast, vertical cut built to stop the scroll on Instagram, Facebook and TikTok. This one is property-only, with the agent’s name and brokerage built into the edit, so every view points back to them.',
    },
    youtubeId: '03e0BEo2s1c',
    photos: [
      { file: '001-twilight.jpg', caption: 'Front elevation at dusk', wide: true },
      { file: '002-DSC04251.jpg', caption: 'Front elevation, triple garage and curved drive', wide: true },
      { file: '003-DSC04247.jpg', caption: 'Front elevation, curved drive and mature spruce' },
      { file: '004-DSC04017.jpg', caption: 'Front entry' },
      { file: '005-DSC04023.jpg', caption: 'Vaulted living room open to kitchen and dining', wide: true },
      { file: '006-DSC03995.jpg', caption: 'Great room with vaulted ceiling and stone fireplace' },
      { file: '007-DSC03996.jpg', caption: 'Living room, gas fireplace and tall windows' },
      { file: '008-DSC04005.jpg', caption: 'Stone-surround gas fireplace' },
      { file: '009-DSC04074.jpg', caption: 'Living room and open staircase' },
      { file: '010-DSC04161.jpg', caption: 'Great room, kitchen and dining from the upper landing', wide: true },
      { file: '011-DSC04041.jpg', caption: 'Dining area with backyard windows' },
      { file: '012-DSC04029.jpg', caption: 'Open-concept kitchen, dining and great room' },
      { file: '013-DSC04049.jpg', caption: 'Kitchen island with granite counters and seating', wide: true },
      { file: '014-DSC04052.jpg', caption: 'Built-in microwave and glass-front cabinetry' },
      { file: '015-DSC04054.jpg', caption: 'Island sink and dishwasher, open to dining' },
      { file: '016-DSC04058.jpg', caption: 'Gas range and stainless hood' },
      { file: '017-DSC04038.jpg', caption: 'Kitchen island and dining table' },
      { file: '018-DSC04060.jpg', caption: 'Kitchen looking toward the great room' },
      { file: '019-DSC04062.jpg', caption: 'Island sightline to dining and fireplace' },
      { file: '020-DSC04073.jpg', caption: 'Dining room with yard views', wide: true },
      { file: '021-DSC04083.jpg', caption: 'Mudroom lockers and laundry' },
      { file: '022-DSC04089.jpg', caption: 'Laundry room with sink and upper cabinets' },
      { file: '023-DSC04014.jpg', caption: 'Main-floor office with built-in cabinetry' },
      { file: '024-DSC04020.jpg', caption: 'Powder room, granite vanity' },
      { file: '025-DSC04010.jpg', caption: 'Front foyer and staircase' },
      { file: '026-DSC04130.jpg', caption: 'Primary retreat' },
      { file: '027-DSC04131.jpg', caption: 'Primary retreat, ensuite beyond', wide: true },
      { file: '028-DSC04147.jpg', caption: 'Ensuite double vanity and soaker tub' },
      { file: '029-DSC04136.jpg', caption: 'Ensuite soaker tub and separate shower' },
      { file: '030-DSC04122.jpg', caption: 'Upstairs bedroom' },
      { file: '031-DSC04110.jpg', caption: 'Upstairs bedroom' },
      { file: '032-DSC04116.jpg', caption: 'Upstairs 4-piece bath' },
      { file: '033-DSC04170.jpg', caption: 'Home theatre, built-in media wall' },
      { file: '034-DSC04197-edit2-staged.jpg', caption: 'Home theatre, virtually staged', wide: true },
      { file: '036-DSC04179.jpg', caption: 'Lower-level wet bar and recreation area' },
      { file: '037-DSC04182.jpg', caption: 'Lower-level kitchenette' },
      { file: '039-DSC04209.jpg', caption: 'Wet bar with butcher-block counter and stainless fridge' },
      { file: '040-DSC04215.jpg', caption: 'Lower-level 4-piece bath, heated floors' },
      { file: '041-DSC04218.jpg', caption: 'Lower-level bedroom' },
      { file: '044-DSC04096.jpg', caption: 'Oversized heated triple garage' },
      { file: '043-DSC04250.jpg', caption: 'Triple garage and covered front entry', wide: true },
      { file: '045-DSC04262.jpg', caption: 'Fenced backyard, backing green space' },
      { file: '048-DSC04256.jpg', caption: 'Backyard, deck and patio' },
      { file: '046-DSC04272b.jpg', caption: 'Basketball court on the green space behind the home', wide: true },
      { file: '047-DSC04282.jpg', caption: 'Rear elevation, deck and patio', wide: true },
    ],
    photosNote: 'Includes the twilight exterior and a virtually staged room.',
    drone: [
      { file: '049-DJI_0646_pinned.jpg', caption: 'Aerial view with the property pinned' },
      { file: '050-DJI_0649_pinned.jpg', caption: 'Aerial view with the property pinned' },
      { file: '051-DJI_0651_pinned.jpg', caption: 'Aerial view with the property pinned' },
      { file: '052-DJI_0664_pinned.jpg', caption: 'Aerial view of the property and green space' },
    ],
    website: { url: 'https://34monterralink.ca/', label: '34monterralink.ca', screenshot: 'desktop.jpg' },
    floorplans: [
      { file: '900-floor_imperial_en_1.jpg', label: 'Main floor' },
      { file: '901-floor_imperial_en_2.jpg', label: 'Second floor' },
      { file: '902-floor_imperial_en_3.jpg', label: 'Basement' },
    ],
    floorplanPdf: 'https://youriguide.com/34_monterra_manor_cochrane_ab/doc/floorplan_imperial_en.pdf',
    iguide: {
      embed: 'https://youriguide.com/embed/34_monterra_manor_cochrane_ab?unbranded=1&bgcolor=131B2C',
      url: 'https://youriguide.com/34_monterra_manor_cochrane_ab',
    },
  },
];

// Shown on the /work/ hub as "case study coming soon" cards until their page
// is built; then move the listing into `work` above. `hero` is a filename in
// src/assets/work/<slug>/photos/; without one the card shows a placeholder.
export interface UpcomingListing {
  slug: string;
  address: string;
  city: string;
  packageName: string;
  hero?: string;
}

export const upcoming: UpcomingListing[] = [
  {
    slug: '159-greenwich-drive-nw',
    address: '159 Greenwich Drive NW',
    city: 'Calgary, Alberta',
    packageName: 'Luxury Package',
    hero: '001-twilight.jpg',
  },
  {
    slug: '342-hawkside-mews-nw',
    address: '342 Hawkside Mews NW',
    city: 'Calgary, Alberta',
    packageName: 'Showcase Package',
  },
];
