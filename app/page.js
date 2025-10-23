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
      typeColor: 'bg-gradient-to-r from-red-500 to-orange-500',
      cardColor: 'bg-gradient-to-br from-red-50 to-orange-100',
      borderColor: 'border-l-4 border-orange-500',
      description: 'First Edition Holo - Highly sought after collector card'
    },
    { 
      id: 2, 
      name: 'Pikachu', 
      price: 25, 
      condition: 'Near Mint',
      image: '⚡', 
      type: 'Electric',
      typeColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
      cardColor: 'bg-gradient-to-br from-yellow-50 to-amber-100',
      borderColor: 'border-l-4 border-yellow-500',
      description: 'Yellow Cheeks variant - Excellent condition'
    },
    { 
      id: 3, 
      name: 'Blastoise', 
      price: 45, 
      condition: 'Excellent',
      image: '💧',
      type: 'Water', 
      typeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      cardColor: 'bg-gradient-to-br from-blue-50 to-cyan-100',
      borderColor: 'border-l-4 border-blue-500',
      description: 'Original Base Set - Strong holo pattern'
    },
    { 
      id: 4, 
      name: 'Venusaur', 
      price: 38, 
      condition: 'Near Mint',
      image: '🌿',
      type: 'Grass',
      typeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
      cardColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
      borderColor: 'border-l-4 border-green-500',
      description: 'Shadowless version - Rare find'
    },
    { 
      id: 5, 
      name: 'Mewtwo', 
      price: 52, 
      condition: 'Mint',
      image: '👁️',
      type: 'Psychic',
      typeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      cardColor: 'bg-gradient-to-br from-purple-50 to-pink-100',
      borderColor: 'border-l-4 border-purple-500',
      description: 'First Edition - Powerful legendary card'
    },
    { 
      id: 6, 
      name: 'Gyarados', 
      price: 28, 
      condition: 'Excellent',
      image: '🌊',
      type: 'Water',
      typeColor: 'bg-gradient-to-r from-blue-500 to-indigo-500',
      cardColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      borderColor: 'border-l-4 border-indigo-500',
      description: 'Holo rare - Beautiful artwork'
    }
  ])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSticky, setShowSticky] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-purple-100 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                <span className="text-2xl text-white">🃏</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">PokéMarket AI</h1>
                <p className="text-sm text-red-100">Smart Trading • Fair Prices</p>
              </div>
            </div>
            <nav className="flex space-x-6 items-center">
              <button className="text-white hover:text-yellow-200 font-medium transition duration-200 border-b-2 border-yellow-400 pb-1">Home</button>
              <button className="bg-white text-red-600 px-6 py-2 rounded-full hover:bg-yellow-100 transition duration-200 shadow-lg font-semibold">
                🔓 Login
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-200 transition duration-200 text-xl"
              >
                ☰
              </button>
            </nav>
          </div>

          {isMenuOpen && (
            <div className="mt-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-4 py-8 pb-48">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Buy & Sell Pokémon Cards
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            🎮 AI-powered marketplace with smart price negotiation. Get fair deals instantly!
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

          <div className="flex gap-6 overflow-x-auto pb-4">
            {featuredCards.map(card => (
              <div key={card.id} className={`relative group min-w-[220px] max-w-xs ${card.cardColor} rounded-2xl shadow-xl border border-gray-200 overflow-hidden ${card.borderColor} hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                <div className="flex flex-col items-center p-6">
                  <div className={`w-24 h-24 flex items-center justify-center rounded-full shadow-xl border-4 border-white ${card.typeColor} mb-4`}>
                    <span className="text-5xl drop-shadow-lg">{card.image}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{card.name}</h3>
                  <div className="text-sm text-gray-700 font-medium mb-1">Set: <span className="font-semibold">Base Set</span></div>
                  <div className="text-xs text-gray-500 font-mono">Card Code: <span className="font-semibold">#{card.id}</span></div>
                </div>
                <div className="absolute inset-0 bg-white/95 backdrop-blur-lg flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl">
                  <div className="mb-2 text-lg font-bold text-gray-800">{card.name}</div>
                  <div className="mb-1 text-sm text-gray-700">Type: <span className={`${card.typeColor} text-white px-2 py-1 rounded`}>{card.type}</span></div>
                  <div className="mb-1 text-sm text-gray-700">Condition: <span className={`px-2 py-1 rounded ${
                    card.condition === 'Mint' ? 'bg-green-100 text-green-800' :
                    card.condition === 'Near Mint' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>{card.condition}</span></div>
                  <div className="mb-3">
                    <span className="block text-3xl font-extrabold text-green-600 drop-shadow-lg">${card.price}</span>
                    <span className="block text-xs text-gray-500 font-medium">Market Price</span>
                  </div>
                  <div className="mb-2 text-sm text-gray-700">{card.description}</div>
                  <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold shadow-lg mt-2">💬 Make Offer</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Sticky Bottom Box - Fixed & Animated */}
      {showSticky && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px] bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white p-6 rounded-3xl shadow-2xl z-50 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-bold flex items-center justify-center">
                <span className="mr-2">🃏</span> List Your Cards
              </h3>
              <p className="text-red-100 text-sm mt-1">
                Set your Pokémon cards easily with our AI pricing assistant
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center justify-center">
                <span className="mr-2">🤖</span> AI Negotiation
              </h3>
              <p className="text-red-100 text-sm mt-1">
                Our AI finds fair prices using real-time market data
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center justify-center">
                <span className="mr-2">💰</span> Get Paid
              </h3>
              <p className="text-red-100 text-sm mt-1">
                Secure transactions with buyer & seller protection
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
