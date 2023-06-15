import {
  component$, Resource, useResource$
} from '@builder.io/qwik';

import { Spinner } from '../';
import type { Binance } from '~/lib/models/';
import { getBitcoin } from '~/lib/services/';

export const Call = component$(() => {

  const btcResource = useResource$<Binance>(
    getBitcoin
  );

  return <Resource
    value={btcResource}
    onPending={() => <Spinner />}
    onResolved={bin => <>
      <p class='adaptable-call'>Symbol: {bin?.symbol}</p>
      <p class='adaptable-call'>Price: {bin?.askPrice}</p>
    </>}
  />;

});