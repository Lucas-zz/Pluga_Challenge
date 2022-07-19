import axios from 'axios';

const API_BASE_URL = 'https://pluga.co'

const instance = axios.create({
    baseURL: API_BASE_URL
});

export default instance;