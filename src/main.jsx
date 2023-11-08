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
import ErrorPage from './pages/error page/ErrorPage.jsx';
import FoodDetails from './pages/private/food details/FoodDetails.jsx';
import PrivateParent from './private parent/PrivateParent.jsx';
import ManageSingleFood from './pages/private/manage single food/ManageSingleFood.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/available-food',
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('http://localhost:5000/foods')
      },
      {
        path: '/add-food',
        element: <PrivateParent><AddFood></AddFood></PrivateParent>
      },
      {
        path: '/manage-food',
        element: <PrivateParent><ManageFood></ManageFood></PrivateParent>
      },
      {
        path: '/my-food-request',
        element: <PrivateParent><FoodRequest></FoodRequest></PrivateParent>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/food/:id',
        element: <PrivateParent><FoodDetails></FoodDetails></PrivateParent>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: '/manage-single-food/:id',
        element: <PrivateParent><ManageSingleFood></ManageSingleFood></PrivateParent>,
        loader: ({ params }) => fetch(`http://localhost:5000/food-request/${params.id}`)
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
