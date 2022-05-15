import axios from 'axios';

const client = axios.create({ baseURL: 'http://54.180.113.96:8080' });

// client.defaults.baseURL = 'http://54.180.113.96:8080';

export default client;
