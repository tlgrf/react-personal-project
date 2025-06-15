import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductPage from '../components/ProductPage';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        id: 1,
        title: 'Test Book',
        author: 'Author',
        genre: 'Genre',
        price: 9.99,
        description: 'Desc',
      }),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('ProductPage', () => {
  it('fetches and displays book details', async () => {
    render(
      <MemoryRouter initialEntries={['/shop/1']}>
        <Routes>
          <Route path="/shop/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Title, author, genre
    expect(await screen.findByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText(/Author:/i)).toHaveTextContent('Author');
    expect(screen.getByText(/Genre:/i)).toHaveTextContent('Genre');

    // Now assert the actual price string "$9.99"
    expect(screen.getByText(/\$9\.99/)).toBeInTheDocument();

    // Description
    expect(screen.getByText('Desc')).toBeInTheDocument();
  });
});