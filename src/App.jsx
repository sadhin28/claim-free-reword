import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-[calc(100vh-130px)] bg-gradient-to-t from-indigo-200 via-blue-700 to-purple-300 text-white px-6'><Outlet/></div>
      <Footer/>
    </div>
  );
};

export default App;