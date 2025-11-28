import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header className="App-header flex items-center border-b-[3px] border-[var(--main-color)] p-5">
      <img src={logo} className="w-52 h-52" alt="Holberton logo" />
      <h1 className="ml-5 text-[var(--main-color)] font-bold text-4xl">School dashboard</h1>
    </header>
  );
}

export default Header;
