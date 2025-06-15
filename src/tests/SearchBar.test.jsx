import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('calls onSearch when input changes', () => {
    const onSearch = vi.fn();
    render(<SearchBar search="" onSearch={onSearch} />);
    const input = screen.getByPlaceholderText(/Search books/i);
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(onSearch).toHaveBeenCalledWith('abc');
  });
});