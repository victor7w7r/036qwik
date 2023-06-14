import {
  type QwikChangeEvent, useContext,
  useSignal, $
} from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import { DataContext } from '~/components/data-context';

export const inputDesign =
  `block py-2.5 px-0 w-full text-sm text-gray-900
  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
  focus:ring-0 focus:border-blue-600 peer`;

export const floatingLabelDesign =
  `peer-focus:font-medium absolute text-sm text-gray-500
  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
  peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
  peer-focus:scale-75 peer-focus:-translate-y-6`;

export const useStorePage = () => {

  const text = useSignal('');
  const nav = useNavigate();
  const dataState = useContext(DataContext);

  const handleSubmit = $((): string =>
    dataState.value = text.value
  );

  const handleChange = $((
    event: QwikChangeEvent<HTMLInputElement>
  ): string => text.value = event.target.value);

  const changeToHome = $(async(): Promise<void> =>
    await nav('/'));

  return {
    handleSubmit, handleChange,
    changeToHome, text
  };

};