import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.error("Password Should be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password Must Have an UpperCase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password Must Have an LowerCase letter");
      return;
    }
    // Sign in Firebase
    signIn(email, password)
      .then((user) => {
        console.log(user);
        e.target.reset();
        toast.success("Successfully Logged In!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Logged In!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              DreamDay Event Managers login portal offers seamless access for
              clients and partners, providing secure and convenient management
              of event details, guest lists, and collaboration tools for
              flawless execution
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <span
                    className="cursor-pointer relative top-10 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn project-btn">
                  Login
                </button>
              </div>
            </form>
            <div className="pl-10 pb-10">
              <p className="flex items-center gap-1">
                <span>Login With Google :</span>{" "}
                <FaGoogle
                  className="cursor-pointer"
                  onClick={handleGoogleSignIn}
                />
              </p>
              <p>
                Not Registered? <br /> Please
                <Link className="text-purple-700 ml-2 underline" to="/register">
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
