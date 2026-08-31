import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { projects } from '$lib/data/projects';



export const load: PageLoad = ({ params }) => {
	// Ищем проект, у которого slug совпадает с тем, что в URL
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		// Если проект не найден, выдаем ошибку 404
		throw error(404, 'Проект не найден');
	}

	return {
		project
	};
};

