function Header() {
  return (
    <header className="container mx-auto ">
      <nav className="flex w-full items-center justify-center">
        <div className="flex-none text-3xl font-bold underline">ink.com</div>
        <div className="w-48 mx-20">
          <input type="search" name="" id="" className="w-full m-2" />
        </div>
        <div className="flex-auto">
          <ul className="flex justify-around items-end">
            <li>
              <a href="" className="text-blue-500 hover:text-blue-700">
                Articles
              </a>
            </li>
            <li>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Article
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
