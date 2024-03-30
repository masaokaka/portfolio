import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { flatRoutes } from 'remix-flat-routes';

const isStorybook = process.argv[1]?.includes('storybook');

/**
 * @type {import("@remix-run/dev").AppConfig}
 */
export default defineConfig({
  plugins: [
    !process.env.VITEST && !isStorybook
      ? remixVitePlugin({
          ignoredRouteFiles: ['**/*'],
          serverModuleFormat: 'esm',
          routes: async (defineRoutes) => {
            return flatRoutes('routes', defineRoutes, {
              ignoredRouteFiles: [
                '.*',
                '**/*.css',
                '**/*.test.{js,jsx,ts,tsx}',
                '**/__*.*',
                '**/*.server.*',
                '**/*.client.*',
              ],
            });
          },
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
