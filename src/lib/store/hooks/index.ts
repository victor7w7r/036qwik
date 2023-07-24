import {
  type QwikChangeEvent,
  useContext,
  useSignal,
  $
} from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import { DataContext } from '~/common/context';

export const useStorePage = () => {
  const text = useSignal('');
  const nav = useNavigate();
  const dataState = useContext(DataContext);

  const handleSubmit = $((): string => (dataState.value = text.value));

  const handleChange = $(
    (event: QwikChangeEvent<HTMLInputElement>): string =>
      (text.value = event.target.value)
  );

  const changeToHome = $(() => nav('/'));

  return {
    handleSubmit,
    handleChange,
    changeToHome,
    text
  };
};
