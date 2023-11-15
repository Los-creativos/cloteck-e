import { render, screen } from '@testing-library/react';
import  Home  from '../app/page';

describe('Home', () => {
    it('renders the Home component', () => {
      render(<Home />);
      expect(screen.getByTestId('home-container')).toBeInTheDocument();
    });
  });