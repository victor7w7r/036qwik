import { component$, useContext } from '@builder.io/qwik';

import { DataContext } from '~/lib/context';

export const State = component$(() => {

  const dataState = useContext(DataContext);

  return dataState.value
    ? <p class='adaptable-xl'>
        Store State: Yes, you write
        <b> {dataState.value || ''}</b>
      </p>
    : <p class='adaptable-xl'>Store State: Not yet.</p>;
});