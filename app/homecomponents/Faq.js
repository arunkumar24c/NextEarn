"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FaqData = [
  {
    id: "1",
    question: "How to create an account?",
    answer:
      "Open the Rentyaar app to get started and follow the steps. Rentyaar Does not charge a fee to create  or maintain your Rentyaar account. ",
  },
  {
    id: "2",
    question: "How to start the payment method ",
    answer:
      "Open the Rentyaar app to get started and follow the steps. Rentyaar Does not charge a fee to create  or maintain your Rentyaar account. ",
  },
  {
    id: "3",
    question: "How to start the payment method",
    answer:
      "Open the Rentyaar app to get started and follow the steps. Rentyaar Does not charge a fee to create  or maintain your Rentyaar account.",
  },
  {
    id: "4",
    question: "What are the products available in Rentyaar? ",
    answer:
      "Open the Rentyaar app to get started and follow the steps. Rentyaar Does not charge a fee to create  or maintain your Rentyaar account.",
  },
  {
    id: "5",
    question: "What are the products available in Rentyaar? ",
    answer:
      "Open the Rentyaar app to get started and follow the steps. Rentyaar Does not charge a fee to create  or maintain your Rentyaar account.",
  },
];

const Faq = () => {
  return (
    <>
      <div className="mx-auto px-10 py-10" id="faq">
        <h1 className="text-[#5585EE] text-4xl text-center py-10">
          FAQ<span className="text-[#5585EE]">&apos;s</span>
        </h1>
        <div className="">
          {FaqData.map((values, index) => {
            return <FaqCard key={index} {...values} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="brand-container px-2">
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer bg-[#5585EE] justify-between items-center px-5  w-full"
        >
          <p className="font-semibold text-xl xl:text-xl lg:text-xl md:text-lg py-5 my-5">
            {question}
          </p>
          <AiOutlineClose
            size={20}
            className={`${
              open ? "" : "rotate-45"
            } h-5 w-5 transition-transform duration-500`}
          />
        </div>
        <div
          className={`${
            open
              ? "max-h-[1000px] transition-max-h duration-700 ease-in-out overflow-hidden"
              : "max-h-0 transition-max-h duration-700  ease-in-out overflow-hidden"
          }`}
        >
          <p className="transition-transform leading-relaxed duration-500 text-[18px] text-[black] font-medium px-5 py-8 bg-[#5585EE]">
            {answer}
          </p>
        </div>
        <hr className="mt-3 border-[#fff]" />
      </div>
    </>
  );
};
