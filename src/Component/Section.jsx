
import { NavLink } from "react-router-dom";
export default function Section(){
    return(
        <>
        <div className="container my-5">
  <div className="p-5 mb-4 bg-light rounded-3 text-center shadow">
    <h1 className="display-4">Welcome to ATM Management System</h1>
    <p className="lead">
      Manage your bank account seamlessly! Debit, Credit, Transfer, and Check your history with ease.
    </p>
    <hr className="my-4"/>
    <p>Get started now by signing in or creating an account.</p>
    <NavLink className="btn btn-success btn-lg mx-2" to="/signin" role="button">Sign In</NavLink>
    <NavLink className="btn btn-outline-success btn-lg mx-2" to="/signup" role="button">Sign Up</NavLink>
  </div>
</div>
        </>
    )
}