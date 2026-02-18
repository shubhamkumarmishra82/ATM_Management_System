import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {

  const accountNumber = localStorage.getItem("accountNumber");
  const [balance, setBalance] = useState(null);


  useEffect(() => {

    async function getData() {
      try {
        const res = await fetch(
          `http://localhost:9090/account/get/${accountNumber}`
        );

        const data = await res.json();
        setBalance(data.balance); 
       
      } catch (error) {
        console.error("Error fetching balance", error);
      }
    }

    if (accountNumber) {
      getData();
    }

  }, [accountNumber]);

  return (
    <>
      {/* NAVBAR */}
     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">

    <span className="navbar-brand">
      ATM Management System
    </span>

    {/* 👇 Hamburger Icon */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#atmNavbar"
      aria-controls="atmNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* 👇 Collapsible Menu */}
    <div className="collapse navbar-collapse" id="atmNavbar">
      <div className="navbar-nav ms-auto">
        <NavLink className="nav-link text-light" to="/debit">Debit</NavLink>
        <NavLink className="nav-link text-light" to="/credit">Credit</NavLink>
        <NavLink className="nav-link text-light" to="/transfer">Transfer</NavLink>
        <NavLink className="nav-link text-light" to="/transaction">Transaction History</NavLink>
        <NavLink className="nav-link text-light" to="/logout">Logout</NavLink>
      </div>
    </div>

  </div>
</nav>


      {/* MAIN CONTENT */}
      <div className="container mt-4">
       

        <div className="alert alert-success">
          <h4>Welcome👋</h4>
          <p>Your account is active and secure.</p>
        </div>

        {/* ACCOUNT SUMMARY */}
        <div className="row mb-4">

          <div className="col-md-4 mb-1">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5>Available Balance</h5>
                <h3 className="text-success">
                  ₹ {balance !== null ? balance : "00.00"}
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-1">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5>Account Number</h5>
                <h4>{accountNumber}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-1">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5>Account Status</h5>
                <h4 className="text-success">Active</h4>
              </div>
            </div>
          </div>

        </div>

        {/* QUICK ACTIONS */}
        <h4 className="mb-3">Quick Actions</h4>
        <div className="row">

          <div className="col-md-3 mb-1">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5>Debit Money</h5>
                <NavLink to="/debit" className="btn btn-danger mt-2">
                  Debit
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-1">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5>Credit Money</h5>
                <NavLink to="/credit" className="btn btn-success mt-2">
                  Credit
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5>Transfer Money</h5>
                <NavLink to="/transfer" className="btn btn-primary mt-2">
                  Transfer
                </NavLink>
              </div>
            </div>
          </div>

          
          <div className="col-md-3 mb-5">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5>Trasaction History</h5>
                <NavLink to="/transaction" className="btn btn-dark mt-2">
                  check
                </NavLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
