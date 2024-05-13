import { Link, NavLink } from "react-router-dom";
import headerImage from "../../assets/D.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import noImage from "../../assets/images/No Picture Available .png";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="bg-[#008080]">
      <div className="navbar max-w-[1170px] mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="mr-2 bg-green-600 p-2 rounded-lg lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-[#008080] rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="">DashBoard</NavLink>
                  <ul className="p-2 text-[#001F3F]">
                    <li>
                      <NavLink to="/addService">Add Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/manageService">Manage Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/bookedService">Booked-Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/toDoService">Service-To-Do</NavLink>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="text-lg lg:text-xl font-bold flex items-top gap-3"
          >
            <div className="hidden lg:block">
              <img className="h-16" src={headerImage} alt="" />
            </div>
            <div>
              <span>DreamDay</span> <br />
              <span className="text-[#001F3F] mr-2">Event</span>
              <span className="text-[#FF6F61]">Manager</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 w-full z-[10]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>

            {user && (
              <li>
                <details>
                  <summary>DashBoard</summary>
                  <ul className="min-w-[200px] text-[#001F3F]">
                    <li>
                      <NavLink to="/addService">Add Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/manageService">Manage Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/bookedService">Booked-Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/toDoService">Service-To-Do</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <Link to="/login" className="btn project-btn">
              Log In
            </Link>
          ) : (
            <div className="flex items-center gap-5">
              <div className="w-12 rounded-full">
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  data-tooltip-place="left"
                >
                  <img
                    alt=""
                    src={
                      user?.photoURL?.includes("http") ? user.photoURL : noImage
                    }
                    className="rounded-full bg-white"
                  />
                </a>
                <Tooltip id="my-tooltip" />
              </div>
              <Link onClick={logOut} className="btn project-btn">
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
