const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-800">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-100">
          <h3 className="text-lg font-semibold text-green-800">Revenue</h3>
          <p className="text-2xl font-bold text-green-600">$54,321</p>
        </div>
        <div className="bg-purple-50 p-4 rounded border border-purple-100">
          <h3 className="text-lg font-semibold text-purple-800">Active Sessions</h3>
          <p className="text-2xl font-bold text-purple-600">89</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
