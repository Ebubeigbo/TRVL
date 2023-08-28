import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
