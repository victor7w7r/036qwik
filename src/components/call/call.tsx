import { Resource, component$, useResource$ } from '@builder.io/qwik';

import { Spinner } from '../spinner/spinner';
import type { Binance } from '~/models/binance';
import { getBitcoin } from '~/services';

const textStyle =
  'adaptable-center-text text-base lg:text-lg font-semibold';

export const Call = component$(() => {

  const btcResource = useResource$<Binance>(async () =>
    await getBitcoin()
  );

  return <Resource
    value={btcResource}
    onPending={() => <Spinner />}
    onResolved={bin => <>
      <p class={textStyle}>Symbol: {bin?.symbol}</p>
      <p class={textStyle}>Price: {bin?.askPrice}</p>
    </>}
  />;

});