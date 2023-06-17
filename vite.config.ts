import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  plugins: [
    qwikCity(),
    qwikVite({
      client: { devInput: 'src/qwik/entry.dev.tsx' },
      ssr: { input: 'src/qwik/entry.ssr.tsx' }
    }),
    tsconfigPaths()
  ],
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600'
    }
  }
}));