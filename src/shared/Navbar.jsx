import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {


  const { user, logOut } = useContext(AuthContext)
  const Navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch((err) => console.error(err))
    Navigate('/')

  }

  const navLinks = (
    <>
      <li><NavLink to="/" className="hover:text-green-400">Home</NavLink></li>
      <li><NavLink to="/availablefood" className="hover:text-green-400">Available Foods</NavLink></li>
      <li><NavLink to="/addfood" className="hover:text-green-400">Add Food</NavLink></li>
      <li><NavLink to="/manage-food" className="hover:text-green-400">Manage My Foods</NavLink></li>
      <li><NavLink to="/myfoodrequest" className="hover:text-green-400">My Food Request</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-gray-800 text-white w-11/12 mx-auto shadow-md rounded-md px-4">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-green-500">Foody</Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>


      <div className="navbar-end">

        {user ? (
          <div className="flex items-center gap-4 relative group">

            <img
              src={user.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border cursor-pointer"
            />


            <div className="absolute top-12 right-0 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 z-50">
              {user.displayName || ''}
            </div>


            <button onClick={handleLogout} className="btn btn-sm bg-red-500 hover:bg-red-600 text-white">
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="btn">Log in</NavLink>
        )}

      </div>
    </div>
  );
};

export default Navbar;
