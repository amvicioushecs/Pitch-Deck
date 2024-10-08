import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, DollarSign, Briefcase, Users, Calendar } from 'lucide-react'
import ContactModal from '../components/ContactModal'

// Mock data for demonstration
const pitches = [
  { id: 1, title: "EcoFriendly Packaging Solution", industry: "Technology", fundingNeeded: "$250,000", description: "Innovative, biodegradable packaging materials for eco-conscious businesses.", teamSize: 4, foundedDate: "2023-01-15", fullDescription: "Our EcoFriendly Packaging Solution aims to revolutionize the packaging industry by providing fully biodegradable materials that don't compromise on durability or aesthetics. We've developed a proprietary blend of plant-based polymers that break down completely within 6 months of disposal, leaving no harmful residues. This solution is perfect for businesses looking to reduce their environmental impact without sacrificing product protection or brand image." },
  { id: 2, title: "AI-Powered Health Diagnostics", industry: "Healthcare", fundingNeeded: "$1,000,000", description: "Machine learning algorithms to improve early disease detection and diagnosis.", teamSize: 6, foundedDate: "2022-11-30", fullDescription: "Our AI-Powered Health Diagnostics platform leverages advanced machine learning algorithms to analyze medical imaging and patient data, significantly improving the accuracy and speed of disease detection and diagnosis. By integrating with existing hospital systems, we can provide real-time insights to healthcare professionals, potentially saving countless lives through early intervention. Our initial focus is on detecting early signs of cancer and cardiovascular diseases." },
  { id: 3, title: "Decentralized Finance Platform", industry: "Finance", fundingNeeded: "$500,000", description: "Blockchain-based lending and borrowing platform for cryptocurrency holders.", teamSize: 5, foundedDate: "2023-03-01", fullDescription: "Our Decentralized Finance (DeFi) Platform is built on the Ethereum blockchain, offering a secure and transparent environment for cryptocurrency holders to lend and borrow digital assets without intermediaries. By utilizing smart contracts, we ensure that all transactions are automated, efficient, and tamper-proof. Our platform will feature competitive interest rates, instant transactions, and a user-friendly interface to make DeFi accessible to both crypto enthusiasts and newcomers." },
  { id: 4, title: "Virtual Reality Education System", industry: "Education", fundingNeeded: "$750,000", description: "Immersive VR experiences for enhanced learning in K-12 and higher education.", teamSize: 7, foundedDate: "2023-02-14", fullDescription: "Our Virtual Reality Education System transforms traditional learning by creating immersive, interactive experiences across various subjects. From exploring ancient civilizations in history class to conducting virtual chemistry experiments, our platform makes learning engaging and memorable. We're partnering with educational content creators and institutions to develop a rich library of VR lessons aligned with standard curricula. Our goal is to improve student engagement, retention, and overall academic performance through the power of virtual reality." },
]

const PitchDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const pitch = pitches.find(p => p.id === Number(id))
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  if (!pitch) {
    return <div>Pitch not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <Link to="/browse" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="mr-2" size={20} />
          Back to Browse
        </Link>
        <h2 className="text-3xl font-bold mb-4">{pitch.title}</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <Briefcase className="mr-2" size={20} />
            <span>Industry: {pitch.industry}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="mr-2" size={20} />
            <span>Funding Needed: {pitch.fundingNeeded}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2" size={20} />
            <span>Team Size: {pitch.teamSize}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2" size={20} />
            <span>Founded: {pitch.foundedDate}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700 mb-6">{pitch.fullDescription}</p>
        <button 
          onClick={() => setIsContactModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Contact Team
        </button>
      </div>
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        pitchTitle={pitch.title}
      />
    </div>
  )
}

export default PitchDetails