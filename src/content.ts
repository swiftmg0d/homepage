import { Email, GitHub, LinkedIn, Strava } from './components/icons';

const GITHUB_URL = 'https://github.com/swiftmg0d';

export const profile = {
  name: 'zhivche gligorov',
  role: 'fullstack engineer',
  company: {
    name: 'Valtech',
    href: 'https://www.valtech.com/',
  },
  birthDate: '2002-09-23T18:30:00Z',
  city: 'Skopje',
  timeZone: 'Europe/Skopje',
};

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zhivche-gligorov/',
    Icon: LinkedIn,
  },
  { label: 'GitHub', href: GITHUB_URL, Icon: GitHub },
  {
    label: 'Strava',
    href: 'https://www.strava.com/athletes/115251860',
    Icon: Strava,
  },
  { label: 'Email', href: 'mailto:zhivche.gligorov@gmail.com', Icon: Email },
];

export interface HotspotItem {
  title: string;
  meta?: string;
  text?: string;
  href?: string;
}

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  title: string;
  body?: string;
  items?: HotspotItem[];
}

export const hotspots: Hotspot[] = [
  {
    id: 'about',
    x: 32,
    y: 5,
    label: 'About',
    title: 'the short version',
    body: `Versatile developer with a positive attitude, quick learning ability, 
    and strong adaptability. Confident working with JavaScript frameworks across 
    frontend and backend, with a keen interest in DevOps and AI trends. Collaborative, 
    curious, and genuinely enjoy the craft.`,
  },
  {
    id: 'experience',
    x: 38,
    y: 29,
    label: 'Experience',
    title: 'shipping real things',
    items: [
      {
        title: 'Associate Fullstack Engineer',
        meta: 'Valtech · Dec 2025 – Now',
        text: `Developed and maintained business-critical BMG applications (Smart Match, myBMG, and DealHub), 
        contributing to full-stack development, API design, frontend architecture, feature implementation, 
        testing, and TypeScript refactoring.`,
      },
      {
        title: 'Trainee Fullstack Engineer',
        meta: 'Valtech · Jun 2025 – Nov 2025',
        text: `Contributed to full-stack development of ETW, a platform for generating, editing, sharing, 
        and downloading personalized documents using customizable templates and Excel data.`,
      },
    ],
  },
  {
    id: 'projects',
    x: 10,
    y: 33,
    label: 'Projects',
    title: 'side quests',
    items: [
      {
        title: 'tempo-sync',
        text: 'Full-stack fitness & music analytics, connects Strava workouts with Spotify listening data for AI-powered performance insights.',
        href: `${GITHUB_URL}/tempo-sync`,
      },
      {
        title: 'TravelGuard',
        text: 'A travel companion app that helps you plan and organize your trips.',
        href: `${GITHUB_URL}/TravelGuard`,
      },
      {
        title: 'WineWithMe',
        text: 'A comprehensive platform for wine enthusiasts and tourists to explore wineries across Macedonia, providing detailed information and locations of numerous wineries.',
        href: `${GITHUB_URL}/Portfolio`,
      },
      {
        title: 'Can you pass Visual programming',
        text: 'A 2D game built with C# using Windows Forms, featuring two characters: the main character collects points while the opponent tries to reduce them, with two levels: AIT Level (beginner) and CS Level (advanced).',
        href: `${GITHUB_URL}/Can-you-pass-Visual-programming`,
      },
      {
        title: 'FaceSwapApplication',
        text: 'A desktop application that allows users to swap faces in images and videos using advanced computer vision techniques.',
        href: `${GITHUB_URL}/FaceSwapApplication`,
      },
    ],
  },
  {
    id: 'education-certifications',
    x: 48,
    y: 39.5,
    label: 'Education & Certifications',
    title: 'learning journey',
    items: [
      {
        title: 'Bachelor of Computer Science',
        meta: 'Faculty of Computer Science and Engineering, in Skopje · 2021 – 2025',
      },
      {
        title: 'High School Diploma',
        meta: 'SOU Kosta Susinov, in Radovish · 2017 – 2021',
      },
    ],
  },
  {
    id: 'running',
    x: 29,
    y: 69,
    label: 'Running',
    title: 'off the keyboard',
    items: [
      // { title: 'This month', meta: '184.2 km' },
      // { title: '5K PR', meta: '19:42' },
      // { title: '10K PR', meta: '41:18' },
      { title: 'Work in progress', meta: 'TBD' },
    ],
  },
];
