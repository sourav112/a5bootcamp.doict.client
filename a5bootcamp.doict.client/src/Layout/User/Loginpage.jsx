import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faSignIn } from '@fortawesome/free-solid-svg-icons/faSignIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from 'react-helmet-async';
//import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Loginpage = () => {

    const { loginWithEmail } = useContext(AuthContext);

    //const googleProvider = new GoogleAuthProvider();
   // const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("Location in the login page", location);
  
    const handleLogin = (event) => {
      event.preventDefault();
  
      const form = new FormData(event.currentTarget);
      console.log(form);
  
      const email = form.get("email");
      const password = form.get("password");
      console.log(email, password);
  
      loginWithEmail(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("User Login Successful", {
            position: "top-right",
          });
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
return(
  
    <div className='flex items-center justify-center'>
      <Helmet>
          <title>Moviebazar| Login</title>
        </Helmet>
    <div class="flex justify-center items-center w-screen h-screen p-5">
  <div class="bg-white shadow-md dark:shadow-gray-600 rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/3">
      <h1 class="text-2xl font-semibold mb-4 text-center text-gray-900">Login Here</h1>
      <form
      onSubmit={handleLogin}
      >
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email <span class="text-red-500">*</span>
              </label>
              <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="email" name='email' type="email" placeholder="Email"/>
          </div>
          <div class="mb-6">
              <label class="block text-gray-700  text-sm font-bold mb-2" htmlFor="password">
                  Password <span class="text-red-500">*</span>
              </label>
              <input class="shadow appearance-none border border-red-500 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " id="password" name='password' type="password" placeholder="******************"/>
          </div>
          <div class="items-center justify-between">
              <button class="btn btn-primary w-full" type="submit">
              <FontAwesomeIcon icon={faSignIn}/> Login
              </button>
              
              <p className='text-gray-700 text-sm font-bold text-center'>
                Not Have an Account? Please <Link to="/userreg"> <span className='text-blue-600'>Register</span> </Link>
              </p>
          </div>
      </form>
  </div>
</div>
  </div>
);
}


export default Loginpage;