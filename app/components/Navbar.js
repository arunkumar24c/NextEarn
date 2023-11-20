"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#5585EE]">
      <nav className="flex items-center brand-container justify-between flex-wrap  px-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 ">
          <div className="flex gap-2 cursor-pointer">
            <Link href="/">
              <h1 className="text-[22px] font-bold text-white">Earn App</h1>
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block " : "hidden"
          }`}
        >
          <div className="text-[24px] font-bold lg:flex-grow gap-5">
            <Link href="/getinterview">
              <p
                href="#"
                className="block mt-4 font-bold lg:inline-block lg:mt-0 text-white mr-8"
              >
                Plan
              </p>{" "}
            </Link>
            <Link href="/media">
              <p
                href="#"
                className="block mt-4 font-bold lg:inline-block lg:mt-0 text-white mr-8"
              >
                Task
              </p>
            </Link>
            <Link href="/contact">
              <p
                href="#"
                className="block mt-4 font-bold lg:inline-block lg:mt-0 text-white mr-8"
              >
                Contact Us
              </p>
            </Link>
          </div>
          <div className="py-2">
            <Link href="/Login">
              <button className="inline-flex items-center text-secondary border-0 py-2 px-4 font-medium bg-white rounded-xl">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
