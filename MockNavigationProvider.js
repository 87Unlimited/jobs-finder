import React from 'react';
import { NavigationContainer } from 'expo-router';

const MockNavigationProvider = ({ children }) => {
    return <NavigationContainer>{children}</NavigationContainer>;
};

export default MockNavigationProvider;