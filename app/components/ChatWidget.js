'use client'
import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your Pokémon trading assistant! Ask me about card prices or make an offer!" }
  ])

  const sendMessage = () => {
    if (!message.trim()) return
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }])
    
    // Simple AI response
    const aiResponse = "I can help with that! Current market prices: Charizard $65, Pikachu $25, Blastoise $45. What's your budget?"
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
    
    setMessage('')
  }

  return (
    <>
      {/* BIGGER Floating Chat Button - BOTTOM RIGHT */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-red-500 text-white w-16 h-16 rounded-full shadow-xl hover:bg-red-600 transition duration-200 flex items-center justify-center"
        >
          <span className="text-2xl">💬</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-[5rem] right-4 w-72 h-[24rem] bg-white rounded-lg shadow-2xl border border-gray-300 flex flex-col">
          {/* Header */}
          <div className="bg-red-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold text-lg">Pokémon Trade Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-2xl max-w-[85%] ${
                  msg.role === 'user' 
                    ? 'bg-red-500 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex space-x-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about Pokémon cards..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-red-500 text-white w-12 h-12 rounded-full hover:bg-red-600 flex items-center justify-center"
              >
                <span className="text-lg">↑</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}