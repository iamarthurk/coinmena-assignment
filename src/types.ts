export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  picUrl: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
}

export interface CryptoAsset {
  id: string;
  price: string;
  icon: string;
  name: string;
  [key: string]: string;
}
