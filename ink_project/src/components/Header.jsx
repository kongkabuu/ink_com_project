import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container mx-auto">
      <nav className="flex w-full items-center justify-between">
        <Link to={"/"} className="flex-none text-3xl font-bold underline">
          ink.com
        </Link>

        <div className="flex ">
          <ul className="flex items-center justify-around">
            <li className="mx-20">
              <Link
                to="/Articles"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                Article
              </Link>
            </li>
            <li>
              <Link
                to="/Create_Article"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                Create Article
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
