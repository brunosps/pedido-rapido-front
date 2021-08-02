import { useDispatch } from 'react-redux';

import { removeCredential } from '../../../services/credentials';
import { clearLoggedEmployee } from '../../../store/modules/auth/reducer';

function Logout() {
  const dispatch = useDispatch();
  
  removeCredential();
  dispatch(clearLoggedEmployee());

  window.location.href = '/'

  return ("")
}

export default Logout;
