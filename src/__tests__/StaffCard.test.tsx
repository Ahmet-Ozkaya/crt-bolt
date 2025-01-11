import { render, screen } from '@testing-library/react';
    import StaffCard from '../components/StaffCard';

    const mockStaff = {
      name: 'John Doe',
      photo: 'https://via.placeholder.com/150',
      rating: 4.5,
      skills: ['Customer Service', 'Sales'],
      rate: 25,
      available: true
    };

    describe('StaffCard Component', () => {
      it('renders staff information correctly', () => {
        render(<StaffCard {...mockStaff} />);
        
        expect(screen.getByText(mockStaff.name)).toBeInTheDocument();
        expect(screen.getByText('$25/hr')).toBeInTheDocument();
        expect(screen.getByText('Customer Service')).toBeInTheDocument();
        expect(screen.getByText('Sales')).toBeInTheDocument();
      });

      it('shows correct availability status', () => {
        render(<StaffCard {...mockStaff} available={false} />);
        expect(screen.getByText('Unavailable')).toBeInTheDocument();
      });
    });
