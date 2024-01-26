import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Products from "./component/Products/Products";
import ProductDetails from "./component/Products/ProductDetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Products></Products>,
        loader:() => fetch("Data.json")
      },
      {
        path:"/details/:id",
        element:<ProductDetails></ProductDetails>,
        loader:() => fetch("Data.json")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
