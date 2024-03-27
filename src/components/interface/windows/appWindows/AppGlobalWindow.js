import * as React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppBarWindow from './AppBarWindow';
import { DrawerWindow } from 'components/interface/windows/drawerWindows';
import MainWindow from './MainWindow';

export default function AppGlobalWindow() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    createTheme({
      palette: {
        mode: 'light',
      },
    })
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeTheme = mode => {
    console.log(mode);

    setTheme(
      createTheme({
        palette: {
          mode: mode,
        },
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }} className="min-h-screen  ">
        <CssBaseline />
        <AppBarWindow
          open={open}
          handleDrawerOpen={handleDrawerOpen}
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
