import { component$, useContext } from '@builder.io/qwik';

import { DataContext } from '../data-context';

const design =
  'adaptable-center-text text-base lg:text-xl font-semibold';

export const State = component$(() => {

  const dataState = useContext(DataContext);

  return <>{
    dataState.value
      ? <p class={design}>
          Store State: Yes, you write <b>{dataState.value || ''}</b>
        </p>
      : <p class={design}>
        Store State: Not yet.
      </p>
  }</>;
});