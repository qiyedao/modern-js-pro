import appTools, { defineConfig } from '@modern-js/app-tools';
import tailwindcssPlugin from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  dev: {
    hmr: true,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    tailwindcssPlugin(),
  ],
});
