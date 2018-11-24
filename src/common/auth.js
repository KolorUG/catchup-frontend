import storageService from './storageService.js'

const auth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 1000);
  },
  signout(callback) {
    storageService.remove('catchup-auth-token');
    this.isAuthenticated = false;
    setTimeout(callback, 100)
  }
};

export default auth;