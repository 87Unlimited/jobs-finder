import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFetch from '../hook/useFetch';

import { renderHook } from '@testing-library/react-hooks';

describe('useFetch', () => {
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
    });

    it('fetches data successfully', async () => {
        const data = [{ id: 1, name: 'John' }];
        const endpoint = 'exampleEndpoint';
        const query = { param: 'value' };

        mock.onGet(`https://jsearch.p.rapidapi.com/${endpoint}`, { params: query }).reply(200, { data });

        const { result, waitForNextUpdate } = renderHook(() => useFetch(endpoint, query));

        await waitForNextUpdate();

        expect(result.current.data).toEqual(data);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.error).toBeNull();
    });

    it('handles errors correctly', async () => {
        const error = new Error('Request failed');
        const endpoint = 'exampleEndpoint';
        const query = { param: 'value' };

        mock.onGet(`https://jsearch.p.rapidapi.com/${endpoint}`, { params: query }).reply(500, { error });

        const { result, waitForNextUpdate } = renderHook(() => useFetch(endpoint, query));

        await waitForNextUpdate();

        expect(result.current.data).toEqual([]);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.error).toEqual(error);
    });
});