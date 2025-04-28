import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; 
import axios from 'axios';

export default function Home() {
  const [userInfo, setUserInfo] = useState({ email: '', role: '' });

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decoded = jwtDecode(token); // ✅ correct usage
      setUserInfo({ email: decoded.email, role: decoded.role });
    }
  }, []);

  const fetchProtectedData = async (routeName) => {
    const token = localStorage.getItem('jwt');
    try {
      const response = await axios.get(`http://localhost:5000/api/${routeName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Access denied or error:', error.response?.data || error.message);
    }
  };


  useEffect(() => {
    if (userInfo.role === 'admin') {
      fetchProtectedData('admin');
    } else if (userInfo.role === 'moderator') {
      fetchProtectedData('moderator');
    } else if (userInfo.role === 'user') {
      fetchProtectedData('user');
    }
  }, [userInfo.role]);

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>

      {userInfo.role === 'user' && (
        <div>
          <h2>👤 User Panel</h2>
          <p>Email: {userInfo.email}</p>
        </div>
      )}

      {userInfo.role === 'moderator' && (
        <div>
          <h2>🛡️ Moderator Panel</h2>
          <p>Email: {userInfo.email}</p>
        </div>
      )}

      {userInfo.role === 'admin' && (
        <div>
          <h2>👑 Admin Panel</h2>
          <p>Email: {userInfo.email}</p>
        </div>
      )}
    </div>
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Your role is: {userInfo.role}</p>
    </div>
    </>
  );
}
