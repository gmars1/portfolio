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
    slug: 'my-awesome-project',
    title: 'Мой крутой проект',
    description: 'Краткое описание проекта, что он делает и зачем.',
    image: '/images/s.png',
    screenshots: ['/images/s.png', '/images/s.png'],
    technologies: ['Svelte', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: 'another-project',
    title: 'Ещё один проект',
    description: 'Описание второго проекта.',
    image: '/images/s.png',
    screenshots: ['/images/s.png'],
    technologies: ['SvelteKit', 'Sanity']
  }
  // Добавьте свои проекты позже
];