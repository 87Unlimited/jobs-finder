import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../app/index';

describe('Home Component', () => {
    test('renders without crashing', () => {
        render(<Home />);
    });

    test('renders Welcome component', () => {
        const { getByTestId } = render(<Home />);
        const welcomeComponent = getByTestId('WelcomeComponent');
        expect(welcomeComponent).toBeTruthy();
    });

    test('renders Popularjobs component', () => {
        const { getByTestId } = render(<Home />);
        const popularJobsComponent = getByTestId('PopularjobsComponent');
        expect(popularJobsComponent).toBeTruthy();
    });

    test('renders Nearbyjobs component', () => {
        const { getByTestId } = render(<Home />);
        const nearbyJobsComponent = getByTestId('NearbyjobsComponent');
        expect(nearbyJobsComponent).toBeTruthy();
    });
});