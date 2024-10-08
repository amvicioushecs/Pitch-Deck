import React from 'react'
import { Link } from 'react-router-dom'
import { Lightbulb, User, MessageCircle, Shield, LogIn } from 'lucide-react'

const Header: React.FC = () => {
  // TODO: Replace with actual auth check
  const isLoggedIn = false

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Lightbulb size={32} />
            <span>PitchDeck</span>
          </Link>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="hover:text-blue-200"><User size={24} /></Link>
              <Link to="/messages" className="hover:text-blue-200"><MessageCircle size={24} /></Link>
            </div>
          ) : (
            <Link to="/login" className="hover:text-blue-200 flex items-center">
              <LogIn size={24} className="mr-1" />
              Login
            </Link>
          )}
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className="hover:text-blue-200 text-lg">Home</Link></li>
            <li><Link to="/pitch" className="hover:text-blue-200 text-lg">Submit Pitch</Link></li>
            <li><Link to="/browse" className="hover:text-blue-200 text-lg">Browse Ideas</Link></li>
            <li>
              <Link to="/idea-protection" className="hover:text-blue-200 flex items-center text-lg">
                <Shield size={20} className="mr-1" />
                Idea Protection
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header