import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PaymentList from '../components/PaymentList';

function GameDetail() {
  const { gameId } = useParams();
  
  // State untuk menyimpan data input dan pilihan user
  const [userId, setUserId] = useState('');
  const [selectedNominal, setSelectedNominal] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('');

  // Database Harga per Game
  const allNominals = {
    "free-fire": [
      { id: 1, name: '50 Diamonds', price: 'Rp 8.250' },
      { id: 2, name: '140 Diamonds', price: 'Rp 20.150' },
      { id: 3, name: '355 Diamonds', price: 'Rp 48.900' },
      { id: 4, name: '720 Diamonds', price: 'Rp 97.500' },
      { id: 5, name: '1450 Diamonds', price: 'Rp 195.000' },
      { id: 6, name: '2180 Diamonds', price: 'Rp 291.000' },
    ],
    "mobile-legends": [
      { id: 1, name: '86 Diamonds', price: 'Rp 21.450' },
      { id: 2, name: '172 Diamonds', price: 'Rp 42.900' },
      { id: 3, name: '257 Diamonds', price: 'Rp 64.350' },
      { id: 4, name: '706 Diamonds', price: 'Rp 171.200' },
      { id: 5, name: '1050 Diamonds', price: 'Rp 256.500' },
      { id: 6, name: '2195 Diamonds', price: 'Rp 513.000' },
    ],
    "pubg-mobile": [
      { id: 1, name: '60 UC', price: 'Rp 16.122' },
      { id: 2, name: '325 UC', price: 'Rp 80.978' },
      { id: 3, name: '660 UC', price: 'Rp 161.955' },
      { id: 4, name: '1800 UC', price: 'Rp 405.257' },
      { id: 5, name: '3850 UC', price: 'Rp 810.512' },
      { id: 6, name: '8100 UC', price: 'Rp 1.621.208' },
    ],
    "roblox": [
      { id: 1, name: '400 Robux', price: 'Rp 82.000' },
      { id: 2, name: '800 Robux', price: 'Rp 164.000' },
      { id: 3, name: '1700 Robux', price: 'Rp 328.000' },
    ],
    "codm": [
      { id: 1, name: '31 CP', price: 'Rp 5.000' },
      { id: 2, name: '63 CP', price: 'Rp 10.000' },
      { id: 3, name: '128 CP', price: 'Rp 20.000' },
      { id: 4, name: '321 CP', price: 'Rp 50.000' },
    ],
    "point-blank": [
      { id: 1, name: '1.200 Cash', price: 'Rp 11.000' },
      { id: 2, name: '2.400 Cash', price: 'Rp 22.000' },
      { id: 3, name: '6.000 Cash', price: 'Rp 55.000' },
    ]
  };

  const nominals = allNominals[gameId] || [];

  // Fungsi untuk memproses pembelian
  const handleBuy = () => {
    if (!userId || !selectedNominal || !selectedPayment) {
      alert("Lengkapin dulu datanya Yaaaa!");
      return;
    }
    alert(`Order Berhasil!\nID: ${userId}\nItem: ${selectedNominal.name}\nMetode: ${selectedPayment.toUpperCase()}`);
  };

  return (
    <div className="container detail-page">
      {/* HEADER & BACK LINK */}
      <div className="welcome-box" style={{ textAlign: 'left', padding: '20px 0' }}>
        <Link to="/" className="back-link">← Kembali ke Beranda</Link>
        <h1 className="game-title">Top Up {gameId ? gameId.replace('-', ' ').toUpperCase() : "Game"}</h1>
        <p>Proses otomatis 24 Jam.</p>
      </div>

      {/* STEP 1: INPUT DATA */}
      <div className="form-section">
        <div className="step-header">
          <span className="step-num">1</span>
          <h3>Masukkan Data Akun</h3>
        </div>
        <input 
          type="text" 
          placeholder="Masukkan User ID" 
          className="form-input"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <p className="input-hint">Contoh: 12345678 (ID karakter kamu)</p>
      </div>

      {/* STEP 2: PILIH NOMINAL */}
      <div className="form-section">
        <div className="step-header">
          <span className="step-num">2</span>
          <h3>Pilih Nominal</h3>
        </div>
        <div className="games-grid">
          {nominals.length > 0 ? (
            nominals.map((item) => (
              <div 
                key={item.id} 
                className={`game-card nominal-card ${selectedNominal?.id === item.id ? 'active' : ''}`} 
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedNominal(item)}
              >
                <div className="card-details">
                  <h4 style={{ fontSize: '16px', marginBottom: '5px' }}>{item.name}</h4>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: '#666' }}>Data nominal belum tersedia.</p>
          )}
        </div>
      </div>

      {/* STEP 3: PILIH METODE PEMBAYARAN */}
      <div className="form-section">
        <div className="step-header">
          <span className="step-num">3</span>
          <h3>Pilih Metode Pembayaran</h3>
        </div>
        <PaymentList 
          selectedId={selectedPayment} 
          onPaymentChange={(id) => setSelectedPayment(id)} 
        />
      </div>

      {/* BUTTON SUBMIT */}
      <button 
        className="btn-buy" 
        style={{ marginTop: '30px' }}
        onClick={handleBuy}
      >
        Beli Sekarang
      </button>
    </div>
  );
}

export default GameDetail;