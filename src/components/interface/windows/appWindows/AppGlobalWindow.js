import * as React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppBarWindow from './AppBarWindow';
import { DrawerWindow } from 'components/interface/windows/drawerWindows';
import MainWindow from './MainWindow';

const currentTheme = mode =>
  createTheme({
    palette: {
      mode: mode,
    },
  });

const currentMode = isChecked => (isChecked ? 'dark' : 'light');

const THEME_MODE_NAME = 'themeMode';

const getThemeModeFromLocalStorageAsChecked = () => {
  const mode = localStorage.getItem(THEME_MODE_NAME) || '';
  return mode === 'dark' ? true : false;
};

const setThemeModeToLocalStorage = mode => {
  localStorage.setItem(THEME_MODE_NAME, mode);
};

export default function AppGlobalWindow() {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(
    getThemeModeFromLocalStorageAsChecked()
  );
  const [theme, setTheme] = useState(currentTheme(currentMode(isChecked)));

  React.useEffect(() => {
    setTheme(currentTheme(currentMode(isChecked)));
  }, [isChecked]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeTheme = isChecked => {
    setThemeModeToLocalStorage(currentMode(isChecked));
    setIsChecked(isChecked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }} className="min-h-screen  ">
        <CssBaseline />
        <AppBarWindow
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          isChecked={isChecked}
          handleChangeTheme={handleChangeTheme}
        />
        <DrawerWindow open={open} handleDrawerClose={handleDrawerClose} />
        <MainWindow open={open}>
          <Outlet />
        </MainWindow>
      </Box>
    </ThemeProvider>
  );
}
