import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const menuItems = [
  { path: "/home", text: "Home" },
  { path: "/offers", text: "Offers" },
  { path: "/sign-in", text: "Sign In" },
];

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
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-gray-500 hover:text-regal-blue ${isActive(
                  item.path
                )}`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
