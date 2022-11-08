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
import PrivateRoute from "./Components/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import Contact from './Pages/Contact'
import AddProduct from './Components/AddProduct'
import Header from './Components/Header'

import EditListing from './Pages/EditListing'

// import Listing from './Pages/Listing'


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path='/signin' element={< Signin />}></Route>
          <Route path='/signup' element={< Signup />}></Route>
          <Route path='/profile' element={< Profile />}></Route>
          <Route path='/forgot-password' element={< ForgotPassword />}></Route>
          <Route path='/contactus' element={< Contact />}></Route>
          <Route path='/header' element={< Header />}></Route>
          
          <Route path="ap" element={<PrivateRoute />}>
            <Route path="/ap" element={<AddProduct />} />
          </Route>
          <Route path="eap" element={<PrivateRoute />}>
            <Route path="/eap/:listingId" element={<EditListing />} />
          </Route>
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
