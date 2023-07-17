import {
  component$, Resource, useResource$
} from '@builder.io/qwik';

import { Spinner } from '~/home/components';
import type { Binance } from '~/home/models';
import { getBitcoin } from '~/home/services';

export const Call = component$(() => {

  const btcResource = useResource$<Binance>(
    getBitcoin
  );

  return <Resource
    value={btcResource}
    onPending={() => <Spinner />}
    onResolved={bin => (
      <>
        <p class='adaptable-call'>
          Symbol:
          {bin.symbol}
        </p>
        <p class='adaptable-call'>
          Price:
          {bin.askPrice}
        </p>
      </>
    )}
  />;

});