import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import styles from './header.css?inline';

import { Toggler } from '..';
import { useTheme } from '~/hooks';

export const Header = component$(() => {

  useStyles$(styles);
  const { control } = useTheme();

  return <div class='flex items-center justify-center'>
    <nav class={`navbar ${control.value}`}>
      <div class='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div class='flex items-center justify-between'>
          <div class='flex-1 flex items-stretch justify-start'>
            <div class='flex-shrink-0 flex items-center'>
              <img
                src='/img/logo.png'
                width={30} height={30}
                alt=''
              />
              <Link href='/' class='ml-4 font-medium adaptable-text'>
                Qwik Template
              </Link>
            </div>
          </div>
          <div class='toggler-container'>
            <Toggler />
          </div>
        </div>
      </div>
    </nav>
  </div>;

});