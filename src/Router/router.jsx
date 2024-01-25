import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import Form from '../forms/Form';
import Button from '../buttons/Button';
import Hero from '../hero/Hero';

//templates

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/form',
        element: <Form />,
      },
      {
        path: '/button',
        element: <Button />,
      },
      {
        path: '/hero',
        element: <Hero />,
      },
    ],
  },
]);

export default router;
