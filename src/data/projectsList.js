import { Route } from 'react-router-dom';
import { Fragment } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import HomePage from 'pages/HomePage';
import ProjectContainer from 'pages/ProjectContainer';
import { malyuvanky, patriot, winter22_23 } from 'projects';

const COMPONENT_TYPE = {
  HTML: 'html',
  REACT: 'react',
};

const drawerHeaderItem = {
  id: 0,
  title: 'Home',
  icon: <HomeIcon />,
  to: '/',
  componentType: COMPONENT_TYPE.REACT,
  componentText: '',
  componentReact: <HomePage />,
  component: <ProjectContainer />,
  drawerText: 'Projects description:',
  notes: '',
};

const projectsList = [
  {
    groupId: 1,
    items: [
      {
        id: 1,
        title: 'UKRAINE',
        icon: <Diversity1Icon />,
        to: '/patriot',
        componentType: COMPONENT_TYPE.HTML,
        componentText: patriot,
        componentReact: '',
        component: <ProjectContainer />,
        drawerText: 'STAND WITH UKRAINE',
        notes: '',
      },
      {
        id: 2,
        title: 'MALYUVANKY',
        icon: <BedroomBabyIcon />,
        to: '/malyuvanky',
        componentType: COMPONENT_TYPE.HTML,
        componentText: malyuvanky,
        componentReact: '',
        component: <ProjectContainer />,
        drawerText: 'MALYUVANKY',
        notes: '',
      },
      {
        id: 3,
        title: 'Winter 22/23',
        icon: <SevereColdIcon />,
        to: '/winter22-23',
        componentType: COMPONENT_TYPE.HTML,
        componentText: winter22_23,
        componentReact: '',
        component: <ProjectContainer />,
        drawerText: 'BEMBI collection of the season 2022-2023',
        notes: '',
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

const getItemFromProjectListByLocation = (path = '') => {
  if (path === '/') {
    return drawerHeaderItem;
  }

  for (let groupIdx = 0; groupIdx < projectsList.length; groupIdx++)
    for (
      let itemIdx = 0;
      itemIdx < projectsList[groupIdx].items.length;
      itemIdx++
    ) {
      if (projectsList[groupIdx].items[itemIdx].to === path) {
        return projectsList[groupIdx].items[itemIdx];
      }
    }

  return {};
};

export {
  COMPONENT_TYPE,
  getItemFromProjectListByLocation,
  getRoutesFromProjectList,
  drawerHeaderItem,
  projectsList,
};
