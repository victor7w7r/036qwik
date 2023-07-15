import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$, type RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = (
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
  <main>
    <Slot />
  </main>
);