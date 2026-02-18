import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const accountNumber = localStorage.getItem("accountNumber");

 
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(
        `http://localhost:9090/transaction/history/${accountNumber}`
      );
      if (response.ok) {
        const data = await response.json();
        setTransactions(data);
      } else {
        alert("Failed to fetch transaction history");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Transaction History</h3>

      <div className="table-responsive shadow">
        <table className="table table-striped table-hover text-center">
          <thead className="table-success">
            <tr>
             
              <th scope="col">Type</th>
              <th scope="col">Amount (₹)</th>
              <th scope="col">Date & Time</th>
              <th scope="col">From Account</th>
              <th scope="col">To Account</th>
              <th scope="col">Balance After Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((tx, index) => (
                <tr key={index}>
                
                  <td>{tx.transactionType}</td>
                  <td>{tx.amount}</td>
                  <td>{new Date(tx.created).toLocaleString()}</td>
                  <td>{tx.senderaccount || "-"}</td>
                  <td>{tx.recieveraccount || "-"}</td>
                  <td>{tx.totalBalance}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Button at the bottom center */}
      <div className="mt-3 d-flex justify-content-center">
        <NavLink to="/dashboard" className="btn btn-success">
          Back to Dashboard
        </NavLink>
      </div>
    </div>
  );
}
