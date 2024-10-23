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
import Productpage from "../Layout/Home/Productpage";
import ProductDetailpage from "../Layout/Home/ProductDetailpage";
import Dashboardpage from "../Dashboard/Dashboardpage";
import Loginpage from "../Layout/User/Loginpage";
import PrivateRoute from "../routes/PrivateRoute";
import DisplayError from "../Error/DisplayError";
import CommonLayout from "../Layout/Common/CommonLayout";
import ProductBuyListPage from "../Layout/Product/ProductBuyListPage";

const routes = createBrowserRouter([
  
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <DisplayError/>,
    children:[
      {
        path: "/",
        element: <App />,
      },
     // Home Page
    {
      path: "/cathome/:id",
      element: <Productpage></Productpage>,
      loader: ({ params }) => fetch(`http://localhost:5000/cathome/${params.id}`),
    },
    {
      path: "/producthome/:id",
      element: <ProductDetailpage></ProductDetailpage>,
      loader: ({ params }) => fetch(`http://localhost:5000/producthome/${params.id}`),
    },

    //All Product Loading
    {
      path: "/producthome",
      element: (
        <PrivateRoute>
            <Productpage/>
        </PrivateRoute>
        ),
      loader: ({ params }) => fetch(`http://localhost:5000/products/`),
    },
    // User Related 
    {
      path: "/userreg",
      element: <Userregpage/>,
    },
    {
      path: "/login",
      element: <Loginpage />,
    },
    ]
  },
    
    {
      path: "/dashboard",
      element: <Dashboardpage />,
      errorElement: <DisplayError/>,
      children:[
       
// User Related 
      {
        path: "/dashboard/userlist",
        element: <UserList/>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/dashboard/useredit/:id",
        element: <UserEdit></UserEdit>,
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
      },
      
       // Product Buy Related 
       {
        path: "/dashboard/productbuylist",
        element: <ProductBuyListPage></ProductBuyListPage>,
      },
       // Category Related 
       {
        path: "/dashboard/catentry",
        element: <Catentrypage></Catentrypage>,
      },
      {
        path: "/dashboard/catlist",
        element: <Catlistpage></Catlistpage>,
        loader: () => fetch("http://localhost:5000/cats"),
      },
      {
        path: "/dashboard/catedit/:id",
        element: <Catedit></Catedit>,
        loader: ({ params }) => fetch(`http://localhost:5000/cats/${params.id}`),
      },
       // Product Related 
       {
        path: "/dashboard/productentry",
        element: <Productentrypage></Productentrypage>,
        loader: () => fetch("http://localhost:5000/cats"),
      },
      {
        path: "/dashboard/productlist",
        element: <Productlistpage></Productlistpage>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/dashboard/productedit/:id",
        element: <Producteditpage></Producteditpage>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
      },
      ]
    },
      
      
     

       

]);

export default routes;
