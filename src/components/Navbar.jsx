import React from 'react'
import { Link } from 'react-router-dom' // Pakai "L" Besar & di baris paling atas
import logoStore from '../assets/icons/logo-store.png'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img
                    src={logoStore}
                    alt="KIZZ SHOP"
                    className="main-logo"
                />
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Cari Game"
                    className="search-bar"
                />
            </div>

            <ul className="nav-links">
                {/* Pakai tag <a> untuk scroll internal id di halaman yang sama */}
                <li><a href="#home">Home</a></li>
                <li><a href="#games">Game List</a></li>
                <li><a href="#track">Riwayat Transaksi</a></li>
            </ul>
        </nav>
    )
}

export default Navbar