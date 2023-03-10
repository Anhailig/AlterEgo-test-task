import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';


export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className='wrapper'>
        <Outlet />
      </main>
    </>
  );
}
