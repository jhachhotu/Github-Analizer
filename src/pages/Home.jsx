import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { FiGithub, FiBarChart, FiTrendingUp, FiUsers } from 'react-icons/fi';

const Home = ({ onUserSearch }) => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (username) => {
    onUserSearch(username);
  };

  const features = [
    {
      icon: <FiBarChart className="h-8 w-8 text-blue-500" />,
      title: "Repository Analytics",
      description: "Deep dive into commit history, contributor stats, and code metrics"
    },
    {
      icon: <FiTrendingUp className="h-8 w-8 text-green-500" />,
      title: "Trending Analysis",
      description: "Track repository growth, star history, and popularity trends"
    },
    {
      icon: <FiUsers className="h-8 w-8 text-purple-500" />,
      title: "Contributor Insights",
      description: "Analyze team collaboration patterns and individual contributions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <FiGithub className="h-16 w-16 sm:h-20 sm:w-20 text-gray-800" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            GitHub Repository
            <span className="text-blue-600"> Analytics</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Unlock powerful insights from GitHub repositories. Analyze commit patterns, 
            contributor statistics, language breakdowns, and trending metrics.
          </p>

          {/* Search Section */}
          <div className="mb-12 sm:mb-16 px-4">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Enter GitHub username to analyze repositories..."
            />
            <p className="text-xs sm:text-sm text-gray-500 mt-3">
              Try: "octocat", "torvalds", or any GitHub username
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mx-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">100M+</div>
              <div className="text-xs sm:text-base text-gray-600">Repositories Analyzed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">50M+</div>
              <div className="text-xs sm:text-base text-gray-600">Developers Tracked</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">1B+</div>
              <div className="text-xs sm:text-base text-gray-600">Commits Processed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-xs sm:text-base text-gray-600">Languages Supported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;