import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="p-4 text-center mt-45 border-2 w-100 h-50 ml-[30%]">
            <h1 className="text-2xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
            <p className="text-xl mb-4">The page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline">Go Back to Home</Link>
        </div>
    );

}

export default NotFound