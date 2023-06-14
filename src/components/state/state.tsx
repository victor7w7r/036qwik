import { component$, useContext } from '@builder.io/qwik';

import { DataContext } from '../data-context';

export const State = component$(() => {

  const dataState = useContext(DataContext);

  return <>{
    dataState.value
      ? <p class='adaptable-center-text text-base lg:text-xl font-semibold'>
          Store State: Yes, you write <b>{dataState.value || ''}</b>
        </p>
      : <p class='adaptable-center-text text-base lg:text-xl font-semibold'>
        Store State: Not yet.
      </p>
  }</>;
});