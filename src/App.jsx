import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6'><Outlet/></div>
      <Footer/>
    </div>
  );
};

export default App;