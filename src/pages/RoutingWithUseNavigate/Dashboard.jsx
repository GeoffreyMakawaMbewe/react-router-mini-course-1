import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-4xl mx-auto mt-10">
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-sm" role="alert">
        <p className="font-bold">Success!</p>
        <p>You have successfully logged in and arrived at the Dashboard.</p>
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your private area.</p>
      </div>

      <button 
        onClick={() => navigate('/')}
        className="mt-8 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Dashboard;
