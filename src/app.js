import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

// const AppLayout = () => (
//   // <React.Fragment>
//   <>
//     <Header />
//     <Body />
//     <Footer />
//   </>
//   // </React.Fragment>
// );

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

function App() {
    return (
        <RouterProvider router={appRouter} />
    );
}

export default App;
