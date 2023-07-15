import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() =>
  <>
    Hello world!
  </>
);

export const head: DocumentHead = {
  title: 'Welcome to 036qwik',
  meta: [
    {
      name: 'description',
      content: 'the description'
    }
  ]
};