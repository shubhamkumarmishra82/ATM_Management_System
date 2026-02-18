import  { useState } from "react";
import "../assets/css/SignUpPage.css"
import {  NavLink, useNavigate } from "react-router-dom";

export default function Transfer() {
    const [formData, setFormData] = useState({
        recieverNumber: "",
        amount:"",
    });
    let navigate = useNavigate()
    let accountNumber = localStorage.getItem("accountNumber")

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch(`http://localhost:9090/account/transfer/${accountNumber}` , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  accountNumber:formData.recieverNumber,
                  balance:formData.amount
                })
            });
            if(response.ok){
            navigate("/dashboard")
            }
            else{
                alert("transfer Failed ")
            }

        }
        catch(error){
            console.log(error)
        }

    };

    return (
        <div className="signup-wrapper">
            <div className="card signup-card shadow">
                <div className="card-body">
                    <h3 className="text-center mb-4">Transfer Form</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Reciever Account Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="recieverNumber"
                                placeholder="Enter account number"
                                maxLength="12"
                                minLength="12"
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                                                           Transfer
                                                         </button>
                                                         <NavLink to="/dashboard" className="btn btn-success w-50 text-light">Back</NavLink>
                                                     </div>




                    </form>

                </div>
            </div>
        </div>
    );
}
