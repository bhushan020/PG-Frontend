import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);  // Set role from localStorage if exists
    } else {
      navigate('/'); // Redirect to login page if role is not set
    }
  }, [navigate]);

  if (role === null) {
    return <div>Loading...</div>; // Loading state until the role is determined
  }

  return (
    <div>
      <h2>Welcome to the Paying Guest Management System</h2>
      {role === 'admin' ? (
        <div>
          <h3>Admin Dashboard</h3>
          <p>Welcome, Admin. You can manage users, view reports, etc.</p>
          <button onClick={() => navigate('/admin/home')}>Go to Admin Dashboard</button>
        </div>
      ) : role === 'user' ? (
        <div>
          <h3>User Dashboard</h3>
          <p>Welcome, User. You can view your guest details, pay rent, etc.</p>
          <button onClick={() => navigate('/user/home')}>Go to User Dashboard</button>
        </div>
      ) : (
        <div>
          <p>Role not recognized. Please login again.</p>
          <button onClick={() => navigate('/')}>Go to Login</button>
        </div>
      )}
    </div>
  );
};

export default Home;
