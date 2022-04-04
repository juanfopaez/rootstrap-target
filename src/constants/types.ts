export interface infoType {
  token?: string;
  uid?: string;
  client?: string;
}

export interface sessionState {
  authenticated: boolean;
  user: null;
  info: infoType;
}
