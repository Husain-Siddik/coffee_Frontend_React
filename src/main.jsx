import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Pages/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './Pages/UpdateCoffee/UpdateCoffee.jsx';
import Home from './Pages/Home/Home.jsx';
import Swal from 'sweetalert2'
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './privetRoutes/PrivateRoute.jsx';
import CoffeeDetails from './Pages/viewDetails/CoffeeDetails.jsx';
// import AuthProvider from './providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/addCoffee',
        element:
        <PrivateRoute> <AddCoffee /> </PrivateRoute>
        ,
      },
      {
        path: '/updateCoffee/:id',
        element:<PrivateRoute><UpdateCoffee /></PrivateRoute> ,
        loader: ({ params }) => fetch(`
         ${import.meta.env.VITE_Api_url}/addCoffee/${params.id}`)
      },
      {
       path :'/coffeeDetails/:id',
       element:<CoffeeDetails/>,
       loader:({ params })=>fetch(`${import.meta.env.VITE_Api_url}/addCoffee/${params.id}`)
       
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element:<PrivateRoute><Register /></PrivateRoute>  
      }
    ],
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>



  </StrictMode>,
)
