import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = async (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const http = require('https');

    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/${endpoint}',
        params: { ...query },
        headers: {
            'x-rapidapi-key': 'd1e4174d09msh51c21dcbb0950e5p165928jsnebc5e5180a67',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            console.log(response.data);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;