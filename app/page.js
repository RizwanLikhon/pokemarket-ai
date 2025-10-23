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
    },
    { 
      id: 4, 
      name: 'Venusaur', 
      price: 38, 
      condition: 'Near Mint',
      image: '🌿',
      type: 'Grass',
      description: 'Shadowless version - Rare find'
    },
    { 
      id: 5, 
      name: 'Mewtwo', 
      price: 52, 
      condition: 'Mint',
      image: '👁️',
      type: 'Psychic',
      description: 'First Edition - Powerful legendary card'
    },
    { 
      id: 6, 
      name: 'Gyarados', 
      price: 28, 
      condition: 'Excellent',
      image: '🌊',
      type: 'Water',
      description: 'Holo rare - Beautiful artwork'
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">PokéMarket AI</h1>
                <p className="text-sm text-gray-500">Smart Trading • Fair Prices</p>
              </div>
            </div>
            <nav className="flex space-x-6 items-center">
              <button className="text-gray-700 hover:text-red-600 font-medium transition duration-200">Home</button>
              <button className="text-gray-700 hover:text-red-600 transition duration-200">Buy Cards</button>
              <button className="text-gray-700 hover:text-red-600 transition duration-200">Sell Cards</button>
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition duration-200 shadow-lg">
                Login
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Buy & Sell Pokémon Cards
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered marketplace with smart price negotiation. Get fair deals instantly with our intelligent trading assistant!
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="text-left">
                <p className="text-gray-700 text-lg">
                  <strong>AI Negotiator:</strong> Get fair prices instantly! Our AI checks real-time market rates from eBay and TCGPlayer to help you get the best deals.
                </p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition duration-200 shadow-lg text-lg">
              🃏 Start Trading Now
            </button>
          </div>
        </div>

        {/* Featured Cards - NEW LIST LAYOUT */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Featured Cards</h2>
              <p className="text-gray-600 mt-2">Carefully selected high-value Pokémon cards</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="text-sm text-gray-600">{featuredCards.length} cards available</span>
            </div>
          </div>

          <div className="grid gap-6">
            {featuredCards.map(card => (
              <div key={card.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="flex">
                  {/* Pokémon Image/Icon */}
                  <div className="w-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 border-r border-gray-100">
                    <div className="text-6xl">
                      {card.image}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{card.name}</h3>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {card.type}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            card.condition === 'Mint' ? 'bg-green-100 text-green-800' :
                            card.condition === 'Near Mint' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {card.condition}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm max-w-2xl">{card.description}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600 mb-1">${card.price}</div>
                        <div className="text-sm text-gray-500">Market Price</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-200 font-medium shadow-md">
                          💬 Make Offer
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition duration-200 font-medium">
                          ⭐ Watch
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">
                        Last updated: Today
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-2xl p-12 shadow-xl mb-16 border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition duration-300">
                <span className="text-3xl text-white">🃏</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">List Your Cards</h3>
              <p className="text-gray-600 leading-relaxed">Sell your Pokémon cards easily with our AI pricing assistant that analyzes market trends</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition duration-300">
                <span className="text-3xl text-white">🤖</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">AI Negotiation</h3>
              <p className="text-gray-600 leading-relaxed">Our AI helps buyers and sellers find fair market prices using real-time data analysis</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition duration-300">
                <span className="text-3xl text-white">💰</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get Paid</h3>
              <p className="text-gray-600 leading-relaxed">Secure transactions and fast payments with buyer/seller protection</p>
            </div>
          </div>
        </section>
      </main>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  )
}