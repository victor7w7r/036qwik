import { component$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister
} from '@builder.io/qwik-city'

import { RouterHead } from '~core/qwik/router-head'

import './core/styles/index.css'

export default component$(() => (
  <QwikCityProvider>
    <head>
      <meta charSet='utf-8' />
      <link rel='manifest' href='/manifest.json' />
      <RouterHead />
    </head>
    <body lang='en'>
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  </QwikCityProvider>
))
