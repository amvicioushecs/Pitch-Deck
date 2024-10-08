import React from 'react'
import { Shield, Lock, FileCheck, Users } from 'lucide-react'

const IdeaProtection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Shield className="mr-2 text-green-600" />
        Idea Protection
      </h1>
      <p className="text-xl mb-8">
        At PitchDeck, we take the protection of your ideas seriously. Here's how we ensure the safety and confidentiality of your intellectual property:
      </p>
      <div className="space-y-8">
        <div className="flex items-start">
          <Lock className="mr-4 text-blue-600 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-semibold mb-2">Secure Platform</h2>
            <p>Our platform is built with state-of-the-art security measures, including end-to-end encryption for all data transmission and storage. Your ideas are protected from unauthorized access at all times.</p>
          </div>
        </div>
        <div className="flex items-start">
          <FileCheck className="mr-4 text-blue-600 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-semibold mb-2">Non-Disclosure Agreements</h2>
            <p>All users, including potential investors, are required to sign a comprehensive non-disclosure agreement (NDA) before accessing detailed pitch information. This legally binds them to maintain the confidentiality of your ideas.</p>
          </div>
        </div>
        <div className="flex items-start">
          <Users className="mr-4 text-blue-600 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-semibold mb-2">Controlled Access</h2>
            <p>You have full control over who sees your pitch. Our platform allows you to approve or deny access requests from potential investors, ensuring that only trusted parties can view your detailed idea information.</p>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p>
          We are committed to providing a safe and secure environment for entrepreneurs to share their ideas with potential investors. Our team continuously monitors and updates our security measures to stay ahead of potential threats.
        </p>
        <p className="mt-4">
          If you have any concerns or questions about idea protection on our platform, please don't hesitate to contact our support team.
        </p>
      </div>
    </div>
  )
}

export default IdeaProtection