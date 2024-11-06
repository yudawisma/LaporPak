import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from "./components/layout/Header";
import HeaderUser from "./components/layout/HeaderUser";

function App() {
  return (
    <AuthProvider>
      <div className="font-sans">
        <AppHeader />
        <AppRouter />
        <Footer />
      </div>
    </AuthProvider>
  );
}

function AppHeader() {
  const { isLoggedIn } = useAuth();  // Ambil status login dari context

  return (
    <header>
      {isLoggedIn ? <HeaderUser /> : <Header />}
    </header>
  );
}

export default App;
