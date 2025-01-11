import { render, screen, fireEvent } from '@testing-library/react';
    import SearchBar from '../components/SearchBar';

    describe('SearchBar Component', () => {
      it('updates search query on input', () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search staff by name, skills...');
        fireEvent.change(input, { target: { value: 'John' } });
        expect(input).toHaveValue('John');
      });

      it('submits search form', () => {
        const mockSubmit = jest.fn();
        render(<SearchBar />);
        const form = screen.getByRole('form');
        form.onsubmit = mockSubmit;
        fireEvent.submit(form);
        expect(mockSubmit).toHaveBeenCalled();
      });
    });
