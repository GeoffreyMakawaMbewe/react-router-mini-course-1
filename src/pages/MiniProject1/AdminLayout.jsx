import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const getLinkClass = ({ isActive }) => {
    const baseClass = "block px-4 py-2 rounded transition-colors";
    return isActive 
      ? `${baseClass} bg-indigo-700 text-white` 
      : `${baseClass} text-indigo-100 hover:bg-indigo-600`;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-800 text-white flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
        <nav className="px-4 space-y-2">
          {/* 
             Note: We use 'end' for the dashboard link so it only matches "/admin" exactly,
             not "/admin/users" etc.
          */}
          <NavLink to="/admin" end className={getLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className={getLinkClass}>
            Users
          </NavLink>
          <NavLink to="/admin/settings" className={getLinkClass}>
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-sm p-6 min-h-[500px]">
          {/* This is where the child routes (Dashboard, Users, Settings) will render */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
