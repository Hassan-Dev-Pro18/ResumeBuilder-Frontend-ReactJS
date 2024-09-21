import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css'; // Add your styles in this file if needed

const AdminPage = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleManageUsers = () => navigate('/admin/users');
  const handleManageMessages = () => navigate('/admin/messages');
  const handleManageTestimonials = () => navigate('/admin/testimonials');
  const name = localStorage.getItem('firstname')
  return (
    <div className="admin-page">
      <h2 className='admin-h2'>Hi {name}!!!!</h2>
      <p className='admin-p'>Welcome to the Admin Panel of Resumeify</p>
      <div className="admin-options">
        <button className="admin-option-button" onClick={handleManageUsers}>Manage User Accounts</button>
        <button className="admin-option-button" onClick={handleManageMessages}>Manage Contact Messages</button>
        <button className="admin-option-button" onClick={handleManageTestimonials}>Manage Testimonials</button>
      </div>
    </div>
  );
};

export default AdminPage;
