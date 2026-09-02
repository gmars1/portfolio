export interface Project {
	slug: string;
	title: string;
	description: string;
	image: string;
	screenshots: string[];
	technologies: string[];
	github?: string;
	link?: string;
}

export const projects: Project[] = [
	{
		slug: 'site-scrapper',
		title: 'Site Scrapper',
		description: 'Сервис для отслеживания изменений контента на сайтах.',
		image: '/images/s.png',
		screenshots: ['/images/s.png', '/images/s2.png'],
		technologies: ['Java', 'Spring', 'PostgreSQL', 'Docker'],
		github: 'https://github.com/marsel/site-scrapper'
	},
	{
		slug: 'haus',
		title: 'Haus',
		description: 'Сервис для управления бытом и задачами среди соседей.',
		image: '/images/s2.png',
		screenshots: ['/images/s2.png', '/images/s.png'],
		technologies: ['Go', 'PostgreSQL'],
		github: 'https://github.com/marsel/haus'
	}
];
