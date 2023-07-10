import { component$, useStyles$ } from '@builder.io/qwik';

import { useTheme } from '~/hooks';

import styles from './toggler.css?inline';

export const Toggler = component$(() => {

  useStyles$(styles);
  const {
    toggle, togglePeer, isDark
  } = useTheme();

  const toggleDesign = `${togglePeer.value} peer toggle-design`;

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
        <div class={toggleDesign}></div>
        <span class='toggle-title'>
          Dark Mode
        </span>
      </label>
    </div>
  </div>;
});