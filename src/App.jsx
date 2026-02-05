import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Analytics from './pages/Analytics'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedUser, setSelectedUser] = useState(null)

  const handleUserSearch = (username) => {
    setSelectedUser(username)
    setCurrentView('analytics')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedUser(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {currentView === 'home' && (
          <Home onUserSearch={handleUserSearch} />
        )}
        {currentView === 'analytics' && selectedUser && (
          <Analytics username={selectedUser} onBack={handleBackToHome} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App

