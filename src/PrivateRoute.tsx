import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  authentication: boolean;
}

export default function PrivateRoute({ authentication }: PrivateRouteProps) {
  const isAuthenticated = !!localStorage.getItem('accessToken');

  if (authentication) {
    return isAuthenticated === null || isAuthenticated === false ? (
      <Navigate to='/auth' />
    ) : (
      <Outlet />
    );
  } else {
    return isAuthenticated === null || isAuthenticated === false ? (
      <Outlet />
    ) : (
      <Navigate to='/' />
    );
  }
}
