import { component$, useContext } from '@builder.io/qwik';

import { DataContext } from '~/common/context';

export const State = component$(() => {

  const dataState = useContext(DataContext);

  return typeof dataState.value === 'undefined'
    ? <p class='adaptable-xl'>Store State: Not yet.</p>
    : <p class='adaptable-xl'>
        Store State: Yes, you write
      <b> {dataState.value}</b>
    </p>;
});