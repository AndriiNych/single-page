import { Routes, Route } from 'react-router-dom';
import PersistentDrawerLeft from 'components/interface/Drawer/Drawer';
// import { WindowApp } from 'components/interface/windows/WindowApp';
import HomePage from 'pages/HomePage';
// import { menuList } from './data';

export default function App() {
  return (
    <div>
      <PersistentDrawerLeft />
      {/* <Routes>
        <Route path="/" element={<PersistentDrawerLeft />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes> */}
      {/* <h1>Hello world </h1>
      <ul>
        {menuList.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
