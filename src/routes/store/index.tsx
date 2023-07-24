import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { State } from '~/common/components';
import { useTheme } from '~/common/hooks';
import { useStorePage } from '~/store/hooks';

import styles from '~/store/styles/store.css?inline';

export default component$(() => {
  const { handleSubmit, handleChange, changeToHome, text } = useStorePage();
  const { control } = useTheme();

  useStyles$(styles);

  return (
    <div class='page-container'>
      <div class='store-container'>
        <div class={`card-container ${control.value}`}>
          <h3 class='store-title'>Write anything in this form and send!</h3>
          <div class='relative z-0 mx-auto mt-6 w-64'>
            <input
              type='text'
              value={text.value}
              name='text'
              class='input-design peer'
              placeholder=' '
              onChange$={handleChange}
            />
            <label for='floating' class='floating-design'>
              here
            </label>
          </div>
          <div class='store-btn'>
            <button
              class='standard-button'
              type='button'
              onClick$={handleSubmit}
            >
              Send
            </button>
          </div>
          <State />
        </div>
        <div class='centered-button-ctn'>
          <button class='standard-button' type='button' onClick$={changeToHome}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Store',
  meta: [
    {
      name: 'description',
      content: 'the description'
    }
  ]
};
