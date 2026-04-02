import React, { useState, useEffect } from 'react';
import API_URL from '../config';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  const [view, setView] = useState('admit'); // 'admit' or 'manage'
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    idNo: '',
    dateJoined: new Date().toISOString().split('T')[0],
    ministry: '',
  });

  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [members, setMembers] = useState([]);

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (!user || user.role !== 'admin') return <Navigate to="/login" />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAdmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('church_token')}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Admission failed');

      setMessage({ type: 'success', text: 'Member admitted successfully! Their phone number is their default password.' });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        idNo: '',
        dateJoined: new Date().toISOString().split('T')[0],
        ministry: '',
      });
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admission-portal">
      {/* Sidebar */}
      <div className="portal-sidebar">
        <div className="sidebar-brand">
          <img src="/images/logo.png" alt="Logo" />
          <h2>Admission Portal</h2>
        </div>
        <nav className="portal-nav">
          <button className={view === 'admit' ? 'active' : ''} onClick={() => setView('admit')}>
            <i className="fas fa-user-plus"></i> Admit New User
          </button>
          <button className={view === 'manage' ? 'active' : ''} onClick={() => setView('manage')}>
            <i className="fas fa-users-cog"></i> Manage Users
          </button>
          <Link to="/" className="nav-link-home">
            <i className="fas fa-home"></i> Back to Website
          </Link>
        </nav>
        <div className="sidebar-footer">
          <div className="admin-info">
            <p>Logged in as:</p>
            <strong>{user.fullName}</strong>
          </div>
          <button onClick={logout} className="portal-logout-btn">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="portal-content">
        {view === 'admit' ? (
          <div className="admission-form-container">
            <div className="form-card glass-morphism">
              <div className="form-header">
                <img src="/images/logo.png" alt="Church Logo" className="form-logo" />
                <h1>Admit New User</h1>
              </div>

              {message.text && (
                <div className={`portal-alert ${message.type}`}>
                  {message.text}
                </div>
              )}

              <form onSubmit={handleAdmit} className="admit-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>NAME</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Names" />
                  </div>
                  <div className="form-group">
                    <label>PHONE</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" />
                  </div>
                  <div className="form-group">
                    <label>ID NO</label>
                    <input type="text" name="idNo" value={formData.idNo} onChange={handleChange} required placeholder="ID Number" />
                  </div>
                  <div className="form-group">
                    <label>DATE JOINED</label>
                    <input type="date" name="dateJoined" value={formData.dateJoined} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>MINISTRY</label>
                    <select name="ministry" value={formData.ministry} onChange={handleChange} required>
                      <option value="">choose...</option>
                      <option value="Evangelism">Evangelism</option>
                      <option value="Praise & Worship">Praise & Worship</option>
                      <option value="Youth Ministry">Youth Ministry</option>
                      <option value="Children Ministry">Children Ministry</option>
                      <option value="Men Fellowship">Men Fellowship</option>
                      <option value="Women Fellowship">Women Fellowship</option>
                      <option value="ushering">Ushering & Protocol</option>
                    </select>
                  </div>
                </div>

                <div className="form-note">
                  <i className="fas fa-info-circle"></i>
                  <span><strong>Note:</strong> The user's phone number will be set as their default password. They can change it later from their profile settings.</span>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-clear" onClick={() => setFormData({ fullName: '', phone: '', email: '', idNo: '', dateJoined: new Date().toISOString().split('T')[0], ministry: '' })}>Clear</button>
                  <button type="submit" className="btn-admit" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Admit User'}
                  </button>
                </div>
                
                <div className="form-footer-links">
                  <Link to="/">Home</Link> | <span onClick={() => setView('manage')} style={{cursor: 'pointer'}}>Manage Users</span>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="manage-users-container">
            <div className="table-card glass-morphism">
              <div className="card-header">
                <h2>Manage Church Members</h2>
                <button className="btn-primary-small" onClick={() => setView('admit')}>+ Admit New</button>
              </div>
              <div className="table-responsive">
                <table className="members-table">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>ID No</th>
                      <th>Ministry</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Member rows would go here */}
                    <tr className="empty-row">
                      <td colSpan="6">Search or load members to manage them.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
