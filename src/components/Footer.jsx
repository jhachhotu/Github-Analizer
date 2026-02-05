import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FiGithub className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">GitAnalyzer</span>
            </div>
            <p className="text-gray-400 text-sm">
              Analyze GitHub repositories with powerful insights and visualizations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#analytics" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Repository Analytics
              </a>
              <a href="#compare" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Compare Repos
              </a>
              <a href="#trending" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Trending Analysis
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 GitAnalyzer. Built with React + Vite + Tailwind
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
            Made with <FiHeart className="h-4 w-4 text-red-500 mx-1" /> for developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;