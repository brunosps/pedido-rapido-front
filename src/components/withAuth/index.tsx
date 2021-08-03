import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


import AuthState from '../../dtos/AuthState';
import ApiData from '../../dtos/ApiData';
import { getCredential } from '../../services/credentials';
import Employee from '../../dtos/Employee';
import { useToast } from '@chakra-ui/react';

const withAuth = (Component: any, role = "") => {
  const Auth = (props: any) => {
    const router = useRouter();
    const toast = useToast();
    const loggedEmployee: Employee = useSelector((state: AuthState) => state.auth.loggedEmployee);

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

    if (role !== "" && loggedEmployee.occupation !== role) {
      toast({
        title: "Usuário sem acesso",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      router.push("/");
    }

    return <Component {...props} />;
  }

  if (Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
}

export default withAuth;
