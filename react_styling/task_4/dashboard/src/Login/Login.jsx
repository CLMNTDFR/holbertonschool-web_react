function Login() {
  return (
    <div className="App-body border-t-[3px] border-[var(--main-color)] p-5 md:p-10 min-h-[300px]">
      <p className="text-base md:text-lg mb-5">Login to access the full dashboard</p>
      <form className="flex flex-col gap-4 md:flex-row md:gap-5 md:items-center">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2">
          <label htmlFor="email" className="font-medium">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="border border-gray-300 px-3 py-2 rounded w-full md:w-auto" 
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2">
          <label htmlFor="password" className="font-medium">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            className="border border-gray-300 px-3 py-2 rounded w-full md:w-auto" 
          />
        </div>
        <button 
          type="submit" 
          className="bg-white border border-gray-400 px-6 py-2 rounded cursor-pointer hover:bg-gray-100 transition-colors w-16 md:w-auto"
        >
          OK
        </button>
      </form>
    </div>
  );
}

export default Login;
