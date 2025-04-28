// src/components/EmailLogin.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import axios from 'axios';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await result.user.getIdToken();

      const response = await axios.post('http://localhost:5000/api/login', {}, {
        headers: { Authorization: `Bearer ${idToken}` },
      });

      localStorage.setItem('jwt', response.data.token);
      alert(`Logged in as ${response.data.role}`);
    } catch (err) {
      console.error('Email login error:', err.message);
    }
  };

  return (
    <form onSubmit={handleEmailLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button type="submit">Login with Email</button>
    </form>
  );
};

export default EmailLogin;
