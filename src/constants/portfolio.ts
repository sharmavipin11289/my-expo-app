import type { ImageSource } from 'expo-image';

export interface PortfolioLink {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: ImageSource;
}

const icon = (uri: string): ImageSource => ({ uri });

export const PORTFOLIO_LINKS: PortfolioLink[] = [
  {
    id: 'nanoknee-provider',
    title: 'NanoKnee Provider',
    description: 'Companion app for the NanoKnee joint replacement journey',
    url: 'https://apps.apple.com/in/app/nanoknee-provider/id6802314421',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f5/0e/1c/f50e1c60-65e7-e9a0-7e56-81059575b340/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'khilonamart',
    title: 'Khilonamart: B2B Toy Store',
    description: 'B2B marketplace connecting India’s toy retailers and manufacturers',
    url: 'https://apps.apple.com/in/app/khilonamart-b2b-toy-store/id6475043392',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9f/e7/65/9fe76524-6836-7183-1f92-fc439361147e/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'islam-central',
    title: 'Islam Central',
    description: 'Curated summaries on Seerah, spirituality, and history',
    url: 'https://apps.apple.com/in/app/islam-central/id6756617208',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7a/58/83/7a5883a3-6440-47a8-99ee-3fd1d12620e4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'oyraa',
    title: 'Oyraa - Interpreters on Call',
    description: 'Real-time native interpreters and translators, 24/7',
    url: 'https://apps.apple.com/us/app/oyraa-interpreters-on-call/id1294006073?ign-mpt=uo%3D4',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/87/b9/c0/87b9c0de-e3f9-0b3d-7589-ee912bb50929/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'oyraa-android',
    title: 'Oyraa - Interpreters on Call',
    description: 'Real-time native interpreters and translators, 24/7',
    url: 'https://play.google.com/store/apps/details?id=com.app.oyraa&hl=en_IN',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/87/b9/c0/87b9c0de-e3f9-0b3d-7589-ee912bb50929/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'tjara',
    title: 'Tjara',
    description: 'Shopping app with daily deals, auctions, and savings',
    url: 'https://play.google.com/store/apps/details?id=com.wdp.www.tjaraapp',
    image: icon(
      'https://play-lh.googleusercontent.com/bCI0wxJpP7mzWfyOgBQ-ofgCUtF_w1hxSu-MTIEpFC2Jpz5Hs-T4fo39BavdAR1wuLwEd9XL7cAUuFN1T5mtIA=s0-br30',
    ),
  },
  {
    id: 'malo-africa',
    title: 'Malo Africa',
    description: 'Zambia marketplace to buy, sell, and discover local businesses',
    url: 'https://apps.apple.com/in/app/malo-africa/id6748435553',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e7/94/a8/e794a838-34cf-a09e-537a-1b8903f28c6c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.jpeg/512x512bb.jpg',
    ),
  },
  {
    id: 'chilly-apple',
    title: 'Chilly Apple',
    description: 'Udaipur grocery app for fresh fruits and vegetables at your doorstep',
    url: 'https://play.google.com/store/apps/details?id=com.phppoets.jainthela&hl=en_IN',
    image: icon(
      'https://play-lh.googleusercontent.com/-pvHEiUd7M07Oslw6O6zN9HUr638gLcO77mutgvksZiTwLa5-xZf5SyXGy5dAPrhZGWOITTZI710S3w6mOxTiQ=s0-br30',
    ),
  },
  {
    id: 'chilly-apple-ios',
    title: 'Chilly Apple',
    description: 'Udaipur grocery app for fresh fruits and vegetables at your doorstep',
    url: 'https://apps.apple.com/in/app/chilly-apple/id6448755533',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b1/c5/eb/b1c5eb87-a9bd-42dd-05e5-eea75c0953c0/AppIcon-0-0-1x_U007emarketing-0-6-0-0-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'shipphubb',
    title: 'ShippHubb',
    description: 'Community logistics and marketplace for expatriates',
    url: 'https://apps.apple.com/in/app/shipphubb/id6739930695',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/87/76/25/87762517-c88f-fcb6-e0d8-a775335a9483/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'hapinen',
    title: 'Hapinen: Events & Things To Do',
    description: 'Discover local events and things to do',
    url: 'https://apps.apple.com/us/app/hapinen-events-things-to-do/id1641854649',
  },
  {
    id: 'knackel',
    title: 'Knackel',
    description: 'Live community for flights, airports, and airlines',
    url: 'https://apps.apple.com/us/app/knackel/id1438381378',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cb/d2/eb/cbd2eb08-edfe-4c73-9816-00c5dd80a4b9/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'kanissa-news',
    title: 'Kanissa News',
    description: 'Prayer times and events for the Mashadi Jewish community',
    url: 'https://apps.apple.com/us/app/kanissa-news/id1449600030',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ba/4f/c5/ba4fc51b-ac6e-cfa4-bb94-c3c05f5bf99c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/512x512bb.jpg',
    ),
  },
  {
    id: 'telemedreferral',
    title: 'TelemedReferral',
    description: 'Professional network for medical and dental doctors',
    url: 'https://apps.apple.com/us/app/telemedreferral/id1611731146',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f6/c6/06/f6c60646-d920-4055-1b1a-8ac3fa9e1a2d/AppIcon-0-0-1x_U007emarketing-0-6-0-0-GLES2_U002c0-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'global-deal-flow',
    title: 'Global Deal Flow',
    description: 'Discover innovative companies and investment opportunities',
    url: 'https://apps.apple.com/us/app/global-deal-flow/id6453761487',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9a/d9/2d/9ad92d59-e8f4-19d5-c58f-97a175d6152b/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg',
    ),
  },
  {
    id: 'kids-readables',
    title: 'Kids Readables',
    description: 'Reading experiences designed for children',
    url: 'https://apps.apple.com/us/app/kids-readables/id6443877547',
  },
  {
    id: 'yogous-guide',
    title: 'Yogous Guide',
    description: 'Create and share tours for travellers',
    url: 'https://apps.apple.com/us/app/yogous-guide/id1663212171',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/74/e1/13/74e113ab-ec52-c46b-cda1-b51111655a36/AppIcon-1x_U007emarketing-0-11-0-0-85-220-0.png/512x512bb.jpg',
    ),
  },
  {
    id: 'yogous-traveller',
    title: 'Yogous Traveller',
    description: 'Find and book tours for unforgettable journeys',
    url: 'https://apps.apple.com/us/app/yogous-traveller/id1663212124',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5a/93/68/5a93680a-2210-9482-3ed5-d03bc44de9f0/AppIcon-1x_U007emarketing-0-11-0-0-85-220-0.png/512x512bb.jpg',
    ),
  },
  {
    id: 'epoxa',
    title: 'Epoxa',
    description: 'E-auction platform for coins, medals, and collectibles',
    url: 'https://apps.apple.com/us/app/epoxa/id1529739540',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4e/5b/8b/4e5b8bd4-add2-84db-9dff-a37fc83f639f/AppIcon-1x_U007emarketing-0-5-0-85-220-0.png/512x512bb.jpg',
    ),
  },
  {
    id: 'planet-once',
    title: 'Planet Once Employee Wellbeing',
    description: 'Well-being program that helps teams build lasting healthy habits',
    url: 'https://apps.apple.com/us/app/planet-once-employee-wellbeing/id6740619663',
    image: icon(
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b0/8f/a7/b08fa759-966d-9b00-ce10-4a5d7465d568/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/512x512bb.jpg',
    ),
  },
];
