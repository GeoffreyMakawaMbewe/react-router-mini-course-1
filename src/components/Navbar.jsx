import { NavLink } from 'react-router-dom';

const Navbar = ({ user, onLogin, onLogout }) => {
  const getLinkClass = ({ isActive }) => {
    const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    
    if (isActive) {
      return `${baseClass} bg-gray-900 text-white`;
    } else {
      return `${baseClass} text-gray-300 hover:bg-gray-700 hover:text-white`;
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <ul className="flex space-x-2 items-center">
        <li>
          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/active-nav" className={getLinkClass}>
            Tabs
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={getLinkClass}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={getLinkClass}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={getLinkClass}>
            Admin Panel
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-300 text-sm">Welcome, {user.name}</span>
            <button 
              onClick={onLogout}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            onClick={onLogin}
            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
