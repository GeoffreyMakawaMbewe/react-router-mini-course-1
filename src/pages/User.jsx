import { useParams } from 'react-router-dom';

const User = () => {
    // useParams returns an object with key/value pairs of URL parameters.
    // If our route is path="/user/:id", then params will be { id: "..." }
    const { userId } = useParams();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <p className="mt-2">
                User ID: <span className="font-mono bg-gray-200 p-1 rounded">{userId}</span>
            </p>
        </div>
    );
};

export default User;