import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import {
  useTheme, useStorePage
} from '~/lib/hooks';
import { State } from '~/lib/components';

export default component$(() => {

  const {
    handleSubmit, handleChange,
    changeToHome, text
  } = useStorePage();

  const { control } = useTheme();

  return <div class='page-container'>
    <div class='store-container'>
      <div class={`card-container ${control.value}`}>
        <h3 class='store-title'>
          Write anything in this form and send!
        </h3>
        <div class='relative z-0 w-64 mx-auto mt-6'>
          <input
            type='text'
            value={text.value}
            name='text'
            class='peer input-design'
            placeholder=' '
            onChange$={handleChange}
          />
          <label for='floating' class='floating-design'>
            here
          </label>
        </div>
        <div class='store-btn'>
          <button class='standard-button'
            onClick$={handleSubmit}>
              Send
          </button>
        </div>
        <State />
      </div>
      <div class='centered-button-ctn'>
        <button class='standard-button'
          onClick$={changeToHome}>
            Go to Home
        </button>
      </div>
    </div>
  </div>;
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