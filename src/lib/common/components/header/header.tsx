import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { Toggler } from '..';
import { useTheme } from '~/common/hooks';

import styles from './header.css?inline';

import ImgLogo from '~/assets/logo.png?jsx';

export const Header = component$(() => {
  const { control } = useTheme();

  useStyles$(styles);

  return (
    <div class='flex items-center justify-center'>
      <nav class={`navbar ${control.value}`}>
        <div class='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div class='flex items-center justify-between'>
            <div class='flex flex-1 items-stretch justify-start'>
              <div class='flex shrink-0 items-center'>
                <div class='h-10 w-10'>
                  <ImgLogo />
                </div>
                <Link href='/' class='adaptable-text ml-4 font-medium'>
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
    </div>
  );
});
