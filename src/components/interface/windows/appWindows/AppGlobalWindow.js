import { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBarWindow from './AppBarWindow';
import DrawerWindow from './DrawerWindow';
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarWindow open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerWindow open={open} handleDrawerClose={handleDrawerClose} />
      <MainWindow open={open} />
    </Box>
  );
}
