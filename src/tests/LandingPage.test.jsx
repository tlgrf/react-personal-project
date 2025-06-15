import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import LandingPage from '../components/LandingPage';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, name: 'Test Store', description: 'Desc', phone_number: '123' }]),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('LandingPage', () => {
  it('fetches and displays store info', async () => {
    render(<LandingPage />);
    expect(screen.getByText(/Loading store info/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Store'));
    expect(screen.getByText('Desc')).toBeInTheDocument();
    expect(screen.getByText(/Phone:/i)).toBeInTheDocument();
  });
});