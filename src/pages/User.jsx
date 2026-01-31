import { useParams, Link, Outlet } from 'react-router-dom';

const User = () => {
  // useParams hook captures the dynamic parts of the URL.
  // -----------------------------------------------------
  // Example:
  // If the URL is: "http://localhost:5173/user/55"
  // And the Route is: path="/user/:id"
  // Then useParams() returns: { id: "55" }
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
        <p className="text-lg text-gray-700">
          User ID: <span className="font-mono font-bold text-blue-700">{id}</span>
        </p>
      </div>

      {/* 
        Relative Link:
        -----------------------------------------------------
        We are currently at "/user/55".
        'to="posts"' (no leading slash) means "add 'posts' to the end of the current URL".
        Resulting URL: "/user/55/posts"
        
        (If we wrote 'to="/posts"', it would go to the root "/posts", which is wrong).
      */}
      <Link 
        to="posts" 
        className="inline-block mt-6 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
      >
        View User Posts
      </Link>

      <div className="mt-8">
        {/* 
          Outlet Component:
          -----------------------------------------------------
          This is a "Window" or "Placeholder".
          When the URL matches a child route (like "/user/55/posts"), 
          the child component (<UserPosts />) will be rendered RIGHT HERE.
          
          If the URL is just "/user/55", this Outlet remains empty.
        */}
        <Outlet />
      </div>
    </div>
  );
};

export default User;
