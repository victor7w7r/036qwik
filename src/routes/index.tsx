import { component$ } from '@builder.io/qwik';
import {
  useNavigate, type DocumentHead
} from '@builder.io/qwik-city';

import { AppPaper, Call, State } from '~/components';
import { useTheme } from '~/hooks';

export default component$(() => {

  const nav = useNavigate();
  const {
    control, isDark, materialTheme,
    changeBlue, changePurple,
    changeRed, changeEmerald
  } = useTheme();

  return <div class='page-container'>
    <div class='home-container'>
      <div class='card-flex'>
        <div class={`card-container ${control.value}`}>
          <p class='adaptable-amina'>
            Made with love by
          </p>
          <img src={ isDark.value
            ? '/img/brandwhite.png'
            : '/img/brand.png'
          }
            class='scale-75 lg:scale-100'
            width={400} height={200}
            alt=''
          />
          <h3 class='adaptable-center-text-base font-semibold mb-4'>
            Happy Hacking! with Typescript?
          </h3>
          <p class='adaptable-center-text-base font-roboto mb-8'>
            Roboto Font works with
          </p>
          <img src={ isDark.value
              ? '/img/tailwindwhite.png'
              : '/img/tailwind.png'
            }
            class='scale-50 tall:scale-75 lg:scale-75'
            width={400} height={200}
            alt=''
          />
        </div>
        <div class={
          `card-container ${control.value} tall:mb-0 mb-10`
        }>
          <State />
          <h3 class='adaptable-center-text-bold'>
            Lets see bitcoin price
          </h3>
          <Call />
        </div>
      </div>
      <AppPaper
        theme={materialTheme.value}
        client:hover
      />
      <div class='centered-button-ctn'>
        <button class='standard-button'
          onClick$={() => nav('/store')}>
            Go to store
        </button>
      </div>
      <div class='flex flex-row gap-7 mt-3 w-fit mx-auto'>
        <button class='blue-button' onClick$={changeBlue}></button>
        <button class='purple-button' onClick$={changePurple}></button>
        <button class='red-button' onClick$={changeRed}></button>
        <button class='emerald-button' onClick$={changeEmerald}></button>
      </div>
    </div>
  </div>;
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'the description'
    }
  ]
};