function Footer() {
  return (
    <footer 
      className="App-footer absolute bottom-0 left-0 right-0 border-t-[3px] border-[var(--main-color)] p-4 text-center italic text-sm md:text-base bg-white w-full" 
    >
      <p className="m-0">Copyright {new Date().getFullYear()} - Holberton School</p>
    </footer>
  );
}

export default Footer;
