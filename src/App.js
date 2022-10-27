import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from  './Pages/Home'
import NavBar from './Components/NavBar'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import ForgotPassword from './Pages/ForgotPassword'
import { ToastContainer } from "react-toastify";
import Profile from './Pages/Profile'


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/signin' element={< Signin />}></Route>
          <Route path='/signup' element={< Signup />}></Route>
          <Route path='/profile' element={< Profile />}></Route>
          <Route path='/forgot-password' element={< ForgotPassword />}></Route>

        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
