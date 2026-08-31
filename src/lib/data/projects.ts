export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  screenshots: string[];
  technologies: string[];
  link?: string; // необязательно
}

export const projects: Project[] = [
  {
    slug: 'site-scrapper',
    title: 'site scrapper',
    description: 'Сервис для отслеживания контента на сайтах.',
    image: '/images/s.png',
    screenshots: ['/images/s.png', '/images/s2.png'],
    technologies: ['java', 'spring', 'postgres', 'docker']
  },
  {
    slug: 'haus',
    title: 'haus',
    description: 'Сервис для сожителей.',
    image: '/images/s2.png',
    screenshots: ['/images/s.png'],
    technologies: ['go', 'postgres']
  }
  // Добавьте свои проекты позже
];