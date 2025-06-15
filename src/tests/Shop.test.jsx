import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Shop from '../components/Shop';

beforeEach(() => {
  const books = [
    { id: 1, title: 'A', author: 'X', genre: 'G', price: 1.0, description: 'D' },
    { id: 2, title: 'B', author: 'Y', genre: 'H', price: 2.0, description: 'E' }
  ];
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(books),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Shop', () => {
  it('renders book catalog and product cards', async () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    expect(await screen.findByText(/Book Catalog/i)).toBeInTheDocument();
    expect(await screen.findByText('A')).toBeInTheDocument();
    expect(await screen.findByText('B')).toBeInTheDocument();
  });
});