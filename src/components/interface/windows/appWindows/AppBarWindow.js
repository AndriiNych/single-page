import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { WINDOW } from 'components/interface/windows/constants';
import { getItemFromProjectListByLocation } from 'data';
import { SwitchMode } from 'components/interface/components/SwitchMode';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${WINDOW.DRAWER_WIDTH}px)`,
    marginLeft: `${WINDOW.DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarWindow({
  open,
  handleDrawerOpen,
  isChecked,
  handleChangeTheme,
}) {
  const theme = useTheme();
  const location = useLocation();
  const item = getItemFromProjectListByLocation(location.pathname);

  return (
    <AppBar position="fixed" open={open} theme={theme}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Box className="flex justify-between items-center w-full">
          <Typography variant="h6" noWrap component="div">
            {item.drawerText}
          </Typography>
          <IconButton>
            <SwitchMode
              size="small"
              isChecked={isChecked}
              handleChangeTheme={handleChangeTheme}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
