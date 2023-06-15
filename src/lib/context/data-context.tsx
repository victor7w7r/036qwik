import {
  component$, type Signal,
  Slot, useSignal
} from '@builder.io/qwik';

import {
  useContextProvider,
  createContextId
} from '@builder.io/qwik';

export const DataContext =
  createContextId<Signal<string | undefined>>(
    'data-context'
  );

export default component$(() => {

  const dataState = useSignal<string | undefined>(
    undefined
  );

  useContextProvider(DataContext, dataState);

  return <Slot />;
});