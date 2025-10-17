import logo from "./hlogo.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils";

/**
 * Composant principal de l'application
 * Version optimisée pour la production avec formulaire de login
 */
function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form>
          <label htmlFor="email">
            <span>Email:</span>
            <input type="email" id="email" />
          </label>

          <label htmlFor="password">
            <span>Password:</span>
            <input type="password" id="password" />
          </label>

          <button>OK</button>
        </form>
      </div>

      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
