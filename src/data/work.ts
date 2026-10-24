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
  /**
   * Bunny embed URL (same format as the videography page) + a line on what this
   * reel was. `result` shows a stat callout; only use numbers the founder gave.
   */
  reel?: { src: string; copy: string; result?: { value: string; label: string } };
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
  {
    slug: '159-greenwich-drive-nw',
    address: '159 Greenwich Drive NW',
    city: 'Calgary, Alberta',
    packageName: 'Luxury Package',
    packageFrom: '$999',
    agent: { name: 'Lionel Sale', url: 'https://lionelsale.ca/' },
    summary:
      'A brand-new build in Upper Greenwich, northwest Calgary: tall ceilings, wide-plank floors, a chef’s kitchen with quartz counters and a second-floor bonus room. The house was empty on shoot day, so four rooms were virtually staged to show buyers how it lives.',
    hero: '001-twilight.jpg',
    reel: {
      src: 'https://iframe.mediadelivery.net/embed/469110/5e262981-3ef2-4357-ac91-73686c3c08f2?autoplay=true&loop=false&muted=true&preload=false&responsive=true',
      copy: 'A fast, vertical cut built to stop the scroll on Instagram, Facebook and TikTok, getting the listing seen before buyers ever open MLS.',
    },
    youtubeId: 'gyvaricJimI',
    photos: [
      { file: '001-twilight.jpg', caption: 'Front elevation at dusk', wide: true },
      { file: '002-DSC09394-Edit.jpg', caption: 'Front exterior, daytime', wide: true },
      { file: '003-DSC09400-Edit.jpg', caption: 'Front elevation, daytime', wide: true },
      { file: '004-DSC05992.jpg', caption: 'Great room, gas fireplace' },
      { file: '005-DSC06016.jpg', caption: 'Great room to kitchen' },
      { file: '006-DSC05998.jpg', caption: 'Chef’s kitchen, gas cooktop', wide: true },
      { file: '007-DSC05994.jpg', caption: 'Kitchen island' },
      { file: '008-DSC06000.jpg', caption: 'Built-in wall ovens' },
      { file: '009-DSC06004.jpg', caption: 'Kitchen, opens to stairwell' },
      { file: '010-DSC06008.jpg', caption: 'Kitchen, herringbone backsplash' },
      { file: '011-DSC06010.jpg', caption: 'Gas fireplace, main living room', wide: true },
      { file: '035-edited-228.jpg', caption: 'Living and dining, virtually staged', wide: true },
      { file: '012-DSC06019.jpg', caption: 'Garden doors to deck', wide: true },
      { file: '013-DSC06036.jpg', caption: 'Deck view', wide: true },
      { file: '014-DSC06026.jpg', caption: 'Kitchen to entry hall' },
      { file: '036-design-1772235326914.jpg', caption: 'Kitchen and dining, virtually staged' },
      { file: '015-DSC06061.jpg', caption: 'Wide staircase, upgraded railings' },
      { file: '016-DSC06040.jpg', caption: 'Main floor powder room' },
      { file: '017-DSC06123.jpg', caption: 'Upper level landing' },
      { file: '018-DSC06126.jpg', caption: 'Upper hallway' },
      { file: '019-DSC06093.jpg', caption: 'Bonus room' },
      { file: '037-edited_227-topaz-upscale.jpg', caption: 'Bonus room, virtually staged' },
      { file: '020-DSC06104.jpg', caption: 'Bedroom, bay window' },
      { file: '038-edited_225-topaz-upscale.jpg', caption: 'Primary suite, virtually staged' },
      { file: '021-DSC06105.jpg', caption: 'Primary walk-in closet' },
      { file: '022-DSC06114.jpg', caption: 'Primary ensuite, vanity' },
      { file: '023-DSC06117.jpg', caption: 'Ensuite walk-in shower' },
      { file: '024-DSC06121.jpg', caption: 'Walk-in shower detail' },
      { file: '025-DSC06066.jpg', caption: 'Bedroom, bright corner' },
      { file: '026-DSC06071.jpg', caption: 'Primary bedroom' },
      { file: '027-DSC06073.jpg', caption: 'Bedroom, picture window' },
      { file: '028-DSC06076.jpg', caption: 'Bedroom, hallway access' },
      { file: '029-DSC06079.jpg', caption: 'Secondary bathroom, tub and shower' },
      { file: '030-DSC06098.jpg', caption: 'Second-floor laundry' },
      { file: '031-DSC06132.jpg', caption: 'Unfinished basement' },
      { file: '032-DSC06137.jpg', caption: 'Mechanical room' },
      { file: '034-DSC06166.jpg', caption: 'Rear exterior, deck', wide: true },
    ],
    photosNote: 'Includes the twilight exterior and four virtually staged rooms, each shown next to the empty original.',
    website: { url: 'https://159greenwichdrive.ca/', label: '159greenwichdrive.ca', screenshot: 'desktop.jpg' },
    floorplans: [
      { file: '900-floor_imperial_en_1.jpg', label: 'Main floor' },
      { file: '901-floor_imperial_en_2.jpg', label: 'Second floor' },
    ],
    floorplanPdf: '/tours/159-greenwich-drive-nw/doc/floorplan_imperial_en.pdf',
    // The live iGuide locked when the property sold; this is iGuide's offline
    // export, hosted as-is from public/tours/.
    iguide: { embed: '/tours/159-greenwich-drive-nw/', url: '/tours/159-greenwich-drive-nw/' },
  },
  {
    slug: '342-hawkside-mews-nw',
    address: '342 Hawkside Mews NW',
    city: 'Calgary, Alberta',
    packageName: 'Showcase Package',
    packageFrom: '$685',
    agent: { name: 'Lionel Sale', url: 'https://lionelsale.ca/' },
    summary:
      'An updated bungalow on a quiet cul-de-sac in the Uplands of Hawkwood, northwest Calgary, on a big lot backing onto a park pathway. Vaulted ceilings and walls of windows upstairs, a fully finished lower level with a bar. The drone work shows what ground shots can’t: the lot, the park behind it and the clubhouse a short walk away.',
    hero: '001-DSC03016.jpg',
    reel: {
      src: 'https://iframe.mediadelivery.net/embed/469110/d06939c7-91da-484b-80ae-00ee67190b93?autoplay=true&loop=false&muted=true&preload=false&responsive=true',
      copy: 'A fast, vertical cut built to stop the scroll on Instagram, Facebook and TikTok, with Lionel on camera. We wrote the script and coached him through his lines on site. It was one of our top performers, and the attention turned into several inquiries and new leads for Lionel.',
      result: { value: '30,000 views', label: 'In just 5 days' },
    },
    photos: [
      { file: '001-DSC03016.jpg', caption: 'Front elevation on a quiet cul-de-sac', wide: true },
      { file: '002-DSC03017-2.jpg', caption: 'Front elevation and double garage' },
      { file: '003-DSC03125.jpg', caption: 'Front entry hall' },
      { file: '004-DSC03170.jpg', caption: 'Vaulted great room from the entry', wide: true },
      { file: '005-DSC03172.jpg', caption: 'Open-concept main floor under a vaulted ceiling' },
      { file: '006-DSC03128.jpg', caption: 'Kitchen island with glass-front cabinetry' },
      { file: '007-DSC03157.jpg', caption: 'Kitchen, quartz counters and dual-fuel range' },
      { file: '008-DSC03136.jpg', caption: 'Dining room with deck access' },
      { file: '009-DSC03142.jpg', caption: 'Living room, vaulted ceiling', wide: true },
      { file: '010-DSC03184.jpg', caption: 'Living room and gas fireplace' },
      { file: '011-DSC03187-Edit.jpg', caption: 'Kitchen and dining from the living room' },
      { file: '012-DSC03146.jpg', caption: 'Kitchen island and stainless appliances' },
      { file: '013-DSC03161.jpg', caption: 'Kitchen work space and corner pantry' },
      { file: '014-DSC03043.jpg', caption: 'Primary bedroom, vaulted ceiling', wide: true },
      { file: '015-DSC03049.jpg', caption: 'Primary bedroom' },
      { file: '016-DSC03053.jpg', caption: 'Ensuite with jetted soaker tub' },
      { file: '017-DSC03055.jpg', caption: 'Ensuite shower and soaker tub' },
      { file: '018-DSC03063.jpg', caption: 'Ensuite vanity' },
      { file: '019-DSC03067.jpg', caption: 'Primary walk-in closet' },
      { file: '020-DSC03074.jpg', caption: 'Den with built-ins' },
      { file: '021-DSC03079.jpg', caption: 'Updated powder room' },
      { file: '022-DSC03200.jpg', caption: 'Main-floor laundry' },
      { file: '023-DSC03089.jpg', caption: 'Lower-level family room', wide: true },
      { file: '024-DSC03121.jpg', caption: 'Lower-level family room and stairs' },
      { file: '025-DSC03103.jpg', caption: 'Lower-level bar' },
      { file: '026-DSC03085.jpg', caption: 'Bar counter and shelving' },
      { file: '027-DSC03092.jpg', caption: 'Lower-level sitting area' },
      { file: '028-DSC03094.jpg', caption: 'Lower-level gas fireplace', wide: true },
      { file: '029-DSC03083.jpg', caption: 'Lower-level bedroom' },
      { file: '030-DSC03106.jpg', caption: 'Lower-level bedroom' },
      { file: '031-DSC03109.jpg', caption: 'Updated lower-level full bath' },
      { file: '032-DSC03202.jpg', caption: 'Insulated, finished garage' },
      { file: '033-DSC03024.jpg', caption: 'Rear patio', wide: true },
      { file: '034-DSC03037.jpg', caption: 'Patio and backyard' },
      { file: '035-DSC03026.jpg', caption: 'Rear elevation and backyard' },
      { file: '036-DSC03030.jpg', caption: 'Backyard backing onto the park', wide: true },
      { file: '037-DSC03033.jpg', caption: 'Backyard and mature trees', wide: true },
    ],
    drone: [
      { file: '038-DJI_0524.jpg', caption: 'Aerial view of the backyard and green space' },
      { file: '039-DJI_0501-outlined.jpg', caption: 'Aerial view with the lot outlined' },
      { file: '040-DJI_0499.jpg', caption: 'Aerial view of the cul-de-sac' },
      { file: '041-DJI_0504_pinned.jpg', caption: 'Aerial view with the recreation centre, school and park labelled' },
      { file: '042-DJI_0509_pinned.jpg', caption: 'Aerial view with the property pinned' },
      { file: '043-DJI_0514_pinned.jpg', caption: 'Aerial view with the property pinned, downtown beyond' },
      { file: '044-DJI_0517_pinned.jpg', caption: 'Aerial view with the property pinned beside the park pathway' },
      { file: '045-DJI_0521_pinned.jpg', caption: 'Aerial view of the Hawkwood Recreation Centre' },
    ],
    floorplans: [
      { file: '900-floor_imperial_en_1.jpg', label: 'Main floor' },
      { file: '901-floor_imperial_en_2.jpg', label: 'Basement' },
    ],
    floorplanPdf: 'https://youriguide.com/342_hawkside_mews_nw_calgary_ab/doc/floorplan_imperial_en.pdf',
    iguide: {
      embed: 'https://youriguide.com/embed/342_hawkside_mews_nw_calgary_ab?unbranded=1&bgcolor=131B2C',
      url: 'https://youriguide.com/342_hawkside_mews_nw_calgary_ab',
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
];
