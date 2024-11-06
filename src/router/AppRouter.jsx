// AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import AdminDashboard from '../pages/AdminDashboard';
import SuperAdmin from '../pages/SuperAdmin';
import Login from '../pages/Login';
import Register from  '../pages/Register';
import Dashboard from '../pages/Dasboard';
import ReportForm from '../pages/ReportForm';
const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buat-laporan" element={<ReportForm />} />
        <Route path="/forgot-password" element={<Register />} />

        {/* Route untuk User */}
        <Route element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Route untuk Admin */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Route untuk Superadmin */}
        <Route element={<ProtectedRoute allowedRoles={['superadmin']} />}>
          <Route path="/superadmin/dashboard" element={<SuperAdmin />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
