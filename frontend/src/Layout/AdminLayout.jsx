import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

function AdminLayout() {
  const { user } = useSelector((state) => state.user);

  return user && user.role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to='/auth/signin' replace={true} />
  );
}

export default AdminLayout;
