import {
  component$, createContextId,
  type Signal, Slot,
  useContextProvider, useSignal
} from '@builder.io/qwik';

export const DataContext =
  createContextId<Signal<string | undefined>>(
    'data-context'
  );

export default component$(() => {

  const dataState = useSignal<string | undefined>();

  useContextProvider(DataContext, dataState);

  return <Slot />;
});