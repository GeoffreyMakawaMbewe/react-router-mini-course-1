import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogin, onLogout }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <ul className="flex space-x-4 items-center">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-300">Login (useNavigate)</Link>
        </li>
        <li>
          <Link to="/profile" className="text-yellow-400 hover:text-yellow-300 font-semibold">Profile (Protected)</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-300">Welcome, {user.name}</span>
            <button 
              onClick={onLogout}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            onClick={onLogin}
            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
          >
            Simulate Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
