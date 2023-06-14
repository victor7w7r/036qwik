import { component$ } from '@builder.io/qwik';
import { useNavigate, type DocumentHead } from '@builder.io/qwik-city';

import { Call } from '~/components/call/call';
import { State } from '~/components/state/state';
import { useTheme } from '~/hooks/use-theme';

export default component$(() => {

  const nav = useNavigate();
  const {
    control, isDark,
    blueChange, purpleChange,
    redChange, emeraldChange
  } = useTheme();

  return <div class='absolute h-screen inset-0 backdrop-blur-xl'>
    <div class='flex flex-col lg:flex-row items-center mt-24 tall:mt-32 lg:items-stretch lg:justify-evenly lg:h-3/6'>
      <div class={`card-container ${control.value}`}>
        <p class='adaptable-center-text text-lg tall:text-xl lg:text-3xl font-amina'>
          Made with love by
        </p>
        <img
          src={isDark.value ? '/img/brandwhite.png' : '/img/brand.png'}
          width={400} height={200}
          alt=''
          class='scale-75 lg:scale-100'
        />
        <h3 class='adaptable-center-text text-base lg:text-xl font-semibold mb-4'>
          Happy Hacking! with Typescript?
        </h3>
        <p class='adaptable-center-text text-base lg:text-xl font-roboto mb-8'>
          Roboto Font works with
        </p>
        <img
          src={isDark.value ? '/img/tailwindwhite.png' : '/img/tailwind.png'}
          alt=''
          width={400} height={200}
          class='scale-50 tall:scale-75 lg:scale-75'
        />
      </div>
      <div class={`card-container ${control.value}`}>
        <State />
        <div class='lg:w-[28rem] w-[32rem]'></div>
        <h3 class='adaptable-center-text text-lg lg:text-3xl font-semibold my-4'>
          Lets see bitcoin price
        </h3>
        <Call />
      </div>
    </div>
    <div class='flex items-center justify-center my-8 tall:my-12'>
      <button class='standard-button'
        onClick$={async () => {await nav('/store');}}>
          Go to store
      </button>
    </div>
    <div class='flex flex-row items-center justify-center'>
      <button class='blue-button' onClick$={blueChange}></button>
      <button class='purple-button' onClick$={purpleChange}></button>
      <button class='red-button' onClick$={redChange}></button>
      <button class='emerald-button' onClick$={emeraldChange}></button>
    </div>
  </div>;
});

export const head: DocumentHead = {
  title: 'Welcome to 036qwik',
  meta: [
    {
      name: 'description',
      content: 'the description'
    }
  ]
};