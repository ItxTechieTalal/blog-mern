import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Spinner } from "flowbite-react";


const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      console.log("Please fill all the fields");
    }
    try {
      setLoading(true);
      const res = await axios.post("api/auth/signin", userData); // Use axios.post instead of fetch
      console.log(res);
      console.log(res.data);
      setSuccessMessage("SignIn successful");
      navigate("/");

      setErrorMessage(null);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message + ". Invalid credentials");
      setLoading(false);
      console.log(error);
    }
  };

  const handlechange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value.trim() }); // trim for to remove space
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
          SignIn On Our blog web to get latest updates from us.
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
            className="text-white bg-blue-700 mb-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={loading}
          >
            {loading ? (
              <div className="flex gap-5 items-center ">
                <Spinner className="mb-[0.15rem] " size={"sm"} />
                <span>Loading</span>
              </div>
            ) : (
              "SignIn"
            )}
          </button>
          {errorMessage && (
            <Alert className="my-2" color="failure">
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert className="my-2" color="success">
              {successMessage}
            </Alert>
          )}
        </form>
        <div className="flex gap-2">
          <span> Don't have an account? </span>
          <Link className="text-blue-500" to={"/sign-up"}>
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
