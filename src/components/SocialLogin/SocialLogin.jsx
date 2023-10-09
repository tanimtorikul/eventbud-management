import { useContext } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        toast.success("User logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message)
      });
  };
  return (
    <div className="p-6 rounded-lg ">
      <h2 className="text-xl mb-4 text-center ">Continue with</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          <FaGoogle className="mr-2" /> Google
        </button>
        <button className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">
          <FaGithub className="mr-2" /> GitHub
        </button>
        <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          <FaFacebook className="mr-2" /> Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
