const UserPosts = () => {
  return (
    <div className="p-5 bg-slate-100 rounded-lg border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-300 pb-2">
        Recent Posts
      </h2>
      <ul className="space-y-3">
        <li className="bg-white p-3 rounded shadow-sm border border-slate-200 text-slate-700">
          <span className="font-semibold block text-indigo-600 mb-1">Post 1</span>
          Learning React Router is fun!
        </li>
        <li className="bg-white p-3 rounded shadow-sm border border-slate-200 text-slate-700">
          <span className="font-semibold block text-indigo-600 mb-1">Post 2</span>
          Nested routes are powerful.
        </li>
        <li className="bg-white p-3 rounded shadow-sm border border-slate-200 text-slate-700">
          <span className="font-semibold block text-indigo-600 mb-1">Post 3</span>
          Can't wait to learn Redux next.
        </li>
      </ul>
    </div>
  );
};

export default UserPosts;
