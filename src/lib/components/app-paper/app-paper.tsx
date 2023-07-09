/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';

import { useState } from 'react';

import {
  createTheme, Paper,
  Typography, ThemeProvider,
  type ThemeOptions, Button
} from '@mui/material';

export const AppPaper = qwikify$((
  { theme }: {theme: ThemeOptions}
) => {

  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Paper className='my-5 mx-auto max-w-xl py-4 px-8 flex flex-row justify-between' variant='elevation'>
        <Typography className='mt-2' variant='subtitle2'>
          MUI React Counter
        </Typography>
        <Button onClick={() => setCount(count + 1)}>
          {count}
        </Button>
      </Paper>
    </ThemeProvider>
  );

});