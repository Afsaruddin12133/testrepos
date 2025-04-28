// src/components/FacebookLogin.js
import React from 'react';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';
import axios from 'axios';

const facebookProvider = new FacebookAuthProvider();

const FacebookLogin = () => {
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const idToken = await result.user.getIdToken();

      const response = await axios.post('http://localhost:5000/api/login', {}, {
        headers: { Authorization: `Bearer ${idToken}` },
      });

      localStorage.setItem('jwt', response.data.token);
      alert(`Logged in as ${response.data.role}`);
    } catch (err) {
      console.error('Facebook login error:', err);
    }
  };

  return <button onClick={handleFacebookLogin}>Sign in with Facebook</button>;
};

export default FacebookLogin;
