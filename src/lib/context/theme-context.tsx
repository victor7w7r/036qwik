import {
  component$, createContextId,
  Slot, useContextProvider,
  useComputed$, useStore,
  useVisibleTask$
} from '@builder.io/qwik';

type TThemeContext = {
  isDark: boolean,
  white: string,
  dark: string,
  control: string,
  togglePeer: string
};

export const ThemeContext =
  createContextId<TThemeContext>(
    'theme-context'
  );

export default component$(() => {

  const theme = useStore<TThemeContext>({
    isDark: false,
    white: 'bg-white',
    dark: 'dark:bg-zinc-900',
    control: 'bg-slate-700/30',
    togglePeer: ''
  });

  const white = useComputed$(() => theme.white);
  const dark = useComputed$(() => theme.dark);

  useContextProvider(ThemeContext, theme);

  useVisibleTask$(() => {
    theme.isDark =
      document.body.classList.contains('dark');
  });

  return <div class={
    `min-h-screen transition-color
    duration-1000 ${white.value} ${dark.value}`
  }>
    <Slot />
  </div>;
});