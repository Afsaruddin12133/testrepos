// src/components/GoogleLogin.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider as googleProvider } from '../../firebase';
import axios from 'axios';

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      const response = await axios.post('http://localhost:5000/api/login', {}, {
        headers: { Authorization: `Bearer ${idToken}` },
      });

      localStorage.setItem('jwt', response.data.token);
      alert(`Logged in as ${response.data.role}`);
    } catch (err) {
      console.error('Google login error:', err);
    }
  };

  return <button onClick={handleGoogleLogin}>Sign in with Google</button>;
};

export default GoogleLogin;
