import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../app/index';

describe('Home Component', () => {
    test('renders correctly', () => {
        const { getByText } = render(<Home />);

        // Check if certain elements are rendered on the screen
        expect(getByText('Welcome')).toBeTruthy();
        expect(getByText('Popular Jobs')).toBeTruthy();
        expect(getByText('Nearby Jobs')).toBeTruthy();
    });

    test('navigates to other screens', () => {
        // Mock useRouter to test navigation
        const mockUseRouter = jest.fn();
        jest.mock('expo-router', () => ({
            useRouter: mockUseRouter
        }));

        // Render the Home component
        render(<Home />);

        // Check if router function is called
        expect(mockUseRouter).toHaveBeenCalled();
    });
});