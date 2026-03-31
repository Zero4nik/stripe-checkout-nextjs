import { render, screen } from '@testing-library/react';
import CancelPage from './page';  

describe('CancelPage', () => {
  it('отображает сообщение об отмене оплаты', () => {
    render(<CancelPage />);
    
    expect(screen.getByText(/Оплата отменена/i)).toBeInTheDocument();
    expect(screen.getByText(/Попробовать снова/i)).toBeInTheDocument();
  });
});