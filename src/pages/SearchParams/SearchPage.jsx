import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  // useSearchParams works very similar to useState!
  // searchParams: The current query parameters object (read-only like)
  // setSearchParams: Function to update the query parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // Get a specific parameter, e.g., "?q=..."
  const query = searchParams.get('query') || '';

  const handleSearchChange = (e) => {
    const text = e.target.value;
    if (text) {
      // Update the URL with ?q=text
      setSearchParams({ q: text });
    } else {
      // If empty, remove the query param
      setSearchParams({});
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Search Params Demo</h1>
      
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Type to update the URL:
        </label>
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for something..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-lg text-yellow-800">
          Current Query Value: <span className="font-bold font-mono">{query || '(empty)'}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Look at your browser's address bar! It should say <code>?q={query}</code>
        </p>
      </div>
    </div>
  );
};

export default SearchPage;
