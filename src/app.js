import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Components/Error/Error';
import Body from './Components/Body/Body';
import RestaurantMenu from './Components/RestaurantMenu/RestaurantMenu';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
