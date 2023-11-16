import Signup from './components/Signup';
import Signin from './components/Signin';
import Account from './components/Account';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
