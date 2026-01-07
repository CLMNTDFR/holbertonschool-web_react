import React from 'react';
import './Login.css';
import useLogin from '../../hooks/useLogin';
import WithLogging from '../../components/HOC/WithLogging';

function Login({ login }) {
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  } = useLogin({ onLogin: login });

  return (
    <form onSubmit={handleLoginSubmit} aria-label="form">
      <div>
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
          />
        </div>
      </div>
    </form>
  );
}

export default WithLogging(Login);
