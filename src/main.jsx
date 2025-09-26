import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Offer from './components/Offer.jsx';
import Home from './components/Home.jsx';
import About from './components/AboutUs.jsx';
import FAQ from './components/Faq.jsx';
import HowItWorks from './components/HowitWork.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
     { path:'/offers',
      element:<Offer/>,
      loader:()=>fetch('https://dbj3fg9om9jaj.cloudfront.net/public/offers/feed.php?user_id=581751&api_key=10e8f7fa334baa4390fb103bbf82ad04&s1=&s2') 
     },
     {
      path:'/',
      element:<Home/>
     },
     {
      path:"/about",
      element:<About/>
     },
     {
      path:"/faq",
      element:<FAQ/>
     },
     {
      path:"/how-it-works",
      element:<HowItWorks/>
     }
    ]},

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
