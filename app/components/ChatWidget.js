'use client'
import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your Pokémon trading assistant! Ask me about card prices or make an offer!" }
  ])

  const [position, setPosition] = useState({ chat: { x: 0, y: 0 }, button: { x: 0, y: 0 } })
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingButton, setIsDraggingButton] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const messagesEndRef = useRef(null)
  const chatRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const buttonX = window.innerWidth - 100
    const buttonY = window.innerHeight - 100
    setPosition({
      button: { x: buttonX, y: buttonY },
      chat: { x: buttonX - 200, y: buttonY + 100 }
    })
  }, [])

  const handleOpen = () => {
    setPosition(prev => ({
      ...prev,
      chat: { 
        x: prev.button.x - 200,
        y: prev.button.y + 100
      }
    }))
    setIsOpen(true)
  }

  const handleMouseDown = (e, type) => {
    e.preventDefault()
    const target = type === 'chat' ? chatRef.current : buttonRef.current
    if (target) {
      const rect = target.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      type === 'chat' ? setIsDragging(true) : setIsDraggingButton(true)
    }
  }

  const handleMouseMove = (e) => {
    e.preventDefault()
    if (isDragging) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      setPosition(prev => ({
        ...prev,
        chat: { x: newX, y: newY }
      }))
    }
    if (isDraggingButton) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      setPosition(prev => ({
        ...prev,
        button: { x: newX, y: newY }
      }))
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsDraggingButton(false)
  }

  useEffect(() => {
    if (isDragging || isDraggingButton) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, isDraggingButton])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = () => {
    if (!message.trim()) return
    setMessages(prev => [...prev, { role: 'user', content: message }])
    const aiResponse = "I can help with that! Current market prices: Charizard $65, Pikachu $25, Blastoise $45. What's your budget?"
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
    setMessage('')
  }

  return (
    <div className="relative" style={{ isolation: 'isolate', zIndex: 99999 }}>
      {!isOpen && (
        <button
          ref={buttonRef}
          onClick={handleOpen}
          onMouseDown={(e) => handleMouseDown(e, 'button')}
          className="fixed w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-2xl hover:from-red-600 hover:to-pink-600 transition-colors duration-300 flex items-center justify-center pointer-events-auto"
          style={{ 
            boxShadow: '0 10px 25px rgba(239, 68, 68, 0.5)',
            cursor: isDraggingButton ? 'grabbing' : 'grab',
            left: `${position.button.x}px`,
            top: `${position.button.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <span className="text-4xl">💬</span>
        </button>
      )}

      {isOpen && (
        <div 
          ref={chatRef}
          className="fixed w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col pointer-events-auto overflow-hidden"
          style={{ 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            animation: 'floatIn 0.3s ease-out',
            left: `${position.chat.x}px`,
            top: `${position.chat.y}px`,
            transition: isDragging ? 'none' : 'all 0.3s ease-out'
          }}
        >
          <div 
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-t-2xl flex justify-between items-center"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={(e) => handleMouseDown(e, 'chat')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-red-500 text-sm">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Pokémon Trade Assistant</h3>
                <p className="text-xs text-white/80">Online • Ready to help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-xl font-bold w-8 h-8 rounded-full hover:bg-red-600 flex items-center justify-center transition duration-200"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-2xl max-w-[85%] ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-white rounded-b-2xl">
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
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white w-12 h-12 rounded-full hover:from-red-600 hover:to-pink-600 flex items-center justify-center"
              >
                <span className="text-lg">↑</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}