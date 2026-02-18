import React, { useState } from "react";
import "../assets/css/SignUpPage.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    mobileNumber: "",
    pin: "",
    confirmPin: ""
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.pin !== formData.confirmPin) {
      alert("PIN and Confirm PIN do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:9090/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
        accountNumber: formData.account,
          mobileNumber: formData.mobile,
          pin: formData.pin
        })
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.message || "Signup failed");
        return;
      }

      alert("Account created successfully!");
      navigate("/signin");

    } catch (error) {
      console.error(error);
      alert("Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="card signup-card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4">Create ATM Account</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              className="form-control mb-3"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className="form-control mb-3"
              name="account"
              placeholder="Enter account number"
              maxLength={12}
              minLength={12}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              className="form-control mb-3"
              name="mobile"
              placeholder="Enter mobile number"
              maxLength="10"
              minLength="10"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              name="pin"
              placeholder="Create 4-digit PIN"
              maxLength="4"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              className="form-control mb-4"
              name="confirmPin"
              placeholder="Confirm PIN"
              maxLength="4"
              onChange={handleChange}
              required
            />

            <div className="d-flex gap-2">
              <button
                type="submit"
                className="btn btn-success w-50"
                disabled={loading}
              >
                {loading ? "Creating..." : "Sign Up"}
              </button>

              <NavLink to="/" className="btn btn-outline-success w-50">
                Back
              </NavLink>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
