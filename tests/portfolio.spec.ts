import { expect, test } from '@playwright/test';

// External font availability must not control application regressions.
test.beforeEach(async ({ context }) => {
	await context.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, (route) => route.abort());
});

test('static content remains visible without JavaScript', async ({ browser, baseURL }) => {
	const context = await browser.newContext({ javaScriptEnabled: false });
	await context.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, (route) => route.abort());
	const page = await context.newPage();
	for (const route of ['', 'about/', 'projects/', 'projects/haus/', 'projects/site-scrapper/']) {
		await page.goto(`${baseURL}${route}`);
		const title = page.locator('main h1');
		await expect(title).toBeVisible();
		expect(
			await title.evaluate((node) => {
				let element: Element | null = node;
				while (element) {
					if (getComputedStyle(element).opacity === '0') return false;
					element = element.parentElement;
				}
				return true;
			})
		).toBe(true);
	}
	await context.close();
});

test('images load when opening each project directly', async ({ page }) => {
	for (const route of ['', 'projects/', 'projects/haus/', 'projects/site-scrapper/']) {
		await page.goto(route || './');
		const images = page.locator('main img');
		expect(await images.count()).toBeGreaterThan(0);
		for (const image of await images.all()) {
			await image.evaluate((node) => node.scrollIntoView({ behavior: 'instant' }));
			await expect
				.poll(() =>
					image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)
				)
				.toBe(true);
		}
	}
});

for (const width of [320, 375, 640]) {
	test(`navigation stays available at ${width}px`, async ({ page }) => {
		await page.setViewportSize({ width, height: 800 });
		await page.goto('about/');
		const nav = page.getByRole('navigation', { name: 'Главная' });
		await expect(nav.getByRole('link', { name: 'Проекты', exact: true })).toBeVisible();
		await expect(nav.getByRole('link', { name: 'Обо мне', exact: true })).toBeVisible();
		await expect(nav.getByRole('link', { name: 'Связаться', exact: true })).toBeVisible();
		expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
			true
		);
	});
}

test('active section follows client navigation and history', async ({ page }) => {
	await page.goto('about/');
	const nav = page.getByRole('navigation', { name: 'Главная' });
	const about = nav.getByRole('link', { name: 'Обо мне', exact: true });
	const projects = nav.getByRole('link', { name: 'Проекты', exact: true });
	await expect(about).toHaveAttribute('aria-current', 'page');
	await projects.click();
	await expect(projects).toHaveAttribute('aria-current', 'page');
	await expect(about).not.toHaveAttribute('aria-current');
	await page
		.getByRole('link')
		.filter({ has: page.getByRole('heading', { name: 'Haus', exact: true }) })
		.click();
	await expect(projects).toHaveAttribute('aria-current', 'page');
	await page.goBack();
	await expect(page).toHaveURL(/\/projects\/$/);
	await page.goBack();
	await expect(about).toHaveAttribute('aria-current', 'page');
	await page.goForward();
	await expect(projects).toHaveAttribute('aria-current', 'page');
});

test('home never locks keyboard scrolling', async ({ page }) => {
	await page.goto('./');
	await expect
		.poll(() => page.evaluate(() => getComputedStyle(document.body).overflow))
		.not.toBe('hidden');
	await page.locator('main').click({ position: { x: 20, y: 200 } });
	await page.keyboard.press('PageDown');
	await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(0);
});

test('reduced motion exposes every section immediately', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto('./');
	await expect(page.locator('main [style*="opacity: 0"]')).toHaveCount(0);
	await expect(
		page.locator('main .opacity-0').filter({ has: page.locator('h1, h2, h3') })
	).toHaveCount(0);
});

test('project selection and navigation work with blocked storage', async ({ page }) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	await page.addInitScript(() => {
		Object.defineProperty(window, 'sessionStorage', {
			get() {
				throw new Error('storage blocked');
			}
		});
	});
	await page.goto('./');
	await page
		.getByRole('group', { name: 'Выбрать проект для просмотра' })
		.getByRole('button', { name: /Haus/ })
		.click();
	await page.getByRole('navigation').getByRole('link', { name: 'Обо мне' }).click();
	await expect(page.getByRole('heading', { level: 1 })).toContainText('обо мне');
	expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
	expect(await page.evaluate(() => scrollY)).toBe(0);
	expect(errors).toEqual([]);
});

test('unknown projects return 404', async ({ page }) => {
	const response = await page.goto('projects/does-not-exist/');
	expect(response?.status()).toBe(404);
});

test('changing motion preference preserves project selection', async ({ page }) => {
	await page.goto('./');
	const selector = page.getByRole('group', { name: 'Выбрать проект для просмотра' });
	await selector.getByRole('button', { name: /Haus/ }).click();
	await expect(selector.getByRole('button', { name: /Haus/ })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await expect(selector.getByRole('button', { name: /Haus/ })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await expect(page.getByRole('link', { name: 'Открыть проект Haus', exact: true })).toBeVisible();
	await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
