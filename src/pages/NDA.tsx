import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NDA: React.FC = () => {
  const [agreed, setAgreed] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (agreed) {
      // TODO: Implement NDA acceptance logic
      console.log('NDA accepted')
      navigate('/')
    } else {
      alert('You must agree to the NDA to continue')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Non-Disclosure Agreement</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6 h-64 overflow-y-auto border p-4 rounded">
          <h3 className="font-bold mb-2">PitchDeck Non-Disclosure Agreement</h3>
          <p className="mb-2">
            This Non-Disclosure Agreement (the "Agreement") is entered into between PitchDeck (the "Company") and you, the user (the "Recipient").
          </p>
          <p className="mb-2">
            1. Confidential Information: The Recipient acknowledges that they may have access to confidential information related to business ideas, pitches, and other proprietary information shared on the PitchDeck platform.
          </p>
          <p className="mb-2">
            2. Non-Disclosure: The Recipient agrees not to disclose, share, or use any confidential information obtained through the PitchDeck platform for any purpose other than evaluating potential investment or collaboration opportunities.
          </p>
          <p className="mb-2">
            3. Protection of Information: The Recipient will take all reasonable precautions to protect the confidentiality of the information and to prevent its unauthorized disclosure.
          </p>
          <p className="mb-2">
            4. Duration: This Agreement shall remain in effect for a period of 5 years from the date of acceptance.
          </p>
          <p>
            5. Governing Law: This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mr-2"
              />
              <span>I have read and agree to the Non-Disclosure Agreement</span>
            </label>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Accept and Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default NDA