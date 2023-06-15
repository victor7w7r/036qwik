import { axiosClient, timeout } from '~/lib/config';
import { errorBinance, type Binance } from '~/lib/models';

export const getBitcoin = async(
): Promise<Binance> => {
  try {
    const res = await axiosClient.get<Binance[]>(
      '/v3/ticker/24hr',
      { timeout }
    );
    return res
      .data
      .find( curr => curr.symbol === 'BTCUSDT')
    ?? errorBinance;
  } catch (e) {
    return errorBinance;
  }
};