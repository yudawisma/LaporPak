import { useAuth } from '../../contexts/AuthContext';
import Header from './Header';  // Header sebelum login
import HeaderUser from './HeaderUser';  // Header setelah login

const Layout = () => {
  const { isLoggedIn } = useAuth();  // Mendapatkan status login
  console.log(isLoggedIn);  
  return (
    <div>
      {isLoggedIn ? <HeaderUser /> : <Header />}
    </div>
  );
};

export default Layout;
