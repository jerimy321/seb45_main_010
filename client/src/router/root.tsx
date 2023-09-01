import App from 'App';
import DetailPage from 'pages/DetailPage/DetailPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Profile from 'pages/Profile/Profile';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'detail',
        element: <DetailPage />,
      },
    ],
  },
]);
