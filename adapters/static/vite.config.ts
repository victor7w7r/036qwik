import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite'
import { extendConfig } from '@builder.io/qwik-city/vite'

import baseConfig from '../../vite.config'

export default extendConfig(baseConfig, () => ({
  build: {
    ssr: true,
    rollupOptions: {
      input: ['@qwik-city-plan']
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  plugins: [
    staticAdapter({
      origin: 'https://yoursite.qwik.dev'
    })
  ]
}))
