import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Productlistpage from "../Layout/Product/productlistpage";
import Userregpage from "../Layout/User/Userregpage";
import UserList from "../Layout/User/UserList";
import UserEdit from "../Layout/User/UserEdit";
import Catentrypage from "../Layout/Category/Catentrypage";
import Catlistpage from "../Layout/Category/Catlistpage";
import Catedit from "../Layout/Category/Catedit";
import Productentrypage from "../Layout/Product/Productentrypage";
import Producteditpage from "../Layout/Product/Producteditpage";


const routes = createBrowserRouter([
  
    {
        path: "/",
        element: <App></App>,
      },
      // User Related 
      {
        path: "/userreg",
        element: <Userregpage></Userregpage>,
      },
      {
        path: "/userlist",
        element: <UserList></UserList>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/useredit/:id",
        element: <UserEdit></UserEdit>,
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
      },
      
      // Category Related 
      {
        path: "/catentry",
        element: <Catentrypage></Catentrypage>,
      },
      {
        path: "/catlist",
        element: <Catlistpage></Catlistpage>,
        loader: () => fetch("http://localhost:5000/cats"),
      },
      {
        path: "/catedit/:id",
        element: <Catedit></Catedit>,
        loader: ({ params }) => fetch(`http://localhost:5000/cats/${params.id}`),
      },

        // Product Related 
        {
          path: "/productentry",
          element: <Productentrypage></Productentrypage>,
          loader: () => fetch("http://localhost:5000/cats"),
        },
        {
          path: "/productlist",
          element: <Productlistpage></Productlistpage>,
          loader: () => fetch("http://localhost:5000/products"),
        },
        {
          path: "/productedit/:id",
          element: <Producteditpage></Producteditpage>,
          loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
        },
    

  

]);

export default routes;
