export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  grade: string;
}

export interface Profile {
  name: string;
  title: string;
  phone: string;
  phoneHref: string;
  email: string;
  location: string;
  summary: string;
  experience: Experience[];
  skills: SkillGroup[];
  education: Education[];
}

export const PROFILE: Profile = {
  name: 'Vipin Sharma',
  title: 'Senior iOS & Flutter Developer',
  phone: '+91 79761 08895',
  phoneHref: 'tel:+917976108895',
  email: 'sharmavipin11289@gmail.com',
  location: 'Jaipur, Rajasthan, India',
  summary:
    'Senior iOS & Flutter engineer with 9+ years building production mobile apps in Swift, SwiftUI, Flutter, and Dart. Experienced in mobile architecture, REST APIs, real-time communication, performance, App Store releases, and mentoring teams of 4–5 developers. Currently expanding into AI-powered mobile features including LLM APIs, RAG, and conversational agents.',
  experience: [
    {
      id: 'konstant',
      role: 'Senior Mobile Application Developer',
      company: 'Konstant Infosolutions Pvt. Ltd',
      period: 'Aug 2023 – Present',
      location: 'Jaipur, India',
      highlights: [
        'Lead a mobile team of 4–5 engineers through reviews, mentoring, and delivery.',
        'Worked with clients in China and Thailand on requirements, demos, and releases.',
        'Migrated legacy Objective-C apps to Swift and SwiftUI.',
        'Integrated REST APIs and Socket.IO for live data sync.',
      ],
    },
    {
      id: 'competenza',
      role: 'Senior Mobile Application Developer',
      company: 'Competenza Innovare Pvt. Ltd',
      period: 'Feb 2023 – Jul 2023',
      location: 'Jaipur, India',
      highlights: [
        'Shipped Flutter apps for Android and iOS.',
        'Built reusable UI components and scalable mobile modules.',
        'Took part in technical interviews for mobile roles.',
      ],
    },
    {
      id: 'wdp',
      role: 'Mobile Application Developer',
      company: 'Web Development Park Pvt. Ltd',
      period: 'Jul 2016 – Feb 2023',
      location: 'Jaipur, India',
      highlights: [
        'Built and maintained iOS apps in Objective-C and Swift.',
        'Worked on ride-booking, marketplace, and business apps.',
        'Implemented payments, push notifications, maps, and location.',
      ],
    },
  ],
  skills: [
    {
      id: 'mobile',
      title: 'Mobile',
      items: ['iOS Native', 'Flutter', 'Swift', 'SwiftUI', 'UIKit', 'Dart'],
    },
    {
      id: 'ai',
      title: 'AI',
      items: ['LLM APIs', 'Generative AI', 'Prompt Engineering', 'RAG', 'Conversational AI'],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      items: ['MVVM', 'MVC', 'Clean Architecture', 'BLoC / Cubit', 'Combine'],
    },
    {
      id: 'tools',
      title: 'Tools & Domain',
      items: ['Firebase', 'Socket.IO', 'Core Data', 'E-Commerce', 'Ride Booking', 'Marketplace'],
    },
  ],
  education: [
    {
      id: 'pgdca',
      degree: 'PGDCA',
      school: 'JGRU University, Jaipur',
      grade: '71 / 100',
    },
    {
      id: 'bca',
      degree: 'Bachelor of Computer Applications',
      school: 'University of Kota',
      grade: '70 / 100',
    },
  ],
};
