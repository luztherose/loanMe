function Header() {
  return (
    <header>
      <div className="bg-gray-100 text-slate-800 font-bold flex  h-20 justify-center items-center px-5">
        <div>
          <p>
            <a href="#">Logo</a>
          </p>
        </div>
        <nav className="bg-gray-100 w-full my-0 mx-auto flex justify-center">
          <ul className="flex  h-20 justify-center items-center text-center">
            <li className="mr-5">
              <a href="#">Home</a>
            </li>
            <li className="mr-5">
              <a href="#">Clients</a>
            </li>
            <li className="mr-5">
              <a href="#">Loans</a>
            </li>
            <li className="mr-5">
              <a href="#">Contact</a>
            </li>
            <li className="w-40">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div>
          <p className="w-10 h-10 bg-gray-800 text-white text-center rounded-full flex justify-center items-center">
            CL
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
