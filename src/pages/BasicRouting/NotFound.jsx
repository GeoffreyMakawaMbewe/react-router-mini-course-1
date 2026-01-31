import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-4">Oops! Page not found.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
