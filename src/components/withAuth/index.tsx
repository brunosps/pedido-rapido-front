import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


import AuthState from '../../dtos/AuthState';
import User from '../../dtos/User';
import ApiData from '../../dtos/ApiData';
import { getCredential } from '../../services/credentials';

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const loggedEmployee: User = useSelector((state: AuthState) => state.auth.loggedEmployee);

    const apiData: ApiData = getCredential();

    if (!loggedEmployee ||
      !apiData ||
      !apiData['access-token'] ||
      apiData['access-token'] === ''
    ) {
      router.push({
        pathname: '/Auth/Login',
        query: {
          callback: router.pathname
        }
      });
    }

    return <Component {...props} />;
  }

  if (Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
}

export default withAuth;