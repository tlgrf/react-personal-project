import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import EditProductForm from '../components/EditProductForm';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        id: 1,
        title: 'Existing Book',
        author: 'Auth',
        genre: 'Gen',
        price: 5,
        description: 'Desc',
      }),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('EditProductForm', () => {
  it('loads existing book data and displays in form', async () => {
    render(
      <MemoryRouter initialEntries={['/admin/edit/1']}>
        <Routes>
          <Route path="/admin/edit/:id" element={<EditProductForm />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByDisplayValue('Existing Book')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Auth')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Gen')).toBeInTheDocument();
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Desc')).toBeInTheDocument();
  });
});