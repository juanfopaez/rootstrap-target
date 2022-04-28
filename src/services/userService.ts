import httpClient from 'httpClient';
import endPoints from 'constants/endPoints';
import { signInFields, signUpFields } from 'types/sessionTypes';

class userService {
  static signIn(data: signInFields) {
    return httpClient.post(endPoints.session.SIGN_IN, data);
  }

  static signUp(data: signUpFields) {
    return httpClient.post(endPoints.session.SIGN_UP, data);
  }

  static signOut() {
    return httpClient.delete(endPoints.session.SIGN_OUT);
  }
}
export default userService;
