const initialState = {
  session: {
    authenticated: true,
    user: {
      email: 'test@gmail.com',
      uid: 'test@gmail.com',
      provider: 'email',
      firstName: '',
      lastName: '',
      username: 'Test',
      gender: 'other',
      pushToken: null,
      allowPasswordChange: false,
      id: 21,
      avatar: {
        url: null,
        normal: {
          url: null
        },
        smallThumb: {
          url: null
        }
      }
    },
    info: {
      token: 'mytoken',
      client: 'myclient'
    }
  }
};

export default initialState;
