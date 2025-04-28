export interface User {
    name: string;
    email: string;
    password: string;
    phone:string;
}
export interface userInfo {
  _id: string;
  name: string;
  email: string;
}
export type SignUpInput = User;

export type SignInInput = Pick<User, 'email' | 'password'>;