// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/MergedProvider";
import React, { useState } from "react";
import loginIcon from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from '../api/axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";


const LOGIN_URL = 'api/Auth/login'

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    emailOrUsername: "",
    password: "", 
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify(data),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      );

      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.data?.token;
      const refreshToken = response?.data?.data?.refreshToken; 
      const roles = response?.data?.data?.roles.map(role => role.trim());

      // Store tokens in local storage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Update auth context
      setAuth({ user: data.emailOrUsername, roles, accessToken, refreshToken });

      setData({ emailOrUsername: "", password: "" });
      toast.success("Login successful!");
      navigate(from, { replace: true });

    } catch (error) {
      if (!error?.response) {
        toast.error("No Server Response");
      } else if (error.response?.status === 400) {
        toast.error("Missing Email/Username or Password");
      } else if (error.response?.status === 401) {
        toast.error("Unauthorized");
      } else {
        toast.error("Login Failed");
      }
    }
  };

  return (
    <section
      id="login"
      className="bg-gray-100 min-h-screen flex items-center flex-col"
    >
      <ToastContainer />
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-yellow-500 m-6">
            Log In <span className="text-gray-800">and start Exploring!</span>
          </h1>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl mx-auto p-6">
        <div className="w-20 h-20 mx-auto mb-6">
          <img src={loginIcon} alt="login icon" className="object-cover" />
        </div>

        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid">
            <label className="font-medium mb-1">Email:</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="emailOrUsername"
              value={data.emailOrUsername}
              onChange={handleOnChange}
              type="text"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="font-medium mb-1">Password:</label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
              <input
                className="flex-grow p-3 bg-transparent outline-none"
                name="password"
                value={data.password}
                onChange={handleOnChange}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-blue-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            
            <Link
              className="block w-fit mt-1 ml-auto text-blue-500 hover:underline hover:text-blue-700"
              to={"/forgot-password"}
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 w-full rounded-full transition-all duration-200 transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="my-5 text-center">
          Don't have an account?
          <Link
            className="text-blue-500 hover:underline hover:text-blue-700"
            to={"/sign-up"}
          >
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
