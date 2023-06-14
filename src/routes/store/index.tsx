import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import {
  floatingLabelDesign,
  inputDesign,
  useStorePage
} from '~/hooks/use-storepage';
import { useTheme } from '~/hooks/use-theme';
import { State } from '../../components/state/state';

export default component$(() => {

  const {
    handleSubmit, handleChange,
    changeToHome, text
  } = useStorePage();

  const { control } = useTheme();

  return <div class='absolute h-screen inset-0 backdrop-blur-xl'>
    <div class='flex items-center mt-32 lg:items-stretch lg:justify-evenly lg:h-3/6'>
      <div class={`card-container ${control}`}>
        <h3 class='adaptable-center-text text-base lg:text-xl font-semibold mb-4'>
          Write anything in this form and send!
        </h3>
        <div class='relative z-0 w-64 mx-auto mt-6'>
          <input
            type='text'
            value={text.value}
            name='text'
            class={inputDesign}
            placeholder=' '
            onChange$={handleChange}
          />
          <label for='floating' class={floatingLabelDesign}>
            here
          </label>
          </div>
          <div class='flex items-center justify-center my-8 tall:my-12'>
            <button class='standard-button' onClick$={handleSubmit}>
              Send
            </button>
          </div>
        <State />
      </div>
    </div>
    <div class='flex items-center justify-center my-8 tall:my-12'>
      <button class='standard-button'
        onClick$={changeToHome}>
          Go to Home
      </button>
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