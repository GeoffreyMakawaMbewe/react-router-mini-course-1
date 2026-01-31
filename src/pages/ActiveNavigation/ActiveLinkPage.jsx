import { Outlet } from 'react-router-dom';
import TabMenu from './TabMenu';

const ActiveLinkPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6">Active Navigation Demo</h1>
      <p className="mb-6 text-slate-600 text-lg">
        Notice how the tabs below change style automatically based on the URL.
        This is done using the <code className="bg-indigo-50 text-indigo-600 px-1 rounded">&lt;NavLink&gt;</code> component.
      </p>

      {/* The TabMenu contains our NavLinks */}
      <TabMenu />

      {/* The content for each tab will be rendered here */}
      <div className="p-8 bg-white border border-t-0 border-slate-200 rounded-b-lg shadow-sm">
        <Outlet />
      </div>
    </div>
  );
};

export default ActiveLinkPage;
