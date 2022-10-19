import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function AuthenticetUser({children}) {
  const { isLogin } = useSelector(state => state.login)
  return isLogin ? children : <Navigate to={'/login'} />
}

export default AuthenticetUser