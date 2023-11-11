import { useState } from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Account from './components/Account';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
