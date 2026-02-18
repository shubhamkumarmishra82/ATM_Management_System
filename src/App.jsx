import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomePage from "./Page/HomePage";
import SignPage from "./Page/SignPage";
import SignUpPage from "./Page/SignUpPage";
import Dashboard from "./Page/Dashboard";
import Debit from "./Page/Debit";
import Credit from "./Page/Credit";
import Transfer from "./Page/Transfer";
import Logout from "./Page/Logout";
import Transaction from "./Page/Transaction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
            </>
          }
        />

        <Route
          path="/signin"
          element={
            <>
              <Navbar />
              <SignPage />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignUpPage/>
            </>
          }
        />

        {/* DASHBOARD ROUTES (NO PUBLIC NAVBAR) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/debit" element={<Debit />} />
        <Route path="/credit" element={<Credit />} />
         <Route path="/transfer" element={<Transfer />} />
         <Route path="/transaction" element={<Transaction/>}></Route>
            <Route path="/logout" element={<Logout />} />

      </Routes>
    </BrowserRouter>
  );
}
