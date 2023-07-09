import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedLayout() {
  const { user } = useSelector((state) => state.user);

  return user ? <Outlet /> : <Navigate to='/auth/signin' replace={true} />;
}

export default ProtectedLayout;
