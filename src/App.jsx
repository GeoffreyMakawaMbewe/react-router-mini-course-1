// 'Routes' acts as a container for all our individual route definitions.
// 'Route' is used to define a single mapping between a URL path and a Component.
import { Routes, Route } from 'react-router-dom';

// We import the page components we want to show.
import Home from './pages/Home';
import About from './pages/About';

// We import our Navbar component which will be visible on all pages.
import Navbar from './components/Navbar';

import './App.css';
import NotFound from "./pages/NotFound.jsx";
import User from "./pages/User.jsx";

const App = () => {
  return (
    <>
      {/* 
        The Navbar is placed OUTSIDE of the <Routes> component.
        This ensures it is always rendered, regardless of the current URL.
        It acts like a persistent header.
      */}
      <Navbar />

      {/* 
        The <Routes> component looks at the current URL and decides which 
        one of the child <Route> components to render. It picks the one that matches.
      */}
      <Routes>
        {/* 
          If the URL path is exactly "/" (the root), render the <Home /> component.
        */}
        <Route path="/" element={<Home />} />

        {/* 
          If the URL path is "/about", render the <About /> component.
        */}
        <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
