import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ihre Backend-URL
});

export const register = (data: { email: string; password: string; username: string }) =>
  api.post('/auth/register', data);

export const login = (data: { email: string; password: string }) =>
  api.post('/auth/login', data);
