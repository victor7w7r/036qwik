import { component$, useStyles$ } from '@builder.io/qwik'
import { useNavigate, type DocumentHead } from '@builder.io/qwik-city'

import { State } from '~/common/components'
import { useTheme } from '~/common/hooks'
import { AppPaper, Call } from '~/home/components'

import styles from '~/home/styles/home.css?inline'

export default component$(() => {
  const nav = useNavigate()
  const {
    control,
    isDark,
    materialTheme,
    changeBlue,
    changePurple,
    changeRed,
    changeEmerald
  } = useTheme()

  useStyles$(styles)

  return (
    <div class='flex h-min flex-col justify-center backdrop-blur-xl'>
      <div class='card-flex'>
        <div class={`card-container ${control.value}`}>
          <p class='adaptable-amina'>Made with love by</p>
          <img
            src={isDark.value ? '/img/brandwhite.png' : '/img/brand.png'}
            class='scale-75 lg:scale-100'
            width={400}
            height={200}
            alt=''
          />
          <h3 class='adaptable-center-text-base mb-4 font-semibold'>
            Happy Hacking! with Typescript?
          </h3>
          <p class='adaptable-center-text-base mb-8 font-roboto'>
            Roboto Font works with
          </p>
          <img
            src={isDark.value ? '/img/tailwindwhite.png' : '/img/tailwind.png'}
            class='scale-50 lg:scale-75 tall:scale-75'
            width={400}
            height={200}
            alt=''
          />
        </div>
        <div class={`card-container ${control.value} mb-10 tall:mb-0`}>
          <State />
          <h3 class='adaptable-center-text-bold'>Lets see bitcoin price</h3>
          <Call />
        </div>
      </div>
      <AppPaper theme={materialTheme.value} client:hover />
      <div class='centered-button-ctn'>
        <button
          class='standard-button'
          type='button'
          onClick$={() => nav('/store')}
        >
          Go to store
        </button>
      </div>
      <div class='mx-auto -mt-1 flex w-fit flex-row gap-7'>
        <button
          class='blue-button'
          type='button'
          onClick$={changeBlue}
        ></button>
        <button
          class='purple-button'
          type='button'
          onClick$={changePurple}
        ></button>
        <button class='red-button' type='button' onClick$={changeRed}></button>
        <button
          class='emerald-button'
          type='button'
          onClick$={changeEmerald}
        ></button>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'the description'
    }
  ]
}
