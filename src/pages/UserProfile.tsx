import React, { useState } from 'react'
import { User, Mail, Briefcase, DollarSign } from 'lucide-react'

const UserProfile: React.FC = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Investor',
    bio: 'Experienced angel investor with a focus on tech startups.',
    investmentPreferences: ['Technology', 'Healthcare', 'Fintech'],
    totalInvestments: '$2,000,000'
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically send the updated data to your backend
    console.log('Updated user profile:', user)
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <User className="mr-2" /> User Profile
        </h2>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-1 font-medium">Role</label>
              <select
                id="role"
                name="role"
                value={user.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="Investor">Investor</option>
                <option value="Entrepreneur">Entrepreneur</option>
              </select>
            </div>
            <div>
              <label htmlFor="bio" className="block mb-1 font-medium">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border rounded-md"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <p><strong className="font-medium">Name:</strong> {user.name}</p>
            <p><strong className="font-medium">Email:</strong> {user.email}</p>
            <p><strong className="font-medium">Role:</strong> {user.role}</p>
            <p><strong className="font-medium">Bio:</strong> {user.bio}</p>
            <p><strong className="font-medium">Investment Preferences:</strong> {user.investmentPreferences.join(', ')}</p>
            <p><strong className="font-medium">Total Investments:</strong> {user.totalInvestments}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile