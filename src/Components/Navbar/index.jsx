import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-8";

  return (
    <nav className="flex justify-between items-center  fixed z-10 top-0 w-full py-4 px-6 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/">
            Store
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/65@">marto@gmail.com</li>
        <li>
          <NavLink to="/orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >My orders</NavLink>
        </li>
        <li>
          <NavLink to="/account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >Account</NavLink>
        </li>
        <li>
          <NavLink to="/signin"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >Sign In</NavLink>
        </li>
        <li>
          CART 🛒 {context.count}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
