import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
// const container = useRef();

// useEffect(() => {
//   container.current.innerHTML = htmlText;
// });

import { getItemFromProjectListByLocation, COMPONENT_TYPE } from 'data';

export default function ProjectContainer() {
  const location = useLocation();
  console.log(location.pathname);
  const project = getItemFromProjectListByLocation(location.pathname);
  console.log(project);
  const container = useRef();

  useEffect(() => {
    if (project.componentType === COMPONENT_TYPE.HTML) {
      container.current.innerHTML = project.componentText();
    }
  });

  if (project.componentType === COMPONENT_TYPE.HTML) {
    return <div ref={container} className="ss" />;
  }

  return <>{project.componentReact}</>;
}
