import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

describe('ProductForm', () => {
  it('renders all form fields', () => {
    render(
      <MemoryRouter>
        <ProductForm />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Genre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create/i })).toBeInTheDocument();
  });
});