export type User = {
  name: string;
  email: string;
  password: undefined;
  photo: string;
  role: string;
};

export type ResponseLoginData = {
  user: User;
  token: string;
};

export type Point = {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  tipoLixo: Array<String>;
  city: string;
  state: string;
  photo?: string;
  createdById: string;
}