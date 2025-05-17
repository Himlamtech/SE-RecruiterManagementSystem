
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // For simplicity, we'll just redirect to the dashboard
    // In a real app, you'd check authentication here
    navigate("/admin/dashboard");
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default Admin;
