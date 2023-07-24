import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useComputed$,
  useStore,
  useVisibleTask$
} from '@builder.io/qwik';

import { type AppTheme, whiteTheme } from '~/common/models';

export const ThemeContext = createContextId<AppTheme>('theme-context');

export default component$(() => {
  const theme = useStore<AppTheme>(whiteTheme);

  const white = useComputed$(() => theme.white);
  const dark = useComputed$(() => theme.dark);

  useContextProvider(ThemeContext, theme);

  useVisibleTask$(() => {
    theme.isDark = document.body.classList.contains('dark');
  });

  return (
    <div
      class={`min-h-screen transition-colors
      duration-1000 ${white.value} ${dark.value}`}
    >
      <Slot />
    </div>
  );
});
