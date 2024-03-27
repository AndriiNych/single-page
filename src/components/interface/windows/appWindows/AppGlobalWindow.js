import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBarWindow from './AppBarWindow';
import { DrawerWindow } from 'components/interface/windows/drawerWindows';
import MainWindow from './MainWindow';

export default function AppGlobalWindow() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} className="min-h-screen bg-gray-200 ">
      <CssBaseline />
      <AppBarWindow open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerWindow open={open} handleDrawerClose={handleDrawerClose} />
      <MainWindow open={open}>
        <Outlet />
      </MainWindow>
    </Box>
  );
}
