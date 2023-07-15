import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$, type RequestHandler } from '@builder.io/qwik-city';

import { Header } from '~/common/components';
import { DataProvider, ThemeProvider } from '~/common/context';

import '~/common/styles/global.css';

export const onGet: RequestHandler = (
  { cacheControl }
) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5
  });
};

export const useServerTimeLoader
  = routeLoader$(() => ({
    date: new Date().toISOString()
  }));

export default component$(() =>
  <DataProvider>
    <ThemeProvider>
      <main>
        <Slot />
        <Header />
      </main>
    </ThemeProvider>
  </DataProvider>
);