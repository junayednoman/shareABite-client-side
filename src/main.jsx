import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import AvailableFood from './pages/available food/AvailableFood.jsx';
import AddFood from './pages/private/add food/AddFood.jsx';
import ManageFood from './pages/private/manage food/ManageFood.jsx';
import FoodRequest from './pages/private/my food request/FoodRequest.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import AuthProvider from './auth provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/available-food',
        element: <AvailableFood></AvailableFood>
      },
      {
        path: '/add-food',
        element: <AddFood></AddFood>
      },
      {
        path: '/manage-food',
        element: <ManageFood></ManageFood>
      },
      {
        path: '/my-food-request',
        element: <FoodRequest></FoodRequest>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
