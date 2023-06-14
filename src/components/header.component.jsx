import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-regal-blue underline font-bold"
      : "";
  };

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <Link to='/home'>
          <img className='h-28' src={logo} alt='logo' />
        </Link>
        <ul className='flex space-x-10'>
          <li>
            <Link
              to='/home'
              className={`text-gray-500 hover:text-regal-blue ${isActive(
                "/home"
              )}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/offers'
              className={`text-gray-500 hover:text-regal-blue ${isActive(
                "/offers"
              )}`}
            >
              Offers
            </Link>
          </li>
          <li>
            <Link
              to='/sign-in'
              className={`text-gray-500 hover:text-regal-blue ${isActive(
                "/sign-in"
              )}`}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
