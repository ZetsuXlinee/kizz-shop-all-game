import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GameDetail from './pages/GameDetail'
import HeroSlider from './components/HeroSlider'
import WelcomeBox from './components/WelcomeBox'
import GameSection from './components/GameSection'
import './App.css'

function GamePage() {
  return (
    <main className="container">
      <HeroSlider />
      <WelcomeBox />
      <GameSection />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<GamePage />} />
          {/* Tambahan biar link 'Game List' di navbar gak kosong lagi */}
          <Route path="/games" element={<GamePage />} />
          <Route path="/detail/:gameId" element={<GameDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App