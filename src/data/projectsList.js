import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';

import HomePage from 'pages/HomePage';

const drawerHeaderItem = {
  id: 1,
  title: 'Home',
  icon: <HomeIcon />,
  to: '/',
  component: <HomePage />,
};

const projectsList = [
  {
    groupId: 1,
    items: [
      {
        id: 1,
        title: 'First App',
        icon: <FilterDramaIcon />,
        to: '/first',
        component: '',
      },
      {
        id: 2,
        title: 'Second App',
        icon: <InboxIcon />,
        to: '/second',
        component: '',
      },
    ],
  },
];

export { drawerHeaderItem, projectsList };
