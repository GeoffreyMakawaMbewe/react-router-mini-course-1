import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';
import UserPosts from './pages/UserPosts';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* 
           NESTED ROUTE CONFIGURATION
           -----------------------------------------------------
           We want to render <UserPosts> INSIDE <User>.
           
           1. Parent Route: Matches "/user/:id" (e.g., /user/1)
              - Renders <User />
              
           2. Child Route: Matches "posts" (relative to parent)
              - Full URL match: "/user/:id/posts" (e.g., /user/1/posts)
              - Renders <UserPosts /> INSIDE the <Outlet /> of <User />
        */}
        <Route path="/user/:id" element={<User />}>
           <Route path="posts" element={<UserPosts />} />
        </Route>

        {/* 
           Catch-All Route (404)
           -----------------------------------------------------
           The "*" matches any URL that hasn't been matched by the routes above.
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
