export const SITE = {
  name: 'islamophobe.me',
  title: 'Islamophobe.me | Sharia Law Is Not Compatible With Western Values — Child Marriage Will Never Be Accepted',
  description:
    'Call it Islamophobia. We call it recognizing that Sharia sanctions the marriage of grown men to little girls and demands supremacy over every other legal system. One must prevail.',
  url: 'https://islamophobe.me',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'United States',
  googleSiteVerification: 'TtgwpMIQahE2h3COiZ70yIsdi2pE-NPP26qM8ymOiSc',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'b898a16d-4ed1-44f6-b8fc-d9ec5f042800',
  secondaryImageId: '5cafa138-5431-4b54-acd2-507077324f00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('islamophobe.me Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring islamophobe.me.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
