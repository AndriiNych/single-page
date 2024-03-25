import { Route, Routes } from 'react-router-dom';

import { AppGlobalWindow } from 'components';
import Page404 from 'pages/Page404';
import HomePage from 'pages/HomePage';
import FirstProject from 'pages/FirstProject';
import SecondProject from 'pages/secodProject';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppGlobalWindow />}>
        <Route index element={<HomePage />} />
        <Route path="/first" element={<FirstProject />} />
        <Route path="/second" element={<SecondProject />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>

    // <div>
    //   <AppGlobalWindow />
    // </div>
  );
}
