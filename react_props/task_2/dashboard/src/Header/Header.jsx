
import "./Header.css";
import logo from "../assets/holberton-logo.jpg";

function Header() {
    return (
        <>
            <div className='App-header'>
            <img src={logo} alt="holberton logo" ></img>
            <h1 role="heading">School dashboard</h1>
            </div>
        </>
    )
}

export default Header