import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Components/Error/Error';
import Body from './Components/Body/Body';
import RestaurantMenu from './Components/RestaurantMenu/RestaurantMenu';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login'; 
import Profile from './Components/Profile/Profile';
import Admin from './Pages/Admin';
import Dashboard from './Components/Admin/Dashboard';
import AdminLogin from './Components/Admin/AdminLogin';
import UsersList from './Components/Admin/UsersList';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <Profile/>
      },
    ],
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        path: '/admin/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/admin/login',
        element: <AdminLogin/>,
      },
      {
        path: '/admin/users-list',
        element: <UsersList/>,
      },
    ],
  },
]);

function App() {
  return (
  // <Provider store={store}>
    <RouterProvider router={appRouter} />
  // </Provider>
  );
}

export default App;
