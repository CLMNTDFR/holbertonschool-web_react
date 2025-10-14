import React from 'react';
import './App.css';
import logo from './assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

/**
 * Composant principal de l'application
 * Affiche les notifications et le dashboard avec formulaire de login
 */
function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </div>

        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">OK</button>
          </form>
        </div>
        <div className="App-footer">
          <p>
            Copyright {getCurrentYear()} {getFooterCopy(false)}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
