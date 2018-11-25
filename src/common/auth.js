import storageService from './storageService.js'

const auth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 0);
  },
  signout(callback) {
    storageService.remove('catchup-auth-token');
    this.isAuthenticated = false;
    setTimeout(callback, 0)
  }
};

export default auth;