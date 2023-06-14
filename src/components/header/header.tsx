import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { Toggler } from '../toggler/toggler';
import { useTheme } from '~/hooks/use-theme';

export const Header = component$(() => {

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
          <div class='items-center mt-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <Toggler />
          </div>
        </div>
      </div>
    </nav>
  </div>;

});