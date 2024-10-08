import React from 'react'
import { Link } from 'react-router-dom'
import { PresentationIcon, SearchIcon, ShieldCheck } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to PitchDeck</h1>
      <p className="text-xl mb-8">Connect entrepreneurs with investors and bring ideas to life</p>
      <div className="flex justify-center space-x-4 mb-12">
        <Link to="/pitch" className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition duration-300">
          <PresentationIcon className="mr-2" />
          Submit Your Pitch
        </Link>
        <Link to="/browse" className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-green-700 transition duration-300">
          <SearchIcon className="mr-2" />
          Browse Ideas
        </Link>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          <ShieldCheck className="mr-2 text-green-600" />
          Idea Protection
        </h2>
        <p className="mb-4">
          At PitchDeck, we understand the value of your ideas. That's why we've implemented
          robust measures to protect your intellectual property and ensure the confidentiality
          of your pitches.
        </p>
        <Link to="/idea-protection" className="text-blue-600 hover:underline">
          Learn more about our Idea Protection measures
        </Link>
      </div>
    </div>
  )
}

export default Home