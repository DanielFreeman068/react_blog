import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './pages/App';

// Import necessary components for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routing system configuration
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  // Add more routes as needed
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing implemented */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);