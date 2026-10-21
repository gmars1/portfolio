<script lang="ts">
	import ContactSection from '$lib/components/ContactSection.svelte';
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
</script>

<svelte:head
	><title>Обо мне — Marsel</title><meta
		name="description"
		content="Marsel — backend разработчик. Java, Spring, Go, PostgreSQL."
	/><meta property="og:title" content="Обо мне — Marsel" /></svelte:head
>

<div class="page-intro">
	<span class="eyebrow">Знакомство / Backend Developer</span>
	<h1>Немного обо мне<span class="accent">.</span></h1>
</div>
<section class="profile" aria-labelledby="profile-name">
	<div class="profile-card">
		<span class="profile-id">M / BACKEND DEVELOPMENT</span>
		<div class="monogram" aria-hidden="true">M<span>.</span></div>
		<div class="profile-label">
			<h2 id="profile-name">Marsel</h2>
			<span>Backend Developer</span>
		</div>
	</div>
	<div class="profile-copy">
		<p class="intro">Привет! Меня зовут Marsel. Я backend-разработчик.</p>
		<p>
			Активно изучаю бэкенд и базы данных, чтобы иметь полное представление о том, как рождаются
			цифровые продукты — от идеи до продакшена. Люблю чистый код, понятную архитектуру и быстрые
			итерации.
		</p>
		<div class="principles">
			<span>Чистый код</span><span>Понятная архитектура</span><span>Быстрые итерации</span>
		</div>
	</div>
</section>
<section class="skills" aria-labelledby="skills-title">
	<div class="section-heading">
		<div>
			<span class="eyebrow">Инструменты</span>
			<h2 id="skills-title">Технический стек<span class="accent">.</span></h2>
		</div>
	</div>
	<ul>
		{#each skills as skill, i (skill)}<li>
				<span class="skill-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span
				>{skill}<span class="skill-dot" aria-hidden="true"></span>
			</li>{/each}
	</ul>
</section>
<ContactSection />

<style>
	.accent {
		color: var(--accent);
	}
	.profile {
		display: grid;
		grid-template-columns: 0.75fr 1.25fr;
		align-items: center;
		gap: 64px;
		padding-bottom: 64px;
	}
	.profile-card {
		min-height: 350px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 28px;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: radial-gradient(ellipse at 90% 0%, #76d6f20b, transparent 70%), var(--surface);
		overflow: hidden;
	}
	.profile-id {
		color: var(--fg-muted);
		font:
			10px/1.5 ui-monospace,
			monospace;
		letter-spacing: 0.08em;
	}
	.monogram {
		position: absolute;
		top: 30px;
		right: 20px;
		color: #2f3b42;
		font-size: 210px;
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.09em;
	}
	.monogram span {
		color: #76d6f24d;
	}
	.profile-label {
		position: relative;
		margin-top: 190px;
	}
	.profile-label h2 {
		font-size: 30px;
		font-weight: 500;
		letter-spacing: -0.045em;
	}
	.profile-label > span {
		display: block;
		margin-top: 8px;
		color: var(--fg-muted);
		font-size: 13px;
	}
	.profile-copy > p {
		max-width: 52ch;
		font-size: 17px;
		line-height: 1.8;
		color: var(--fg-muted);
	}
	.profile-copy > .intro {
		color: var(--fg);
		font-size: clamp(22px, 2.5vw, 30px);
		line-height: 1.4;
		letter-spacing: -0.035em;
		margin-bottom: 24px;
	}
	.principles {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 20px;
		margin-top: 32px;
		padding-top: 24px;
		border-top: 1px solid var(--border);
		color: var(--fg);
		font-size: 12px;
	}
	.skills {
		border-top: 1px solid var(--border);
		padding-top: 40px;
	}
	.section-heading h2 {
		margin-top: 16px;
	}
	.skills ul {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 12px;
		list-style: none;
		padding: 0;
	}
	.skills li {
		display: flex;
		align-items: center;
		gap: 18px;
		padding: 20px;
		border: 1px solid var(--border);
		border-radius: 9px;
		font-size: 15px;
		background: var(--surface);
	}
	.skill-index {
		color: var(--fg-muted);
		font:
			10px/1 ui-monospace,
			monospace;
	}
	.skill-dot {
		margin-left: auto;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: #647982;
	}
	@media (max-width: 900px) {
		.profile {
			gap: 32px;
		}
		.skills ul {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 600px) {
		.profile {
			grid-template-columns: minmax(0, 1fr);
			gap: 28px;
			padding-bottom: 40px;
		}
		.profile-card {
			min-height: 280px;
		}
		.profile-label {
			margin-top: 140px;
		}
		.monogram {
			font-size: 190px;
		}
		.profile-copy > p {
			font-size: 16px;
		}
		.skills ul {
			gap: 8px;
		}
		.skills li {
			padding: 16px 12px;
			gap: 10px;
			font-size: 13px;
		}
	}
</style>
