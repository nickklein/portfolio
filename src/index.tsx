import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './react/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './react/pages/Homepage';
import Work from './react/pages/Work';
import ErrorPage from './react/pages/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage title="Nick Klein" />,
    },
    {
        path: "/work/:slug",
        element: <Work />,
        errorElement: <ErrorPage />
    }
]);


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);