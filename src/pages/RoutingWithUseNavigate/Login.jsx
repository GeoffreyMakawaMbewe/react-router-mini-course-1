import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a login process (e.g., API call)
    console.log("Logging in...");
    
    // After login is successful, redirect to the dashboard
    // The { replace: true } option prevents the user from going back to the login page
    // by clicking the browser's "Back" button.
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800">Login Page</h2>
      <p className="text-center text-gray-600">Click the button below to simulate a login.</p>
      
      <button 
        onClick={handleLogin}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
