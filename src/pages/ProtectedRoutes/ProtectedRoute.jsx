import { Navigate, Outlet } from 'react-router-dom';

// This component wraps around the routes we want to protect.
// It checks a condition (isAllowed).
// If true -> Renders the child routes (Outlet).
// If false -> Redirects to the login page (Navigate).

const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }) => {
  if (!isAllowed) {
    // Navigate component is the declarative version of useNavigate.
    // replace: true replaces the current history entry so the user can't go back to the protected page.
    return <Navigate to={redirectPath} replace />;
  }

  // If children are provided, render them. Otherwise, render the Outlet.
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
