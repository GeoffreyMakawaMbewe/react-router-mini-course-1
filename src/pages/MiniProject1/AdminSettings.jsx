const AdminSettings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">System Settings</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Site Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" defaultValue="My Awesome App" />
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
          <label className="ml-2 block text-sm text-gray-900">Enable Maintenance Mode</label>
        </div>
        <button type="button" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AdminSettings;
