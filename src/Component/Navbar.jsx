import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <><nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">

    
    <a className="navbar-brand" href="#">ATM Management System</a>

    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-light fs-5"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Account
          </Link>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <NavLink className="dropdown-item bg-light text-dark" to="/signin">Sign In</NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item bg-light text-dark" to="/signup">Sign Up</NavLink>
            </li>
            
          </ul>
        </li>

      </ul>
    </div>

  </div>
</nav>




      
        </>
    )
}