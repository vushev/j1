import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost/api',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',

    },
});

export default http;