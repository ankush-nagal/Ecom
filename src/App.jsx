import React from 'react'

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OrdersPage from './components/pages/OrdersPage'
import Header from './components/Header';
import SignupPage from './components/pages/SignupPage';
import Signin from './components/pages/Signin';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        <div className="flex-70  flex flex-col">
          <Header isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          <main className="flex-1 overflow-auto bg-gray-100 p-4 md:ml-6 mt-20 mb-6 mr-3 rounded-xl">
            <Routes>
              <Route path="/" element={<OrdersPage />} />
              <Route path="/Signup" element={<SignupPage />} />
              <Route path="/Signin" element={<Signin />} />
              
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;