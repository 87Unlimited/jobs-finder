import React from 'react';
import { render, Screen } from '@testing-library/react-native';
import Home from '../app/index';

jest.mock('expo-router', () => ({
    useRouter: jest.fn(),
}));


describe('Home Component', () => {
    it('renders home screen without crashing', () => {
        const { getByTestId } = render(<Home />);

        // Components
        const welcomeElement = getByTestId('welcome-message');
        const popularJobsElement = getByTestId('popularJobs-message');
        const nearbyJobsElement = getByTestId('nearbyJobs-message');

        // Check components render correctly
        expect(welcomeElement).toBeTruthy();
        expect(popularJobsElement).toBeTruthy();
        expect(nearbyJobsElement).toBeTruthy();
    });
});