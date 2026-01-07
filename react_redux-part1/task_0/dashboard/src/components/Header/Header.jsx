import React from 'react';
import './Header.css';
import logo from '../../assets/holberton-logo.jpg';

function Header({ user, logOut }) {
  return (
    <div className="Header">
      <img src={logo} alt="holberton logo" />
      <h1>School Dashboard</h1>
      {user && user.isLoggedIn && (
        <div id="logoutSection">
          Welcome <b>{user.email}</b> <a href="#" onClick={logOut}>(logout)</a>
        </div>
      )}
    </div>
  );
}

export default Header;
