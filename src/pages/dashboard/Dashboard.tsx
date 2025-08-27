import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to appropriate dashboard based on user type
    // In a real app, this would be determined by authentication
    navigate('/dashboard/client');
  }, [navigate]);

  return null;
};

export default Dashboard;