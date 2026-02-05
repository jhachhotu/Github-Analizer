const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div className="h-6 bg-gray-300 rounded w-24 animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded w-48 animate-pulse"></div>
        </div>

        {/* Profile Card Skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="flex-1 space-y-3">
              <div className="h-6 bg-gray-300 rounded w-48 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-96 animate-pulse"></div>
              <div className="flex space-x-6">
                <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
                  <div className="h-6 bg-gray-300 rounded w-12 animate-pulse"></div>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="h-6 bg-gray-300 rounded w-48 mb-4 animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="h-6 bg-gray-300 rounded w-48 mb-4 animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;