import React from 'react'
import { Link } from 'react-router-dom'
import iconFf from '../assets/icons/ff.jpg'
import iconMl from '../assets/icons/ml.jpg'
import iconPubg from '../assets/icons/pubg.jpg'
import iconCodm from '../assets/icons/codm.jpg'
import iconRoblox from '../assets/icons/roblox.jpg'
import iconPb from '../assets/icons/point-blank.jpg'

function GameSection() {
  const games = [
    { id: 'free-fire', name: 'Free Fire', dev: 'Garena', icon: iconFf },
    { id: 'mobile-legends', name: 'Mobile Legends', dev: 'Moonton', icon: iconMl },
    { id: 'pubg-mobile', name: 'PUBG Mobile', dev: 'Level Infinite', icon: iconPubg },
    { id: 'roblox', name: 'Roblox', dev: 'Roblox Corporation', icon: iconRoblox },
    { id: 'codm', name: 'Call Of Duty Mobile', dev: 'Garena Mobile', icon: iconCodm },
    { id: 'point-blank', name: 'Point Blank', dev: 'Garena', icon: iconPb },
  ]

  return (
    <section id="games" className="game-section">
      <div className="section-title">
        <h3>List Game</h3>
        <div className="underline"></div>
      </div>
      <div className="games-grid">
        {games.map((game) => (
          <Link key={game.id} to={`/detail/${game.id}`} className="game-card">
            <div className="card-thumb">
              <img src={game.icon} alt={game.name} />
            </div>
            <div className="card-details">
              <h4>{game.name}</h4>
              <p>{game.dev}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default GameSection