import { useState } from 'react'
import '../src/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Properties from './pages/Properties';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
       <Routes>
       <Route path="/" element={<LogIn/>}/>
         <Route path="/properties" element={<Properties/>}/>
         <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
