import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig({
  plugins: [
    !process.env.VITEST && !isStorybook
      ? remixVitePlugin({
          ignoredRouteFiles: [
            '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
            '**/*.css',
          ],
        })
      : react(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup-test-env.ts'],
    include: ['./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watchExclude: ['.*\\/node_modules\\/.*', '.*\\/build\\/.*'],
    env: loadEnv('test', process.cwd(), ''),
  },
});
