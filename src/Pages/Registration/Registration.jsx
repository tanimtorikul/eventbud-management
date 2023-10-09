import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Registration = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [registerError, setRegisterError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have at least uppercase character");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setRegisterError("Password should have at least one special character");
      return;
    }
    // console.log(name, email, password);
    setRegisterError("");
    setSuccessMessage("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("User created successfully!");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <>
      <div className="hero px-4 md:px-0 my-8">
        <div className="card w-full md:w-[752px] py-6 shadow-2xl bg-base-100">
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
            {registerError && (
              <p className="text-red-400 text-center font-medium">
                {registerError}
              </p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center font-medium">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
