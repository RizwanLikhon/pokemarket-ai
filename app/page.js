'use client'
import { useState } from 'react'

export default function Home() {
  const [featuredCards] = useState([
    { id: 1, name: 'Charizard', price: 65, condition: 'Mint' },
    { id: 2, name: 'Pikachu', price: 25, condition: 'Near Mint' },
    { id: 3, name: 'Blastoise', price: 45, condition: 'Excellent' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              <h1 className="text-2xl font-bold text-gray-800">PokéMarket AI</h1>
            </div>
            <nav className="flex space-x-6">
              <button className="text-gray-600 hover:text-red-600 font-medium">Home</button>
              <button className="text-gray-600 hover:text-red-600">Buy Cards</button>
              <button className="text-gray-600 hover:text-red-600">Sell Cards</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Login</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Buy & Sell Pokémon Cards
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered marketplace with smart price negotiation
          </p>
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              🤖 <strong>AI Negotiator:</strong> Get fair prices instantly!
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600">
              Start Trading Now
            </button>
          </div>
        </div>

        {/* Featured Cards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Featured Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCards.map(card => (
              <div key={card.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">🃏 {card.name}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Condition: {card.condition}</span>
                  <span className="text-lg font-bold text-green-600">${card.price}</span>
                </div>
                <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                  Make Offer
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}