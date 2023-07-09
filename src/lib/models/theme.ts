import type { ThemeOptions } from "@mui/material";

type CommonElements = {
  white: string,
  dark: string,
  control: string,
};

export type AppTheme = CommonElements & {
  isDark: boolean,
  togglePeer: string,
  material: ThemeOptions
};

const stdElements: CommonElements = {
  white: 'bg-white',
  dark: 'dark:bg-zinc-900',
  control: 'bg-slate-700/30',
};

export const whiteTheme: AppTheme = {
  ...stdElements,
  isDark: false,
  togglePeer: 'peer-checked:bg-white',
  material: {
    palette: {
      primary: { main: '#2c8edb' },
      secondary: { main: '#000' },
      success: { main: '#fff' },
      divider: '#e0e0e0',
      background: {
        paper: '#f5f5f5'
      },
      text: {
        primary: '#000',
        secondary: '#aaa'
      }
    }
  }
};

export const darkTheme: AppTheme = {
  ...stdElements,
  isDark: true,
  togglePeer: 'peer-checked:bg-dark',
  material: {
    palette: {
      primary: { main: '#ff0000' },
      secondary: { main: '#fff' },
      divider: '#424242',
      background: {
        paper: '#252525'
      },
      text: {
        primary: '#fff',
        secondary: '#aaa'
      }
    }
  }
};