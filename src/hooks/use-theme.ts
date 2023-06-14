import { useContext, useComputed$, $ } from '@builder.io/qwik';

import { ThemeContext } from '../components/theme-context';

export const useTheme = () => {

  const theme = useContext(ThemeContext);

  const toggle = $((): void => {
    if(theme.isDark) {
      theme.isDark = false;
      theme.dark = 'bg-white';
      theme.togglePeer = 'peer-checked:bg-white';
    } else {
      theme.isDark = true;
      theme.white = 'dark:bg-zinc-900';
      theme.togglePeer = 'peer-checked:bg-dark';
    }
    theme.control = 'bg-slate-700/30';
    document.body.classList.toggle('dark');
  });

  const blueChange = $((): void => {
    if(theme.isDark) {
      theme.dark = 'dark:bg-sky-900';
      theme.control = 'bg-sky-700/30';
      theme.togglePeer = 'peer-checked:bg-sky-500';
    } else {
      theme.white = 'bg-sky-300';
      theme.control = 'bg-sky-700/30';
      theme.togglePeer = 'peer-checked:bg-sky-300';
    }
  });

  const purpleChange = $((): void => {
    if(theme.isDark) {
      theme.dark = 'dark:bg-purple-900';
      theme.control = 'bg-purple-700/30';
      theme.togglePeer = 'peer-checked:bg-purple-500';
    } else {
      theme.white = 'bg-purple-300';
      theme.control = 'bg-purple-700/30';
      theme.togglePeer = 'peer-checked:bg-purple-300';
    }
  });

  const redChange = $((): void => {
    if(theme.isDark) {
      theme.dark = 'dark:bg-red-900';
      theme.control = 'bg-red-700/30';
      theme.togglePeer = 'peer-checked:bg-red-500';
    } else {
      theme.white = 'bg-red-300';
      theme.control = 'bg-red-700/30';
      theme.togglePeer = 'peer-checked:bg-red-300';
    }
  });

  const emeraldChange = $((): void => {
    if(theme.isDark) {
      theme.dark = 'dark:bg-emerald-900';
      theme.control = 'bg-emerald-700/30';
      theme.togglePeer = 'peer-checked:bg-emerald-300';
    } else {
      theme.white = 'bg-emerald-300';
      theme.control = 'bg-emerald-700/30';
      theme.togglePeer = 'peer-checked:bg-emerald-500';
    }
  });

  return {
    isDark: useComputed$(() => theme.isDark),
    dark: useComputed$(() => theme.dark),
    white: useComputed$(() => theme.white),
    control: useComputed$(() => theme.control),
    togglePeer: useComputed$(() => theme.togglePeer),
    toggle, blueChange, purpleChange,
    redChange, emeraldChange
  };

};