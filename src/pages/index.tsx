
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import withAuth from '../components/withAuth';
import AuthState from '../dtos/AuthState';
import Employee from '../dtos/Employee';

function Home() {
  const loggedEmployee: Employee = useSelector((state: AuthState) => state.auth.loggedEmployee);

  const router = useRouter();

  if (loggedEmployee) {
    let employeePath = "/Admin";
    switch (loggedEmployee.occupation) {
      case "waiter": {
        //statements; 
        employeePath = "/Attendance";
        break;
      }
      default: {
        //statements; 
        let employeePath = "/Kitchen";
        break;
      }
    }
    router.push(employeePath);
  }

  return (
    <h1>Home {loggedEmployee.email}</h1>
  )
}

export default withAuth(Home);
