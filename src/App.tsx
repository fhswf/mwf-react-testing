import { NavBar } from './components/navbar/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <div className="p-10">
        <Outlet />
      </div>
    </>
  );
}

export { App };
