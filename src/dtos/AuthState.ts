import Employee from './Employee';

export default interface AuthState {
  auth: {
    loggedEmployee: Employee;
  }
}
