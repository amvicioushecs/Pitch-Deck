import React, { useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

interface Conversation {
  id: number
  with: string
  lastMessage: string
  messages: Message[]
}

const initialConversations: Conversation[] = [
  {
    id: 1,
    with: "Jane Smith",
    lastMessage: "I'm interested in your EcoFriendly Packaging Solution.",
    messages: [
      { id: 1, sender: "Jane Smith", content: "Hi, I saw your pitch for the EcoFriendly Packaging Solution.", timestamp: "2024-03-15 10:30" },
      { id: 2, sender: "You", content: "Hello Jane! Thank you for your interest. What would you like to know?", timestamp: "2024-03-15 10:35" },
      { id: 3, sender: "Jane Smith", content: "I'm interested in your EcoFriendly Packaging Solution. Can you provide more details on the materials used?", timestamp: "2024-03-15 10:40" },
    ]
  },
  {
    id: 2,
    with: "Mike Johnson",
    lastMessage: "Let's schedule a call to discuss your AI-Powered Health Diagnostics pitch.",
    messages: [
      { id: 1, sender: "Mike Johnson", content: "Hello, I'm intrigued by your AI-Powered Health Diagnostics pitch.", timestamp: "2024-03-14 14:20" },
      { id: 2, sender: "You", content: "Hi Mike! I'm glad you found it interesting. Do you have any specific questions?", timestamp: "2024-03-14 14:25" },
      { id: 3, sender: "Mike Johnson", content: "Let's schedule a call to discuss your AI-Powered Health Diagnostics pitch in more detail.", timestamp: "2024-03-14 14:30" },
    ]
  }
]

const Messages: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations)
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newMessage.trim() && selectedConversation) {
      const updatedConversation = {
        ...selectedConversation,
        messages: [
          ...selectedConversation.messages,
          {
            id: selectedConversation.messages.length + 1,
            sender: "You",
            content: newMessage.trim(),
            timestamp: new Date().toLocaleString()
          }
        ],
        lastMessage: newMessage.trim()
      }

      setConversations(conversations.map(conv =>
        conv.id === updatedConversation.id ? updatedConversation : conv
      ))
      setSelectedConversation(updatedConversation)
      setNewMessage("")
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex h-[600px]">
        <div className="w-1/3 border-r">
          <h2 className="text-xl font-semibold p-4 border-b">Conversations</h2>
          <ul>
            {conversations.map(conv => (
              <li
                key={conv.id}
                className={`p-4 cursor-pointer hover:bg-gray-100 ${selectedConversation?.id === conv.id ? "bg-blue-100" : ""}`}
                onClick={() => setSelectedConversation(conv)}
              >
                <h3 className="font-medium">{conv.with}</h3>
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 flex flex-col">
          {selectedConversation ? (
            <>
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">{selectedConversation.with}</h2>
              </div>
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {selectedConversation.messages.map(message => (
                  <div key={message.id} className={`${message.sender === "You" ? "text-right" : "text-left"}`}>
                    <div className={`inline-block p-2 rounded-lg ${message.sender === "You" ? "bg-blue-100" : "bg-gray-100"}`}>
                      <p>{message.content}</p>
                      <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t flex">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300 flex items-center"
                >
                  <Send size={20} className="mr-2" />
                  Send
                </button>
              </form>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <MessageCircle size={48} className="mr-2" />
              <p>Select a conversation to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Messages