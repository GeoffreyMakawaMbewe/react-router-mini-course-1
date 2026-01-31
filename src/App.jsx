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
        */}
        <Route path="/active-nav" element={<ActiveLinkPage />}>
           {/* 
              Index Route:
              Matches when the URL is exactly "/active-nav".
              It acts as the default child.
           */}
           <Route index element={<Overview />} />
           
           {/* 
              Child Routes:
              Match "/active-nav/settings" and "/active-nav/info"
           */}
           <Route path="settings" element={<Settings />} />
           <Route path="info" element={<Info />} />
        </Route>

        <Route path="/search" element={<SearchPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
