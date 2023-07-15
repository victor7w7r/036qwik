import { component$, useStyles$ } from '@builder.io/qwik';

import { useTheme } from '~/common/hooks';

import styles from './toggler.css?inline';

export const Toggler = component$(() => {

  const {
    isDark, toggle, togglePeer
  } = useTheme();

  useStyles$(styles);

  return <div class='relative'>
    <div class='flex items-center justify-center w-full'>
      <label
        for='checked-toggle'
        class='inline-flex items-center mb-4 cursor-pointer'
      >
        <input
          type='checkbox'
          value=''
          id='checked-toggle'
          class='sr-only peer'
          checked={isDark.value}
          onChange$={toggle}
        />
        <div
          class={`${togglePeer.value} peer toggle-design`}>
        </div>
        <span class='toggle-title'>
          Dark Mode
        </span>
      </label>
    </div>
  </div>;
});