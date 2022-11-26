import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Layout from './components/Layout/Layout';
import Login from "./components/Login/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element:
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
)
