import Image from "next/image";
import React from "react";
import { FaList } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
const Task = () => {
  return (
    <div>
      <div className="brand-container px-5 py-10 ">
        <h1 className="text-[#5585ee] text-[35px] text-center py-5">
          Task Details
        </h1>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-4 justify-center py-4">
          {/* left */}
          <div className="w-full xl:w-1/2 md:w-full lg:w-1/2 ">
            <h1 className="text-[20px] px-5 py-5 ">Hii Vicky</h1>
            <div className="border shadow-lg flex flex-row justify-between  px-16 py-16 rounded-xl items-center  bg-[#5585EE] text-white">
              <div className="">
                <p>Your Balance</p>
                <h1>$ 5000</h1>
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-[24px]">withdrawal</p>{" "}
                <p className="flex items-center gap-2">
                  <FaIndianRupeeSign size={25} />1000
                </p>
              </div>
            </div>
            <Image
              src={"/assest/imgs.png"}
              width={300}
              height={100}
              className="w-full"
              alt="#"
            />
          </div>

          {/* right */}
          <div className="w-full xl:w-1/2 md:w-full lg:w-1/2 ">
            <h1>Todays Task</h1>
            <div className="flex flex-col shadow-lg px-10 py-10 gap-4">
              <div className="flex items-center gap-4">
                <p className="shadow-lg ">
                  {" "}
                  <FaList size={30} />
                </p>
                <div>
                  <p>Survey Name</p>
                  <p>
                    10 <span className="text-[#5585EE]">Question</span>
                  </p>
                </div>
              </div>
              <p className="leading-normal text-[18px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
              <div className="flex items-center justify-between ">
                <p>
                  Get <span className="text-[#5585ee]">$10</span>
                </p>
                <button className="bg-[#5585EE] text-white px-5 py-2 rounded-lg">
                  Start
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col shadow-lg px-10 py-10 gap-4">
              <div className="flex items-center gap-4">
                <p className="shadow-lg ">
                  {" "}
                  <FaList size={30} />
                </p>
                <div>
                  <p>Survey Name</p>
                  <p>
                    10 <span className="text-[#5585EE]">Question</span>
                  </p>
                </div>
              </div>
              <p className="leading-normal text-[18px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
              <div className="flex items-center justify-between ">
                <p>
                  Get <span className="text-[#5585ee]">$10</span>
                </p>
                <button className="bg-[#5585EE] text-white px-5 py-2 rounded-lg">
                  Start
                </button>
              </div>
            </div>
            {/* 3rd */}
            <div className="flex flex-col shadow-lg px-10 py-10 gap-4">
              <div className="relative">
                <Image
                  src={"/assest/images.jpeg"}
                  width={100}
                  height={150}
                  className="w-full h-[150px] "
                />
                <p className="absolute top-3 px-2 py-2 rounded-md bg-[#5585EE] text-white font-medium right-4">
                  30min
                </p>
              </div>
              <p className="leading-normal text-[18px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
              <div className="flex items-center justify-between ">
                <p>
                  Get <span className="text-[#5585ee]">$10</span>
                </p>
                <button className="bg-[#5585EE] text-white px-5 py-2 rounded-lg">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
