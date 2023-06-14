import { component$ } from '@builder.io/qwik';

import { useTheme } from '~/hooks/use-theme';

export const Toggler = component$(() => {

  const {
    toggle, togglePeer, isDark
  } = useTheme();

  const toggleDesign = `${togglePeer.value} w-11
    h-6 bg-gray-200 rounded-full peer transition-colors duration-1000
    peer-focus:ring-0 peer-focus:ring-blue-300
    dark:peer-focus:ring-blue-800 dark:bg-gray-700
    peer-checked:after:translate-x-full
    peer-checked:after:border-white after:content-['']
    after:absolute after:top-0.5 after:left-[2px]
    after:bg-white after:border-gray-300 after:border
    after:rounded-full after:h-5 after:w-5 after:transition-all
    dark:border-gray-600`;

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
        <span class='ml-3 text-sm font-medium adaptable-text select-none'>
          Dark Mode
        </span>
      </label>
    </div>
  </div>;
});