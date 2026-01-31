// We import 'Link' from react-router-dom.
// This is used instead of the standard HTML <a> tag.
// The <a> tag causes a full page reload, which we want to avoid in a Single Page App (SPA).
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // A simple navigation bar styled with Tailwind CSS
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          {/* 
            The 'to' prop is like the 'href' attribute in an <a> tag.
            It tells React Router which path to change the URL to.
            When clicked, it changes the URL to '/' without reloading the page.
          */}
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          {/* 
            Here, clicking this link changes the URL to '/about'.
            React Router detects this change and renders the component associated with '/about'.
          */}
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </li>
      .</ul>
    </nav>
  );
};

export default Navbar;
