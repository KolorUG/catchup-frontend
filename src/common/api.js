import axios from 'axios';
import storageService from './storageService.js'

const token = storageService.get('catchup-auth-key');

const api = axios.create({
  baseURL: 'https://catchupcolor.azurewebsites.net',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const register = ({ firstName, lastName, userName, password}) => api.post('/users/register', {
  firstName,
  lastName,
  userName,
  password
});

const login = async ({ username, password }) => {
  const response = await api.post("/users/authenticate", {
    username,
    password
  });
  storageService.set('catchup-auth-key');

  return response;
};


export { register, login };

