import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Productpage from "../Layout/Home/Productpage";
//import Loader from "../Pages/Loader";

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);
  
    if (user) {
      return <Productpage/>;
    }
  
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;