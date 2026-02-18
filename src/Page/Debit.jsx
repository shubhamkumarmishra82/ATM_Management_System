import React, { useState } from "react";
import "../assets/css/SignUpPage.css"
import { NavLink, useNavigate } from "react-router-dom";

export default function Debit() {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        amount: ""
    });
          let accountNumber = localStorage.getItem("accountNumber");
      

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
 const response = await fetch("http://localhost:9090/account/debit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        balance:formData.amount,
        accountNumber:accountNumber,
       
       })
    });

    if (response.ok) {
      navigate("/dashboard");
    } else {
      alert("Amount InSufficient");
    }
    }
    catch(error){
      
    }
  };

    return (
        <div className="signup-wrapper">
            <div className="card signup-card shadow">
                <div className="card-body">
                    <h3 className="text-center mb-4">Debit Form</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Amount</label>
                            <input
                                type="text"
                                className="form-control"
                                name="amount"
                                placeholder="Enter Amount"
                                onChange={handleChange}
                                required
                            />
                        </div>
                       <div className="d-flex gap-2">
                                    <button type="submit" className="btn btn-success w-50">
                                    Debit
                                  </button>
                                  <NavLink to="/dashboard" className="btn btn-success w-50 text-light">Back</NavLink>
                              </div>



                    </form>

                </div>
            </div>
        </div>
    );
}
