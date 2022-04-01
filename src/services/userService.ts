import httpClient from 'httpClient';
import endPoints from 'constants/endPoints';

class userService {
  static signIn(data: any) {
    return httpClient.post(endPoints.SIGN_IN, data);
  }

  static signUp(data: any) {
    return httpClient.post(endPoints.SIGN_UP, data);
  }

  static signOut() {
    return httpClient.delete(endPoints.SIGN_OUT);
  }
}
export default userService;
