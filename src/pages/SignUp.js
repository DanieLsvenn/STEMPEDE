import React, { useState } from "react";
import loginIcon from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
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

  return (
    <section id="signup" className="bg-gray-100 min-h-screen flex items-center">
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-orange-500">
            Sign Up <span className="text-gray-800">Now!</span>
          </h1>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl mx-auto p-8">
        <div className="w-20 h-20 mx-auto mb-6">
          <img src={loginIcon} alt="login icon" className="object-cover" />
        </div>

        <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>

        <div className="flex flex-col md:flex-row md:gap-4">
          {/* First Column */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div className="grid">
                <label className="font-medium mb-1">Username:</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                  value={data.username}
                  onChange={handleOnChange}
                />
              </div>

              <div className="grid">
                <label className="font-medium mb-1">Phone:</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="phone"
                  type="text"
                  placeholder="Enter Phone number"
                  value={data.phone}
                  onChange={handleOnChange}
                />
              </div>

              <div className="grid">
                <label className="font-medium mb-1">Address:</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="address"
                  type="text"
                  placeholder="Enter Your Address"
                  value={data.address}
                  onChange={handleOnChange}
                />
              </div>
            </form>
          </div>

          {/* Second Column */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div className="grid">
                <label className="font-medium mb-1">Email:</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="email"
                  type="email"
                  placeholder="Enter email credentials"
                  value={data.email}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                <label className="font-medium mb-1">Password:</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    className="flex-grow p-3 bg-transparent outline-none"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={data.password}
                    onChange={handleOnChange}
                  />
                  <button
                    type="button"
                    className="p-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div>
                <label className="font-medium mb-1">Confirm Password:</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    className="flex-grow p-3 bg-transparent outline-none"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={data.confirmPassword}
                    onChange={handleOnChange}
                  />
                  <button
                    type="button"
                    className="p-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </form>

            <p className="my-5 text-center">
              Already have an Account?
              <Link
                className="text-blue-500 hover:underline hover:text-blue-700"
                to={"/login"}
              >
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 w-full rounded-full transition-all duration-200 transform hover:scale-105 mt-6">
          Create Account
        </button>
      </div>
    </section>
  );
};

export default SignUp;
