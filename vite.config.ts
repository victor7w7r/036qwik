import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikReact } from '@builder.io/qwik-react/vite';

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  plugins: [
    qwikCity(),
    qwikReact(),
    qwikVite({
      client: { devInput: 'src/core/qwik/entry.dev.tsx' },
      ssr: { input: 'src/core/qwik/entry.ssr.tsx' }
    }),
    tsconfigPaths()
  ],
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600'
    }
  }
}));
