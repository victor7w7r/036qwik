/* eslint-disable @typescript-eslint/no-misused-promises */
import { setupServiceWorker } from '@builder.io/qwik-city/service-worker'

declare const self: ServiceWorkerGlobalScope

setupServiceWorker()
addEventListener('install', () => self.skipWaiting())
addEventListener('activate', () => self.clients.claim())
