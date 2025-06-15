import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminPortal from '../components/AdminPortal';

describe('AdminPortal', () => {
  it('renders heading and Add New Book link', () => {
    render(
      <MemoryRouter>
        <AdminPortal />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Admin Portal');
    expect(screen.getByRole('link', { name: /Add New Book/i })).toBeInTheDocument();
  });
});