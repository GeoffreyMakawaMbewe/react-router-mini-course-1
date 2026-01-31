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
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  // Simulating user authentication state
  // null = not logged in
  // { name: 'Alex' } = logged in
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ name: 'Alex' });
  const handleLogout = () => setUser(null);

  return (
    <>
      {/* Passing auth props to Navbar to show login/logout buttons */}
      <Navbar user={user} onLogin={handleLogin} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Dynamic & Nested Routes */}
        <Route path="/user/:id" element={<User />}>
           <Route path="posts" element={<UserPosts />} />
        </Route>

        {/* Programmatic Navigation Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 
           PROTECTED ROUTE CONFIGURATION
           -----------------------------------------------------
           We wrap the <Profile /> route with our <ProtectedRoute /> wrapper.
           We pass the condition (!!user) to isAllowed.
        */}
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
