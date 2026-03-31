import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PaymentBtn from './PaymentButton';

describe('PaymentBtn', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('показывает кнопку с текстом "Оплатить $10"', () => {
    render(<PaymentBtn />);
    
    const button = screen.getByText(/Оплатить \$10/i);
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('меняет текст на "Загрузка..." после клика', async () => {  
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ sessionId: 'test_123', url: 'https://stripe.com' }),
    });
    
    render(<PaymentBtn />);
    
    const button = screen.getByText(/Оплатить \$10/i);
    fireEvent.click(button);
    
    expect(screen.getByText(/Загрузка.../i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });

  it('перенаправляет на Stripe при успешном ответе', async () => { 
    const originalLocation = window.location;
    delete (window as any).location;
    (window as any).location = { href: '' };
    
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ sessionId: 'test_123', url: 'https://checkout.stripe.com/test' }),
    });
    
    render(<PaymentBtn />);
    
    const button = screen.getByText(/Оплатить \$10/i);
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(window.location.href).toBe('https://checkout.stripe.com/test');
    });
    
    (window as any).location = originalLocation;
  });

  it('показывает ошибку если сервер вернул ошибку', async () => {  
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Неверный priceId' }),
    });
    
    render(<PaymentBtn />);
    
    const button = screen.getByText(/Оплатить \$10/i);
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText(/Неверный priceId/i)).toBeInTheDocument();
    });
  });
});