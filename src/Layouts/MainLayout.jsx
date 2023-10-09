import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen font-roboto'>
      <div className='py-2 flex-grow'>
        <div className='max-w-[1440px] mx-auto'>
         <div>
         <Navbar />
         </div>
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;
