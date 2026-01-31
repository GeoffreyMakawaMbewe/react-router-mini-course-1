const Profile = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto mt-10 bg-purple-50 border border-purple-200 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-purple-800">Secret Profile Page</h1>
      <p className="mt-4 text-lg text-purple-700">
        Congratulations! You have access to this protected route.
      </p>
      <p className="mt-2 text-gray-600">
        If you were not logged in, you would have been redirected to the login page.
      </p>
    </div>
  );
};

export default Profile;
