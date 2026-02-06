import { useState, useEffect } from 'react';
import { FiArrowLeft, FiStar, FiGitBranch, FiEye, FiAlertCircle, FiCode, FiGitCommit } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { format, parseISO } from 'date-fns';

const RepoAnalytics = ({ username, repoName, onBack }) => {
  const [repoData, setRepoData] = useState(null);
  const [commits, setCommits] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepoData();
  }, [username, repoName]);

  const fetchRepoData = async () => {
    setLoading(true);
    try {
      const [repo, commitRes, contribRes, langRes] = await Promise.all([
        fetch(`https://api.github.com/repos/${username}/${repoName}`).then(r => r.json()),
        fetch(`https://api.github.com/repos/${username}/${repoName}/commits?per_page=30`).then(r => r.json()),
        fetch(`https://api.github.com/repos/${username}/${repoName}/contributors?per_page=10`).then(r => r.json()),
        fetch(`https://api.github.com/repos/${username}/${repoName}/languages`).then(r => r.json())
      ]);

      setRepoData(repo);
      setCommits(Array.isArray(commitRes) ? commitRes : []);
      setContributors(Array.isArray(contribRes) ? contribRes : []);
      
      const langData = Object.entries(langRes).map(([name, bytes]) => ({
        name,
        value: bytes,
        percentage: 0
      }));
      const total = langData.reduce((sum, l) => sum + l.value, 0);
      langData.forEach(l => l.percentage = ((l.value / total) * 100).toFixed(1));
      setLanguages(langData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <FiArrowLeft className="mr-2" /> Back
        </button>

        {/* Repo Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 break-words">{repoData.name}</h1>
          <p className="text-gray-600 mb-4">{repoData.description}</p>
          <div className="flex flex-wrap gap-3 sm:gap-6 text-sm">
            <span className="flex items-center"><FiStar className="mr-1" /> {repoData.stargazers_count}</span>
            <span className="flex items-center"><FiGitBranch className="mr-1" /> {repoData.forks_count}</span>
            <span className="flex items-center"><FiEye className="mr-1" /> {repoData.watchers_count}</span>
            <span className="flex items-center"><FiAlertCircle className="mr-1" /> {repoData.open_issues_count}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <p className="text-xs sm:text-sm text-gray-600">Stars</p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-600">{repoData.stargazers_count}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <p className="text-xs sm:text-sm text-gray-600">Forks</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{repoData.forks_count}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <p className="text-xs sm:text-sm text-gray-600">Issues</p>
            <p className="text-xl sm:text-2xl font-bold text-red-600">{repoData.open_issues_count}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <p className="text-xs sm:text-sm text-gray-600">Size</p>
            <p className="text-xl sm:text-2xl font-bold text-green-600">{(repoData.size / 1024).toFixed(1)} MB</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Language Breakdown</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={languages}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="percentage" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Top Contributors</h3>
            <div className="space-y-3">
              {contributors.slice(0, 5).map((c, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={c.avatar_url} className="w-8 h-8 rounded-full" alt={c.login} />
                    <span className="text-sm font-medium">{c.login}</span>
                  </div>
                  <span className="text-sm text-gray-600">{c.contributions} commits</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Commits */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Recent Commits</h3>
          <div className="space-y-3">
            {commits.slice(0, 10).map((c, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="text-sm font-medium text-gray-900 line-clamp-2">{c.commit.message}</p>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-gray-500 mt-1">
                  <span>{c.commit.author.name}</span>
                  <span>{format(parseISO(c.commit.author.date), 'MMM dd, yyyy')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoAnalytics;
