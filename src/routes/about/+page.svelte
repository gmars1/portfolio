<script lang="ts">
	import AnimatedSection from '$lib/components/AnimatedSection.svelte';
	import SkillsTicker from '$lib/components/SkillsTicker.svelte';

	const skills = [
		'Java',
		'Python',
		'Go',
		'Kotlin',
		'HTML5',
		'CSS3',
		'Tailwind CSS',
		'Git',
		'Vite',
		'Figma',
		'PostgreSQL'
	];

	const socials = [
		{ label: 'GitHub', href: 'https://github.com/marsel', icon: 'github' },
		{ label: 'Telegram', href: 'https://t.me/marsel', icon: 'telegram' },
		{ label: 'Email', href: 'mailto:hello@marsel.dev', icon: 'mail' }
	];
</script>

<svelte:head>
	<title>Обо мне — Marsel</title>
	<meta
		name="description"
		content="Marsel — backend разработчик. Java, Spring, Go, PostgreSQL."
	/>
	<meta property="og:title" content="Обо мне — Marsel" />
</svelte:head>

<div class="max-w-4xl mx-auto">
	<AnimatedSection>
		<h1 class="text-5xl md:text-7xl font-bold mb-12 text-white tracking-tight">
			Немного <span class="text-purple-500">обо мне</span>
		</h1>
	</AnimatedSection>

	<AnimatedSection delay={100}>
		<div class="prose prose-invert prose-lg max-w-none text-gray-300 mb-16">
			<p class="mb-6 text-xl leading-relaxed">
				Привет! Меня зовут Marsel. Я backend-разработчик.
			</p>
			<p class="leading-relaxed">
				Активно изучаю бэкенд и базы данных, чтобы иметь полное представление о том, как
				рождаются цифровые продукты — от идеи до продакшена. Люблю чистый код, понятную
				архитектуру и быстрые итерации.
			</p>
		</div>
	</AnimatedSection>

	<AnimatedSection delay={200}>
		<h2 class="text-2xl font-bold mb-8 text-white flex items-center gap-2">
			<span class="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
			></span>
			Технический стек
		</h2>
		<ul class="flex flex-wrap gap-3 list-none p-0">
			{#each skills as skill}
				<li
					class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all cursor-default shadow-sm"
				>
					{skill}
				</li>
			{/each}
		</ul>
	</AnimatedSection>

	<div class="my-12">
		<SkillsTicker />
	</div>

	<AnimatedSection delay={300}>
		<div
			class="p-8 md:p-12 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm"
		>
			<h2 class="text-3xl font-bold mb-4 text-white">Контакты</h2>
			<p class="text-gray-400 mb-8 max-w-lg">
				Я всегда открыт для обсуждения новых идей, фриланс-проектов или просто интересного
				общения в IT-сфере.
			</p>

			<div class="flex flex-col sm:flex-row gap-4">
				{#each socials as social}
					<a
						href={social.href}
						target={social.href.startsWith('http') ? '_blank' : undefined}
						rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="flex items-center justify-center gap-2 bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300"
					>
						{social.label}
					</a>
				{/each}
			</div>
		</div>
	</AnimatedSection>
</div>