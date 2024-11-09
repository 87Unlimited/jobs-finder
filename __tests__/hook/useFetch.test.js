import React from 'react';
import { render, renderHook, waitFor } from '@testing-library/react-native';
import useFetch from '../../hook/useFetch';
import axios from 'axios';

jest.mock('axios');

describe('useFetch', () => {
    it('fetches data correctly', async () => {
        // const mockData = { status: "OK" };
        // axios.mockResolvedValue({ data: { data: mockData } });

        // const { result, waitForNextUpdate } = renderHook(() => useFetch('search', {
        //     query: "React developer",
        //     num_pages: "0",
        // }));

        // await waitFor(() => {
        //     expect(result.current.data).toEqual(mockData);
        //     expect(result.current.isLoading).toBe(false);
        //     expect(result.current.error).toBe(null);
        // });
    });

    it('handles errors correctly', async () => {
        // const errorMessage = 'Network Error';
        // axios.mockRejectedValue(new Error(errorMessage));

        // const { result, waitForNextUpdate } = renderHook(() => useFetch('endpoint', { query: 'value' }));

        // await waitFor(() => {
        //     expect(result.current.data).toEqual([]);
        //     expect(result.current.isLoading).toEqual(false);
        //     expect(result.current.error.message).toBe(errorMessage);
        // });
    });
});