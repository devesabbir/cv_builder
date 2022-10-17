import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
 
function AuthRedirect({children}) {
  const {isLogin} = useSelector(state => state.login)
  return isLogin ? <Navigate to={'/'} /> : children 
}

export default AuthRedirect