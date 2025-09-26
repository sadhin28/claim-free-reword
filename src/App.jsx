import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'><Outlet/></div>
      <Footer/>
    </div>
  );
};

export default App;