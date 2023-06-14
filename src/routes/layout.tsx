import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$, type RequestHandler } from '@builder.io/qwik-city';

import DataContext from '../components/data-context';
import ThemeContext from '../components/theme-context';
import { Header } from '../components/header/header';

export const onGet: RequestHandler = async(
  { cacheControl }
) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5
  });
};

export const useServerTimeLoader = routeLoader$(() => ({
  date: new Date().toISOString()
}));

export default component$(() =>
  <DataContext>
    <ThemeContext>
      <main>
        <Slot />
        <Header />
      </main>
    </ThemeContext>
  </DataContext>
);