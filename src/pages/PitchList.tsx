import React from 'react'
import { Link } from 'react-router-dom'

// Mock data for demonstration
const pitches = [
  { id: 1, title: "EcoFriendly Packaging Solution", industry: "Technology", fundingNeeded: "$250,000", description: "Innovative, biodegradable packaging materials for eco-conscious businesses." },
  { id: 2, title: "AI-Powered Health Diagnostics", industry: "Healthcare", fundingNeeded: "$1,000,000", description: "Machine learning algorithms to improve early disease detection and diagnosis." },
  { id: 3, title: "Decentralized Finance Platform", industry: "Finance", fundingNeeded: "$500,000", description: "Blockchain-based lending and borrowing platform for cryptocurrency holders." },
  { id: 4, title: "Virtual Reality Education System", industry: "Education", fundingNeeded: "$750,000", description: "Immersive VR experiences for enhanced learning in K-12 and higher education." },
]

const PitchList: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Browse Business Ideas</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pitches.map(pitch => (
          <div key={pitch.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{pitch.title}</h3>
            <p className="text-gray-600 mb-2">Industry: {pitch.industry}</p>
            <p className="text-gray-600 mb-4">Funding Needed: {pitch.fundingNeeded}</p>
            <Link 
              to={`/pitch/${pitch.id}`} 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PitchList