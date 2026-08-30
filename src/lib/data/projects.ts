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
    image: '/images/project1.jpg',
    screenshots: ['/images/screenshot1.jpg', '/images/screenshot2.jpg'],
    technologies: ['Svelte', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: 'another-project',
    title: 'Ещё один проект',
    description: 'Описание второго проекта.',
    image: '/images/project2.jpg',
    screenshots: ['/images/screenshot3.jpg'],
    technologies: ['SvelteKit', 'Sanity']
  }
  // Добавьте свои проекты позже
];