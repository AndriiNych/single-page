import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import { getItemFromProjectListByLocation, COMPONENT_TYPE } from 'data';

export default function ProjectContainer() {
  const location = useLocation();
  const project = getItemFromProjectListByLocation(location.pathname);
  const container = useRef();

  useEffect(() => {
    if (project.componentType === COMPONENT_TYPE.HTML) {
      container.current.innerHTML = project.componentText();
    }
  });

  if (project.componentType === COMPONENT_TYPE.HTML) {
    return <div ref={container} />;
  }

  return <>{project.componentReact}</>;
}
