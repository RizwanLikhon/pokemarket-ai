'use client'
import { useState } from 'react'
import ChatWidget from './components/ChatWidget'

export default function Home() {
  const [featuredCards] = useState([
    { 
      id: 1, 
      name: 'Charizard', 
      price: 65, 
      condition: 'Mint',
      image: '🔥',
      type: 'Fire',
      description: 'First Edition Holo - Highly sought after collector card'
    },
    { 
      id: 2, 
      name: 'Pikachu', 
      price: 25, 
      condition: 'Near Mint',
      image: '⚡', 
      type: 'Electric',
      description: 'Yellow Cheeks variant - Excellent condition'
    },
    { 
      id: 3, 
      name: 'Blastoise', 
      price: 45, 
      condition: 'Excellent',
      image: '💧',
      type: 'Water', 
      description: 'Original Base Set - Strong holo pattern'
    }
  ])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <span className="text-2xl text-white">🃏</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">PokéMarket AI</h1>
                <p className="text-sm text-red-100">Smart Trading • Fair Prices</p>
              </div>
            </div>
            <nav className="flex space-x-6 items-center">
              <button className="text-white hover:text-yellow-200 font-medium transition duration-200">Home</button>
              <button className="text-white hover:text-yellow-200 transition duration-200">Buy Cards</button>
              <button className="text-white hover:text-yellow-200 transition duration-200">Sell Cards</button>
              <button className="bg-white text-red-600 px-6 py-2 rounded-full hover:bg-yellow-100 transition duration-200 shadow-lg font-semibold">
                🔓 Login
              </button>
              {/* Menu Toggle Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-200 transition duration-200 text-xl"
              >
                ☰
              </button>
            </nav>
          </div>

          {/* Dropdown Navigation Menu */}
          {isMenuOpen && (
            <div className="mt-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800 text-lg">🏠 Home</h3>
                  <div className="space-y-2">
                    <button className="block text-gray-700 hover:text-red-600 text-sm">Dashboard</button>
                    <button className="block text-gray-700 hover:text-red-600 text-sm">Featured Cards</button>
                    <button className="block text-gray-700 hover:text-red-600 text-sm">Recent Activity</button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800 text-lg">🛒 Buy Cards</h3>
                  <div className="space-y-2">
                    <button className="block text-gray-700 hover:text-blue-600 text-sm">Browse All</button>
                    <button className="block text-gray-700 hover:text-blue-600 text-sm">Rare Finds</button>
                    <button className="block text-gray-700 hover:text-blue-600 text-sm">Auction House</button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800 text-lg">💰 Sell Cards</h3>
                  <div className="space-y-2">
                    <button className="block text-gray-700 hover:text-green-600 text-sm">List Cards</button>
                    <button className="block text-gray-700 hover:text-green-600 text-sm">Price Calculator</button>
                    <button className="block text-gray-700 hover:text-green-600 text-sm">Seller Tools</button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800 text-lg">⚡ Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="block text-gray-700 hover:text-purple-600 text-sm">AI Price Check</button>
                    <button className="block text-gray-700 hover:text-purple-600 text-sm">Trade Assistant</button>
                    <button className="block text-gray-700 hover:text-purple-600 text-sm">Market Trends</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Buy & Sell Pokémon Cards
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            AI-powered marketplace with smart price negotiation. Get fair deals instantly!
          </p>
          <div className="bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto border border-white/50">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl text-white">🤖</span>
              </div>
              <div className="text-left">
                <p className="text-gray-800 text-lg font-medium">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent font-bold">AI Negotiator:</span> Get fair prices instantly! Our AI checks real-time market rates from eBay and TCGPlayer.
                </p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-10 py-4 rounded-2xl font-bold hover:from-red-600 hover:to-pink-600 transition duration-300 shadow-xl text-lg transform hover:scale-105">
              🃏 Start Trading Now
            </button>
          </div>
        </div>

        {/* Featured Cards */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Featured Cards</h2>
              <p className="text-gray-600 mt-2 font-medium">✨ Carefully selected high-value Pokémon cards</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium">{featuredCards.length} cards available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCards.map(card => (
              <div key={card.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-5xl">
                      {card.image}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{card.name}</h3>
                      <p className="text-gray-600">{card.type} Type</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Condition:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        card.condition === 'Mint' ? 'bg-green-100 text-green-800' :
                        card.condition === 'Near Mint' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {card.condition}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Price:</span>
                      <span className="text-2xl font-bold text-green-600">${card.price}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-bold hover:from-red-600 hover:to-pink-600 transition duration-300 mt-4 shadow-lg">
                    💬 Make Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  )
}