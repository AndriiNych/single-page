import { styled, useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import { DrawerHeader } from 'components/interface/windows/drawerWindows';

import { WINDOW } from 'components/interface/windows/constants';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${WINDOW.DRAWER_WIDTH}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export default function MainWindow({ open, children }) {
  const theme = useTheme();

  return (
    <Main open={open} theme={theme}>
      <DrawerHeader />
      {children}
    </Main>
  );
}
