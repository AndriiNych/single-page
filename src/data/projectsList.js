import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';

import HomePage from 'pages/HomePage';
import FirstProject from 'pages/FirstProject';
import SecondProject from 'pages/SecondProject';

const drawerHeaderItem = {
  id: 0,
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
        component: <FirstProject />,
      },
      {
        id: 2,
        title: 'Second App',
        icon: <InboxIcon />,
        to: '/second',
        component: <SecondProject />,
      },
    ],
  },
];

const getRoutesFromProjectList = () => {
  return (
    <>
      <Route index element={<HomePage />} />

      {projectsList.map(group => {
        return (
          <Fragment key={group.groupId}>
            {group.items.map(item => {
              const component = item.component;
              // component.props = item.id;
              return (
                <Fragment key={item.id}>
                  <Route path={item.to} element={component} />
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </>
  );
};

export { getRoutesFromProjectList, drawerHeaderItem, projectsList };
