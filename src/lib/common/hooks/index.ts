import { useContext, useComputed$, $ } from '@builder.io/qwik';

import { ThemeContext } from '~/common/context';
import { whiteTheme, darkTheme } from '~/common/models';

export const useTheme = () => {

  const theme = useContext(ThemeContext);

  const materialTheme = useComputed$(() => theme.material);

  const toggle = $((): void => {
    if(theme.isDark) {
      theme.isDark = false;
      theme.white = whiteTheme.white;
      theme.togglePeer = whiteTheme.togglePeer;
      theme.material = whiteTheme.material;
    } else {
      theme.isDark = true;
      theme.dark = darkTheme.dark;
      theme.togglePeer = darkTheme.togglePeer;
      theme.material = darkTheme.material;
    }
    theme.control = whiteTheme.control;
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
    changeRed, changeEmerald, materialTheme
  };

};