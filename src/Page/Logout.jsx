import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear account info from localStorage
    localStorage.removeItem("accountNumber");

    // Redirect to home page
    navigate("/", { replace: true }); // replace avoids keeping /logout in history
  }, [navigate]);

  return null; // nothing to render
}
