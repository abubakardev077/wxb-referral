import cookie from 'js-cookie';

// Set in Cookie
export const setCookie = (key, value) => {
  if (window !== 'undefined') {
    cookie.set(key, value, {
      // 1 Day
      expires: 1,
    });
  }
};

// remove from cookie
export const removeCookie = (key) => {
  if (window !== 'undefined') {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key) => {
  if (window !== 'undefined') {
    return cookie.get(key);
  }
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
  if (window !== 'undefined') {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

// Remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== 'undefined') {
    sessionStorage.removeItem(key);
  }
};

// Authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response) => {
  console.log('AUTHENTICATE USER', response);
  setCookie('token', response.data.token);
  setLocalStorage('user', response.data.user);
};

// Access user info from localstorage
export const isAuth = () => {
  if (window !== 'undefined') {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};

export const signout = () => {
  removeCookie('token');
  removeLocalStorage('user');
};

export const updateUser = (response) => {
  if (typeof window !== 'undefined') {
    let auth = JSON.parse(sessionStorage.getItem('user'));
    auth = response.data;
    sessionStorage.setItem('user', JSON.stringify(auth));
  }
};