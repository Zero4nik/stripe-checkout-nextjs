'use client';

import { useState } from 'react';
import './PaymentButton.css'
export default function PaymentBtn() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePayment = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const res = await fetch('/api/create-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId: 'price_1TFyVy06mDEBENyfIMliOAwx' }),
            });
            
            const data = await res.json();
            
            if (!res.ok) throw new Error(data.error);

            window.location.href = data.url;
            
        } catch (err) {
            console.error('Ошибка:', err);
            setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='ButtonContainer'>
            <button
                onClick={handlePayment} 
                disabled={loading}
                className='buyingBtn'
            >
                {loading ? 'Загрузка...' : 'Оплатить $10'}
            </button>
            {error && (
                <p className='errorInfo'>
                    Ошибка: {error}
                </p>
            )}
        </div>
    );
}