import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import RepoAnalytics from './pages/RepoAnalytics'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedRepo, setSelectedRepo] = useState(null)

  const handleUserSearch = (username) => {
    setSelectedUser(username)
    setCurrentView('analytics')
  }

  const handleRepoSelect = (repoName) => {
    setSelectedRepo(repoName)
    setCurrentView('repo')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedUser(null)
    setSelectedRepo(null)
  }

  const handleBackToUser = () => {
    setCurrentView('analytics')
    setSelectedRepo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {currentView === 'home' && (
          <Home onUserSearch={handleUserSearch} />
        )}
        {currentView === 'analytics' && selectedUser && (
          <Analytics username={selectedUser} onBack={handleBackToHome} onRepoSelect={handleRepoSelect} />
        )}
        {currentView === 'repo' && selectedUser && selectedRepo && (
          <RepoAnalytics username={selectedUser} repoName={selectedRepo} onBack={handleBackToUser} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App

