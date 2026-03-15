import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
     
  return (
    <div className="bg-primary text-light py-2">
  <nav className="navbar navbar-expand-lg navbar-dark container">
    
    {/* Logo */}
    <Link to="/" className="navbar-brand fs-4">
      Intern House
    </Link>

    {/* Mobile Toggle Button */}
   <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible Content */}
    <div className="collapse navbar-collapse" id="navbarContent">

    

      {/* Icons */}
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">
         Job Postings
        </Link>
</li>
<li className="nav-item">
        <Link to="postJobs" className="nav-link">
          Post a Job
          {/* <span className="fs-6"><WishlistCounter /></span> */}
        </Link>
</li>

      </ul>
    </div>
  </nav>
</div>
  )
}

export default Navbar
// className="d-flex align-items-center gap-4 mt-3 mx-2 mt-lg-0"
//  className="nav-link d-flex align-items-center gap-1"