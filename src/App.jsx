import Signup from './components/Signup';
import Signin from './components/Signin';
import Account from './components/Account';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ThemeContextProvider from './context/ThemeContext';
function App() {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
