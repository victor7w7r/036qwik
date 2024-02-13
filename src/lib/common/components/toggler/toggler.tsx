import { component$, useStyles$ } from '@builder.io/qwik'

import { useTheme } from '~/common/hooks'

import styles from './toggler.css?inline'

export const Toggler = component$(() => {
  const { isDark, toggle, togglePeer } = useTheme()

  useStyles$(styles)

  return (
    <div class='relative'>
      <div class='flex w-full items-center justify-center'>
        <label
          for='checked-toggle'
          class='mb-4 inline-flex cursor-pointer items-center'
        >
          <input
            type='checkbox'
            value=''
            id='checked-toggle'
            class='peer sr-only'
            checked={isDark.value}
            onChange$={toggle}
          />
          <div class={`${togglePeer.value} toggle-design peer`}></div>
          <span class='toggle-title'>Dark Mode</span>
        </label>
      </div>
    </div>
  )
})
