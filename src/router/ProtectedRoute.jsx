import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { role } = useAuth();

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" />; // Redirect ke login jika role tidak sesuai
  }

  return <Outlet />;
};

export default ProtectedRoute;
