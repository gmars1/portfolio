import { defineConfig } from '@playwright/test';

const basePath = process.env.TEST_BASE_PATH ?? '';
const origin = 'http://127.0.0.1:4173';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	workers: 1,
	use: {
		baseURL: `${origin}${basePath}/`,
		trace: 'retain-on-failure'
	},
	webServer: {
		command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4173 --strictPort',
		url: `${origin}${basePath}/`,
		env: { BASE_PATH: basePath },
		timeout: 120_000
	}
});
