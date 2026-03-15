import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Navbar from './components/Navbar'
import JobPostings from './pages/JobPostings'
import PostAJob from './pages/PostAJob'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import JobDetails from './pages/JobDetails'
function App() {

  return (
    <>
      <Router>
  <Navbar/>
  <ToastContainer position='top-right' autoClose={3000}/>
  <Routes>
    <Route path="/" element={<JobPostings/>} />
    <Route path="/jobs/:id" element={<JobDetails/>} />
    <Route path="/postJobs" element={<PostAJob/>} />
   
</Routes>
</Router>
    </>
  )
}

export default App
