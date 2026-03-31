'use client';
import './succes.css'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
    const sessionId = useSearchParams().get('session_id');

    return (
        <div>
            <h1 className='buyCompleted'>Оплата прошла успешно!</h1>
            <div className='menuSessionAndHome'>
            <p className='sessionCompleted'>Session ID: {sessionId || 'нет sessionID'}</p>
            <Link href="/" className='HomeLink'>На главную</Link>
            </div>
        </div>
    );
}