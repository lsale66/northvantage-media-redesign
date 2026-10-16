/**
 * Schema.org JSON-LD for the site, typed with schema-dts.
 *
 * Layout renders one @graph per page: the business, the website, the page
 * itself, plus whatever the page passes in through Layout's `schema` prop.
 * Nodes reference each other by @id, so Google reads them as one entity.
 * Business facts live here only; update them in one place.
 */
import type { BreadcrumbList, Graph, ProfessionalService, Service, Thing, WebPage, WebSite } from 'schema-dts';

export const SITE = import.meta.env.SITE.replace(/\/$/, '');

export const ids = {
  business: `${SITE}/#organization`,
  website: `${SITE}/#website`,
  webpage: (url: string) => `${url}#webpage`,
};

export const business: ProfessionalService = {
  '@type': 'ProfessionalService',
  '@id': ids.business,
  name: 'Northvantage Media',
  url: `${SITE}/`,
  description:
    'Real estate photography, video, RMS measurements, drone, and iGuide virtual tours serving Calgary and area.',
  telephone: '+1-587-885-6499',
  email: 'lee@northvantagemedia.com',
  logo: `${SITE}/icon-512.png`,
  image: `${SITE}/images/photos/001-twilight%20(Large).jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    postalCode: 'T2X 1T6',
    addressCountry: 'CA',
  },
  areaServed: { '@type': 'City', name: 'Calgary' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: [
    'https://www.facebook.com/northvantagemedia',
    'https://www.instagram.com/northvantagemedia/',
    'https://share.google/ki6GMLUZmbMXYdLj8',
  ],
};

export const website: WebSite = {
  '@type': 'WebSite',
  '@id': ids.website,
  url: `${SITE}/`,
  name: 'Northvantage Media',
  inLanguage: 'en-CA',
  publisher: { '@id': ids.business },
};

export function webpage(url: string, name: string, description: string): WebPage {
  return {
    '@type': 'WebPage',
    '@id': ids.webpage(url),
    url,
    name,
    description,
    inLanguage: 'en-CA',
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.business },
  };
}

/** A service the business offers, for /services/* pages. */
export function service(opts: { path: string; name: string; serviceType: string; description: string }): Service {
  const url = `${SITE}${opts.path}`;
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    provider: { '@id': ids.business },
    areaServed: { '@type': 'City', name: 'Calgary' },
  };
}

/** Breadcrumb trail. Home is added automatically; pass the rest in order. */
export function breadcrumbs(trail: { name: string; path: string }[]): BreadcrumbList {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export function pageGraph(page: WebPage, extra: Thing[] = []): Graph {
  return { '@context': 'https://schema.org', '@graph': [business, website, page, ...extra] };
}
