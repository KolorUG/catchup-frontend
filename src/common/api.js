import axios from 'axios';
import storageService from './storageService.js'
const api = axios.create({
  baseURL: 'http://localhost:3001'
});

api.defaults.timeout = 5000;

api.defaults.headers.common['Authorization'] = storageService.get('catchup-auth-key');