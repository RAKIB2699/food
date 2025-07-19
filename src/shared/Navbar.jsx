import { NavLink, Link } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink to="/" className="hover:text-green-400">Home</NavLink></li>
      <li><NavLink to="/available-foods" className="hover:text-green-400">Available Foods</NavLink></li>
      <li><NavLink to="/add-food" className="hover:text-green-400">Add Food</NavLink></li>
      <li><NavLink to="/manage-my-foods" className="hover:text-green-400">Manage My Foods</NavLink></li>
      <li><NavLink to="/my-requests" className="hover:text-green-400">My Food Request</NavLink></li>
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
        <Link to="/" className="btn btn-ghost text-xl text-green-500">FoodShare</Link>
      </div>

     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

    
      <div className="navbar-end">
        <Link to={'/login'}><button className="btn">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
