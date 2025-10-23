'use client'
import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your Pokémon trading assistant! Ask me about card prices or make an offer!" }
  ])

  // Use percentages for position
  const [position, setPosition] = useState({ chat: { x: 70, y: 70 }, button: { x: 90, y: 90 } })
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingButton, setIsDraggingButton] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const messagesEndRef = useRef(null)
  const chatRef = useRef(null)
  const buttonRef = useRef(null)

  // Set initial positions as percentages
  useEffect(() => {
    setPosition({
      button: { x: 90, y: 90 },
      chat: { x: 70, y: 70 }
    })
  }, [])

  // Keep chat/button in viewport on resize/zoom
  useEffect(() => {
    const handleResize = () => {
      setPosition(prev => ({
        button: {
          x: Math.min(prev.button.x, 95),
          y: Math.min(prev.button.y, 95)
        },
        chat: {
          x: Math.min(prev.chat.x, 80),
          y: Math.min(prev.chat.y, 80)
        }
      }))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleOpen = () => {
    setPosition(prev => ({
      ...prev,
      chat: { 
        x: Math.max(prev.button.x - 20, 0),
        y: Math.min(prev.button.y + 10, 80)
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
    const vw = window.innerWidth
    const vh = window.innerHeight
    if (isDragging) {
      const newX = ((e.clientX - dragOffset.x) / vw) * 100
      const newY = ((e.clientY - dragOffset.y) / vh) * 100
      setPosition(prev => ({
        ...prev,
        chat: { x: Math.max(0, Math.min(newX, 80)), y: Math.max(0, Math.min(newY, 80)) }
      }))
    }
    if (isDraggingButton) {
      const newX = ((e.clientX - dragOffset.x) / vw) * 100
      const newY = ((e.clientY - dragOffset.y) / vh) * 100
      setPosition(prev => ({
        ...prev,
        button: { x: Math.max(0, Math.min(newX, 95)), y: Math.max(0, Math.min(newY, 95)) }
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
            left: `${position.button.x}vw`,
            top: `${position.button.y}vh`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <span className="text-4xl">💬</span>
        </button>
      )}

      {isOpen && (
        <div 
          ref={chatRef}
          className="fixed w-[24rem] h-[32rem] bg-blue-500 rounded-2xl shadow-2xl border border-black flex flex-col pointer-events-auto overflow-hidden"
          style={{ 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            animation: 'floatIn 0.3s ease-out',
            left: `${position.chat.x}vw`,
            top: `${position.chat.y}vh`,
            transition: isDragging ? 'none' : 'all 0.3s ease-out'
          }}
        >
          <div 
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-t-2xl flex justify-between items-center"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={(e) => handleMouseDown(e, 'chat')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
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

          <div className="flex-1 p-4 overflow-y-auto bg-blue-500">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-2xl max-w-[85%] ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-br-none' 
                    : 'bg-blue-500 text-white border border-black rounded-bl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-blue-500 rounded-b-2xl">
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