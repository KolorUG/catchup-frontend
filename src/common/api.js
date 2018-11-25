import axios from 'axios';
import storageService from './storageService.js'
import auth from './auth.js'

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

const login = async ({ username, password }, successCallback) => {
  const response = await api.post("/users/authenticate", {
    username,
    password
  })
    // when succeeds
    .then(() => {
      auth.authenticate(successCallback)
    })
    .then(() => console.log('elo'));
  storageService.set('catchup-auth-key', token);

  return response;
};


export { register, login };

