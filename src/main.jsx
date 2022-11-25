import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
)
