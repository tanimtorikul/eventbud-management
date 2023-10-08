import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <>
      <div className="hero px-4 md:px-0 my-12">
        <div className="card w-full md:w-[752px] py-12 shadow-2xl bg-base-100">
          <form
            onSubmit={handleRegister}
            className="card-body w-full md:w-[560px] mx-auto"
          >
            <h2 className="text-4xl text-center font-semibold mb-[50px]">
              Create your account
            </h2>
            <p className="border border-[#E7E7E7] mb-[50px]"></p>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input bg-[#F3F3F3] mb-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Email address</span>
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
                placeholder="Create a password"
                className="input bg-[#F3F3F3] mb-2"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white">
                Register
              </button>
            </div>
            <h2 className="text-center text-lg font-medium">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-red-400">Login</span>
              </Link>{" "}
            </h2>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
