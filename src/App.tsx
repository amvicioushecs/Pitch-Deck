import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PitchForm from './pages/PitchForm'
import PitchList from './pages/PitchList'
import PitchDetails from './pages/PitchDetails'
import UserProfile from './pages/UserProfile'
import Messages from './pages/Messages'
import IdeaProtection from './pages/IdeaProtection'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NDA from './pages/NDA'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pitch" element={<PitchForm />} />
            <Route path="/browse" element={<PitchList />} />
            <Route path="/pitch/:id" element={<PitchDetails />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/idea-protection" element={<IdeaProtection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/nda" element={<NDA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App