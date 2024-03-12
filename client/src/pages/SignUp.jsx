import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/auth/signup", userData); // Use axios.post instead of fetch
      console.log(res);
      console.log(res.data); // Access response data directly
    } catch (error) {
      console.log(error);
    }
  };

  const handlechange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen   flex flex-col md:flex-row md:justify-around mx-2 items-center mt-5">
      {/* left */}
      <div className="flex flex-col max-w-full p-3   ">
        <Link
          className="self-center whitespace-nowrap  text-4xl  mt-10 font-semibold dark:text-white-white"
          to="/"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white  mt-5 ">
            Talal's
          </span>
          <span>Blogs</span>
        </Link>
        <br />
        <p className="text-center mx-4 mt-10 text-md font-semibold">
          Signup On Our blog web to get latest updates from us.
        </p>
      </div>
      {/* right */}

      <div className=" w-full px-4  md:w-[18rem]   ">
        <form
          className=" mx-auto w-full "
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="relative z-0 min-w-full mb-5 group">
            <input
              onChange={(e) => handlechange(e)}
              required
              type="text"
              name="username"
              id="username"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Username"
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => handlechange(e)}
              required
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Email address"
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => handlechange(e)}
              required
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <div className="flex gap-2">
          <span>Have an account? </span>
          <Link className="text-blue-500" to={"/sign-in"}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
