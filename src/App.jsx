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
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ name: 'Alex' });
  const handleLogout = () => setUser(null);

  return (
    <>
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

        {/* 
           ACTIVE NAVIGATION LESSON
           -----------------------------------------------------
           Parent route renders the TabMenu and an Outlet.
           Child routes render the content for each tab.
        */}
        <Route path="/active-nav" element={<ActiveLinkPage />}>
           {/* Index route renders when path is exactly "/active-nav" */}
           <Route index element={<div><h3 className="text-xl font-bold">Overview Content</h3><p>This is the main overview tab.</p></div>} />
           <Route path="settings" element={<div><h3 className="text-xl font-bold">Settings Content</h3><p>Adjust your preferences here.</p></div>} />
           <Route path="info" element={<div><h3 className="text-xl font-bold">Info Content</h3><p>Some information about this section.</p></div>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
