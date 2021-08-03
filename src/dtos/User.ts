export default interface User {
  id: number,
  name: string;
  email: string;
  occupation: string;
  password?: string;
  password_confirmation?: string;
}