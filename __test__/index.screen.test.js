import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen, { CustomText } from '../app/index';

describe('HomeScreen Component', () => {
    test('renders welcome text', () => {
        const { getByText } = render(<HomeScreen />);
        const welcomeText = getByText('Welcome!');
        expect(welcomeText).toBeTruthy();
    });
});

describe('CustomText Component', () => {
    test('renders children text', () => {
        const { getByText } = render(<CustomText>Welcome!</CustomText>);
        const childrenText = getByText('Welcome!');
        expect(childrenText).toBeTruthy();
    });
});