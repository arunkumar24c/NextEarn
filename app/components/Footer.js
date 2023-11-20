"use client";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsLinkedin, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiFillContacts } from "react-icons/ai";
import Image from "next/image";

export default function Footer() {
  let Links = [
    { name: "About Us", link: "/" },
    { name: "Contact Us ", link: "/" },
    { name: "Our Services", link: "/" },
    { name: "Terms & Condition", link: "/" },
    { name: "privacy-policy", link: "/" },
  ];

  return (
    <div className="bg-[#5585EE]">
      <footer className="brand-container pt-10 px-5">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-y-5 justify-between items-start pb-5">
          {/* text  */}
          {/* 1 */}
          <div className="text-white py-2 flex flex-col gap-2 ">
            <Link href="/">
              <h1>Earn App</h1>
            </Link>
            <p className="flex gap-2 text-[black] items-center">
              <CiLocationOn />
              *************
            </p>
            <p className="flex gap-2 text-[black] items-center">
              <AiFillContacts />
              +91**********
            </p>
            <p className="flex gap-2 text-[black] items-center">
              <AiOutlineMail />
              ********@gmail.com
            </p>
            <div className="flex gap-5 items-center py-5">
              <p className=" text-[black] cursor-pointer hover:text-[#5585EE] rounded-md">
                <a href=" " target="_blank">
                  <BsInstagram size={25} />
                </a>
              </p>
              <p className=" text-[black] cursor-pointer hover:text-[#5585EE] rounded-md">
                <a href=" " target="_blank">
                  <RiTwitterXLine size={25} />
                </a>
              </p>
              <p className=" text-[black] cursor-pointer hover:text-[#5585EE] rounded-md">
                <a href="" target="_blank">
                  <BsLinkedin size={25} />
                </a>
              </p>
              <p className=" text-[black] cursor-pointer hover:text-[#5585EE] rounded-md">
                <a href="" target="_blank">
                  <BsYoutube size={25} />
                </a>
              </p>
              <p className=" text-[black] cursor-pointer hover:text-[#5585EE] rounded-md">
                <a href="https://wa.me/+91" target="_blank">
                  <BsWhatsapp size={25} />
                </a>
              </p>
            </div>
          </div>
          {/* link 2 */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-[18px]">Services</h1>
            <div className="flex flex-col gap-6">
              <p className="text-[black] text-[14px] cursor-pointer font-semibold  hover:text-white ">
                Air Freight
              </p>

              <p className="text-[black] text-[14px] cursor-pointer font-semibold  hover:text-white  ">
                Sea Freight
              </p>

              <p className="text-[black] text-[14px] cursor-pointer font-semibold  hover:text-white  ">
                Road Freight
              </p>
            </div>
          </div>
          {/* email 3 section */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-[18px] cursor-pointer">
              Quick Links
            </h1>
            <div className="flex flex-col gap-6">
              {Links.map((link) => (
                <p
                  key={link.name}
                  className="text-[black] text-[14px] cursor-pointer font-semibold  hover:text-white"
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col h-full justify-center  gap-5 ">
            <p className="text-[18px]  text-[#ffffff] font-bold ">Newsletter</p>
            <p className="text-[16px] text-[black]">
              Open the Rentyaar app to get started and follow the steps.
              Rentyaar
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                class=" w-full h-[47px]  text-[15px] bg-white pl-4 text-black border-b border-black focus:outline-none"
                required
              />
              <button class="w-[87px] h-[47px] text-[15px] bg-[red] text-white focus:outline-none p-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
