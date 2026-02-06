import { useState, useEffect } from 'react';
import { FiSearch, FiUser, FiLoader } from 'react-icons/fi';

const SearchBar = ({ onSearch, placeholder = "Enter GitHub username..." }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Debounced search for suggestions
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 3) {
        fetchSuggestions(query);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchSuggestions = async (searchQuery) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}&per_page=5`);
      const data = await response.json();
      setSuggestions(data.items || []);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (username = query) => {
    if (username.trim()) {
      onSearch(username.trim());
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (username) => {
    setQuery(username);
    handleSearch(username);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={placeholder}
          className="block w-full pl-10 pr-20 sm:pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm sm:text-base"
        />
        <div className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center">
          {isLoading ? (
            <FiLoader className="h-5 w-5 text-gray-400 animate-spin" />
          ) : (
            <button
              onClick={() => handleSearch()}
              className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Search
            </button>
          )}
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {suggestions.map((user) => (
            <div
              key={user.id}
              onClick={() => handleSuggestionClick(user.login)}
              className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-8 h-8 rounded-full mr-3 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.login}</p>
                <p className="text-xs text-gray-500 truncate">
                  {user.type} • {user.public_repos || 0} repos
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;