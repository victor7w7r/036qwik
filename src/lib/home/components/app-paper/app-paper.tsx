/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react'

import { useState } from 'react'

import {
  createTheme,
  Paper,
  Typography,
  ThemeProvider,
  type ThemeOptions,
  Button
} from '@mui/material'

export const AppPaper = qwikify$(({ theme }: { theme: ThemeOptions }) => {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Paper
        className='mx-auto mt-5 flex max-w-xl flex-row justify-between px-8 py-2'
        variant='elevation'
      >
        <Typography className='mt-2' variant='subtitle2'>
          MUI React Counter
        </Typography>
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </Paper>
    </ThemeProvider>
  )
})
