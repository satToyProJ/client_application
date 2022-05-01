import client from './client';

export const message = () => client.get('/demo');
