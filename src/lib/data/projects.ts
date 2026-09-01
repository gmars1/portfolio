import { base } from '$app/paths';

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
    image: `${base}/images/s.png`,
    screenshots: [`${base}/images/s.png`, `${base}/images/s2.png`],
    technologies: ['java', 'spring', 'postgres', 'docker']
  },
  {
    slug: 'haus',
    title: 'haus',
    description: 'Сервис для сожителей.',
    image: `${base}/images/s2.png`,
    screenshots: [`${base}/images/s.png`],
    technologies: ['go', 'postgres']
  }
  // Добавьте свои проекты позже
];