import { Link, NavLink } from "react-router-dom";
import headerImage from "../../assets/D.png";

const Header = () => {
  return (
    <div className="bg-[#008080]">
      <div className="navbar max-w-[1170px] mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold flex items-top gap-3">
            <div>
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
          <ul className="menu menu-horizontal px-1 w-full">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>

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
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn project-btn">
            Log In
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                className="rounded-full"
              />
            </div>
            <Link className="btn project-btn">Log Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
