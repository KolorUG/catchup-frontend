const storageService = {
  get(item) {
    if (localStorage.getItem(item)) {
      return localStorage.getItem(item);
    }
    if (sessionStorage.getItem(item)) {
      return sessionStorage.getItem(item);
    }
  },
  set(item, value, shouldPersist) {
    if (shouldPersist) {
      localStorage.setItem(item, value);
      return;
    }
    sessionStorage.setItem(item, value);
  }
};

export default storageService;