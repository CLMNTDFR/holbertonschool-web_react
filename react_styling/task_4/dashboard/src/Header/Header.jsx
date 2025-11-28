import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header className="App-header flex flex-col items-center border-b-[3px] border-[var(--main-color)] p-5
                       md:flex-row md:items-center">
      <img src={logo} className="w-40 h-40 md:w-52 md:h-52" alt="Holberton logo" />
      <h1 className="text-[var(--main-color)] font-bold text-3xl mt-4 md:mt-0 md:ml-5 md:text-4xl">
        School dashboard
      </h1>
    </header>
  );
}

export default Header;
