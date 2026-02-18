import React, { useState } from "react";
import "../assets/css/Login.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function SignPage() {
  const [account, setAccount] = useState("");
  const [pin, setPin] = useState("");
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
 const response = await fetch("http://localhost:9090/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        accountNumber: account,
         pin:pin
       })
    });

    if (response.ok) {
 
      localStorage.setItem("accountNumber", account);

      navigate("/dashboard");
    } else {
      alert("Invalid account or PIN");
    }
    }
    catch(error){
      
    }
  };

  return (
    <div className="login-wrapper">
      <div className="card login-card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4">ATM Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Account Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter account number"
                maxLength="12"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">PIN Number</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter 4-digit PIN"
                maxLength="4"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>

  
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success w-50">
                Login
              </button>

              <NavLink
                to="/"
                className="btn btn-outline-success w-50"
              >
                Back
              </NavLink>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
