export interface infoType {
  token?: string;
  client?: string;
}

export interface avatarType {
  url: string;
  normal?: { url: string };
  smallThumb?: { url: string };
}

export interface userType {
  id?: number;
  email: string;
  uid: string;
  provider: string;
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  pushToken: string;
  allowPasswordChange: boolean;
  avatar?: avatarType;
}

export interface sessionState {
  authenticated: boolean;
  user: userType;
  info: infoType;
}

export interface signInFields {
  email: string;
  password: string;
}
