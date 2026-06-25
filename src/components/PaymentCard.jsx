export default function PaymentCard({ method, isSelected, onSelect }) {
  return (
    <div 
      className={`payment-card ${isSelected ? 'active' : ''}`} 
      onClick={() => onSelect(method.id)}
    >
      <div className="payment-content">
        <img 
          src={method.image} 
          alt={method.name} 
          className="payment-img" 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }} 
        />
        <div className="payment-details">
          <span className="payment-name">{method.name}</span>
          <span className="payment-fee">Admin: {method.fee}</span>
        </div>
      </div>
      {isSelected && <span className="check-mark">✓</span>}
    </div>
  );
}