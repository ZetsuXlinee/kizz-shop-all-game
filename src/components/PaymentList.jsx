import { paymentMethods } from '../data/paymentMethods';
import PaymentCard from './PaymentCard';

export default function PaymentList({ selectedId, onPaymentChange }) {
  return (
    <div className="payment-container">
      <div className="payment-grid">
        {paymentMethods.map((method) => (
          <PaymentCard 
            key={method.id} 
            method={method} 
            isSelected={selectedId === method.id}
            onSelect={onPaymentChange}
          />
        ))}
      </div>
    </div>
  );
}