import logo from './logo.svg';
import './App.css';
import Login from './component/Login'
import Register from './component/Register'
import Navbar from './component/Navbar'
import React from 'react'
import { BrowserRouter as Router, Routes,Switch, Route } from 'react-router-dom'
import SignInPage from './component/Login';
import SignUpPage from './component/Register';

function App() {
  return (
    
    
      <Router>
          <div>
              <Routes>
                  <Route exact path="/" element={<SignInPage></SignInPage>} component={ Login } />
                  {/* <Route path="/login" component={ LoginPage } /> */}
                  <Route path="/register" element={<SignUpPage></SignUpPage>}component={ Register } />
                  {/* <Route path="/forget-password" component={ ForgetPasswordPage } /> */}
                  <Route path="/navbar" element={<Navbar></Navbar>} component={ Navbar } />
              </Routes>
          </div>
      </Router>
  )
       
  
}

export default App;
