import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const {currentUser} = useSelector(state => state.user);

  return (
    <header className="bg-slate-300  shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex-wrap">
            <span className="text-slate-500">MZ</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="bg-slate-500 bg-transparent" />
        </form>
        <ul className="font-bold flex gap-4">
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline ">
              About
            </li>
          </Link>
          <Link to="/sign-in">
           {currentUser ? (<img className="rounded-full h-7 w-7 object-cover" src="https://i.pravatar.cc/200" alt={currentUser.username}/>) :  <li className="sm:inline text-slate-700 hover:underline ">
              Sign-In
            </li>}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
