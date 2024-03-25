import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const projectsList = [
  [
    {
      id: 1,
      title: 'First App',
      icon: <FilterDramaIcon />,
      to: '',
      component: '',
    },
    { id: 2, title: 'Second App', icon: <InboxIcon />, to: '', component: '' },
    { id: 3, title: 'Third App', icon: <MailIcon />, to: '', component: '' },
  ],
  [
    {
      id: 4,
      title: 'First App 2',
      icon: <FilterDramaIcon />,
      to: '',
      component: '',
    },
    {
      id: 5,
      title: 'Second App 2',
      icon: <InboxIcon />,
      to: '',
      component: '',
    },
    { id: 63, title: 'Third App 2', icon: <MailIcon />, to: '', component: '' },
  ],
];

export default projectsList;
