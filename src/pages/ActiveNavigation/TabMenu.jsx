import { NavLink } from 'react-router-dom';

const TabMenu = () => {
  const getLinkClass = ({ isActive }) => {
    const baseClass = "block px-6 py-3 font-medium rounded-t-lg transition-all duration-200";
    
    if (isActive) {
      // Active: White bg, Indigo text, border
      return `${baseClass} bg-white text-indigo-600 border-t border-l border-r border-slate-200 shadow-[0_-1px_2px_rgba(0,0,0,0.05)]`;
    } else {
      // Inactive: Slate bg, Slate text, hover effect
      return `${baseClass} bg-slate-50 text-slate-500 hover:text-indigo-500 hover:bg-slate-100`;
    }
  };

  return (
    <ul className="flex border-b border-slate-200 mb-0">
      <li className="mr-1">
        <NavLink to="/active-nav" end className={getLinkClass}>
          Overview
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink to="/active-nav/settings" className={getLinkClass}>
          Settings
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink to="/active-nav/info" className={getLinkClass}>
          Info
        </NavLink>
      </li>
    </ul>
  );
};

export default TabMenu;
