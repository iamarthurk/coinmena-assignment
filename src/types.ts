export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
  picUrl: string;
}

export interface SignInFormValues {
  username: string;
  password: string;
}
