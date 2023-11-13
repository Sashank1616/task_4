import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
const router = createBrowserRouter([
  { path: "/", element:<App/>,
    children:[
    { path: "/", element:<Home/>},
    { path: "/blogs", element:<Blogs/>},
    { path: "/about", element:<About/>},
    { path: "/contact", element:<Contact/>},
    { path: "/services", element:<Services/>},
  ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();

