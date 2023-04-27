import { useState } from "react";

import { UserIcon, MenuIcon } from "@heroicons/react/outline";

import logo from "../assets/images/logo-red.png";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-pearlWhite text-black/70">
      <div className="flex items-center justify-between shadow-sm py-4  px-5 w-full max-w-7xl mx-auto">
        <div className="w-28">
          <a href="/">
            <img className="grayscale hover:grayscale-0" src={logo} alt="" />
          </a>
        </div>
        <div className="flex w-full space-x-4 max-w-xl items-center justify-end">
          <div className="hidden md:block font-semibold">
            <div className="flex gap-5">
              <Link to="/">
                <button type="button" className="hover:text-accent">
                  HOME
                </button>
              </Link>
              <Link to="/inventory">
                <button type="button" className="hover:text-accent">
                  INVENTORY
                </button>
              </Link>
            </div>
          </div>
          <MenuIcon
            onClick={() => setToggle(!toggle)}
            className="md:hidden w-5 hover:cursor-pointer hover:text-accent"
          />

          <Link to="/myaccount">
            <UserIcon className="w-5 hover:cursor-pointer hover:text-accent" />
          </Link>
        </div>
      </div>
      <div
        className={`${
          toggle ? "" : "hidden"
        } relative p-4 gap-2 text-sm font-semibold bg-accent shadow-sm flex flex-col items-center justify-center`}
      >
        <Link to="/">
          <button
            type="button"
            className="text-white hover:text-black/80 border-b-[2px] border-white/20"
          >
            HOME
          </button>
        </Link>
        <Link to="/inventory">
          <button
            type="button"
            className="text-white hover:text-black/80 border-b-[2px] border-white/20"
          >
            INVENTORY
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
