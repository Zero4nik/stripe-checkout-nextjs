import { render, screen } from '@testing-library/react';
import SuccessPage from './page';
import { useSearchParams } from 'next/navigation';

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn()
}))
describe('SuccessPage',() =>{
  it('Должен отображать sessionId в URL',() =>{
    const mockGet  = vi.fn().mockReturnValue('testMyGetMock') as any
    (useSearchParams as any).mockReturnValue({get: mockGet })
    
    render(<SuccessPage/>)
    
    expect(screen.getByText(/Оплата прошла успешно/)).toBeInTheDocument()
    expect(screen.getByText(/testMyGetMock/)).toBeInTheDocument()

  })
  it("Должен отображать 'нет сессион id' если параметр отсутствует",() =>{
    const mockGet  = vi.fn().mockReturnValue(null) as any
    (useSearchParams as any).mockReturnValue({get: mockGet })
    
    render(<SuccessPage/>)
    
    expect(screen.getByText(/Оплата прошла успешно/)).toBeInTheDocument()
    expect(screen.getByText(/нет sessionID/i)).toBeInTheDocument()

  })
})