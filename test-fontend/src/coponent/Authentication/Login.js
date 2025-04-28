// src/LoginPage.js
import React from 'react';
import EmailLogin from './EmailLogin';
import GoogleLogin from './google';
import FacebookLogin from './FacebookLogin';


const LoginPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>

      <div style={{ marginBottom: '30px' }}>
        <h4>Email/Password Login</h4>
        <EmailLogin />
      </div>

      <hr />

      <div style={{ marginTop: '30px' }}>
        <GoogleLogin /><br /><br />
        <FacebookLogin />
      </div>
    </div>
  );
};

export default LoginPage;
