import { useContext, useComputed$, $ } from '@builder.io/qwik';

import { ThemeContext } from '~/lib/context';

export const useTheme = () => {

  const theme = useContext(ThemeContext);

  const toggle = $((): void => {
    if(theme.isDark) {
      theme.isDark = false;
      theme.dark = 'dark:bg-zinc-900';
      theme.togglePeer = 'peer-checked:bg-white';
    } else {
      theme.isDark = true;
      theme.white = 'bg-white';
      theme.togglePeer = 'peer-checked:bg-dark';
    }
    theme.control = 'bg-slate-700/30';
    document.body.classList.toggle('dark');
  });

  const changeSelector = $((selector: string): void => {
    if(theme.isDark) {
      theme.dark = `dark:bg-${selector}-900`;
      theme.control = `bg-${selector}-700/30`;
      theme.togglePeer = `peer-checked:bg-${selector}-500`;
    } else {
      theme.white = `bg-${selector}-300`;
      theme.control = `bg-${selector}-700/30`;
      theme.togglePeer = `peer-checked:bg-${selector}-300`;
    }
  });

  const changeBlue = $((): Promise<void> =>
    changeSelector('sky')
  );

  const changePurple = $((): Promise<void> =>
    changeSelector('purple')
  );

  const changeRed = $((): Promise<void> =>
    changeSelector('red')
  );

  const changeEmerald = $((): Promise<void> =>
    changeSelector('emerald')
  );

  return {
    isDark: useComputed$(() => theme.isDark),
    dark: useComputed$(() => theme.dark),
    white: useComputed$(() => theme.white),
    control: useComputed$(() => theme.control),
    togglePeer: useComputed$(() => theme.togglePeer),
    toggle, changeBlue, changePurple,
    changeRed, changeEmerald
  };

};