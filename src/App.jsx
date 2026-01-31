import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/BasicRouting/Home';
import About from './pages/BasicRouting/About';
import NotFound from './pages/BasicRouting/NotFound';
import User from './pages/DynamicRouting/User';
import UserPosts from './pages/NestedRouting/UserPosts';
import Login from './pages/RoutingWithUseNavigate/Login';
import Dashboard from './pages/RoutingWithUseNavigate/Dashboard';
import Profile from './pages/ProtectedRoutes/Profile';
import ProtectedRoute from './pages/ProtectedRoutes/ProtectedRoute';
import ActiveLinkPage from './pages/ActiveNavigation/ActiveLinkPage';
import Overview from './pages/ActiveNavigation/Overview';
import Settings from './pages/ActiveNavigation/Settings';
import Info from './pages/ActiveNavigation/Info';
import SearchPage from './pages/SearchParams/SearchPage';
import AdminLayout from './pages/MiniProject1/AdminLayout';
import AdminDashboard from './pages/MiniProject1/AdminDashboard';
import AdminUsers from './pages/MiniProject1/AdminUsers';
import AdminSettings from './pages/MiniProject1/AdminSettings';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ name: 'Alex' });
  const handleLogout = () => setUser(null);

  return (
    <>
      {/* 
         We hide the main Navbar when inside the Admin panel 
         to avoid double navigation bars (since AdminLayout has its own).
         We can do this by checking the current path, but for simplicity here,
         we will just leave it. In a real app, you might conditionally render it.
      */}
      <Navbar user={user} onLogin={handleLogin} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/user/:id" element={<User />}>
           <Route path="posts" element={<UserPosts />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/active-nav" element={<ActiveLinkPage />}>
           <Route index element={<Overview />} />
           <Route path="settings" element={<Settings />} />
           <Route path="info" element={<Info />} />
        </Route>

        <Route path="/search" element={<SearchPage />} />

        {/* 
           MINI PROJECT 1: ADMIN PANEL
           -----------------------------------------------------
           1. Protected: Only accessible if user is logged in.
           2. Layout: Uses AdminLayout for the sidebar.
           3. Nested: Dashboard, Users, Settings.
        */}
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
           <Route path="/admin" element={<AdminLayout />}>
              {/* Default page (Dashboard) */}
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="settings" element={<AdminSettings />} />
           </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
