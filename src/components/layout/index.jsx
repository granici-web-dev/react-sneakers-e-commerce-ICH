// import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

function Layout() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
