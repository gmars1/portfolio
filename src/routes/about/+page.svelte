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
	<meta name="description" content="Marsel — backend разработчик. Java, Spring, Go, PostgreSQL." />
	<meta property="og:title" content="Обо мне — Marsel" />
</svelte:head>

<div class="mx-auto max-w-4xl">
	<AnimatedSection>
		<h1 class="mb-12 text-5xl font-bold tracking-tight text-white md:text-7xl">
			Немного <span class="text-purple-500">обо мне</span>
		</h1>
	</AnimatedSection>

	<AnimatedSection delay={100}>
		<div class="prose prose-invert prose-lg mb-16 max-w-none text-gray-300">
			<p class="mb-6 text-xl leading-relaxed">Привет! Меня зовут Marsel. Я backend-разработчик.</p>
			<p class="leading-relaxed">
				Активно изучаю бэкенд и базы данных, чтобы иметь полное представление о том, как рождаются
				цифровые продукты — от идеи до продакшена. Люблю чистый код, понятную архитектуру и быстрые
				итерации.
			</p>
		</div>
	</AnimatedSection>

	<AnimatedSection delay={200}>
		<h2 class="mb-8 flex items-center gap-2 text-2xl font-bold text-white">
			<span class="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
			Технический стек
		</h2>
		<ul class="flex list-none flex-wrap gap-3 p-0">
			{#each skills as skill}
				<li
					class="cursor-default rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-gray-300 shadow-sm transition-all hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
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
			class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm md:p-12"
		>
			<h2 class="mb-4 text-3xl font-bold text-white">Контакты</h2>
			<p class="mb-8 max-w-lg text-gray-400">
				Я всегда открыт для обсуждения новых идей, фриланс-проектов или просто интересного общения в
				IT-сфере.
			</p>

			<div class="flex flex-col gap-4 sm:flex-row">
				{#each socials as social}
					<a
						href={social.href}
						target={social.href.startsWith('http') ? '_blank' : undefined}
						rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-purple-400 hover:text-white"
					>
						{social.label}
					</a>
				{/each}
			</div>
		</div>
	</AnimatedSection>
</div>
