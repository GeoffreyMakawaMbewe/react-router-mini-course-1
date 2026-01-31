const AdminUsers = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">User Management</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap text-green-600">Active</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">John Smith</td>
            <td className="px-6 py-4 whitespace-nowrap">Editor</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500">Offline</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
