import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppGlobalWindow } from 'components';
import Page404 from 'pages/Page404';
import { getRoutesFromProjectList } from 'data';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppGlobalWindow />}>
        {getRoutesFromProjectList()}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
