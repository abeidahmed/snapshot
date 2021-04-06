import Service from '@ember/service';

const AUTH_KEY = 'snapshot-token';

export default class AuthService extends Service {
  loginWithToken(token) {
    window.localStorage.setItem(AUTH_KEY, token);
  }
}
