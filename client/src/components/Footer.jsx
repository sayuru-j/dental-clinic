import React from "react";

import logo from "../assets/images/logo-red.png";

function Footer() {
  return (
    <footer className="bg-pearlWhite">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              className="mr-3 w-28 grayscale hover:grayscale-0"
              alt="Flowbite Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black/70 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-accent grayscale sm:mx-auto lg:my-8" />
        <span className="block text-sm text-black/70 sm:text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Dental Clinic™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
