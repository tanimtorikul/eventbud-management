import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setLoginError("");
    setSuccessMessage("");

    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
        setSuccessMessage("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.log(error);
        setLoginError("Invalid email or password. Please try again.");
      });
  };
  return (
    <>
      <div className="hero px-4 md:px-0 my-8">
        <div className="card w-full md:w-[752px]  py-6 shadow-2xl bg-base-100">
          <form
            onSubmit={handleLogin}
            className="card-body w-full md:w-[560px] mx-auto"
          >
            <h2 className="text-4xl text-center font-semibold mb-[50px]">
              Login your account
            </h2>
            <p className="border border-[#E7E7E7] mb-[50px]"></p>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold mb-2">
                  Email address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input bg-[#F3F3F3] mb-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input bg-[#F3F3F3]"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-base"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#11C0B4] hover:bg-green-600 text-white">
                Login
              </button>
            </div>
            <h2 className="text-center text-lg font-medium">
              Don't Have An Account?{" "}
              <Link to="/register">
                <span className="text-red-600">Register</span>
              </Link>{" "}
            </h2>
            {loginError && (
              <p className="text-red-500 font-medium text-center">
                {loginError}
              </p>
            )}
            {successMessage && (
              <p className="text-green-500 font-bold text-center">
                {successMessage}
              </p>
            )}
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Login;
