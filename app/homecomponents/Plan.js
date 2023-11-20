import React from "react";
import { TiTick } from "react-icons/ti";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
const Plan = () => {
  return (
    <div className="bg-[#5585EE]">
      <div className="brand-container py-10 px-5">
        <div className="flex flex-col justify-center items-center gap-5 py-10">
          <h1 className="text-[35px] text-[#fff] ">OUR SERVICES</h1>
          <h1 className="text-3xl font-semibold">Explore Our Services</h1>

          <div className="py-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-center gap-8 px-5">
            {/* 1 */}
            <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 py-5 px-10 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[#5585EE] text-[18px]">Basic Plan</p>
                <h1 className="flex items-center text-[25px]">
                  $<span className="text-[45px]">49.00</span>/ Month
                </h1>
              </div>
              <hr />
              <div className="flex flex-col gap-3 px-5 py-4">
                <h3>Lead Management</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  10 task
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  10 video/per day
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  withdrawal limit
                </p>

                <div className="relative cursor-pointer group">
                  <div className="mt-2">
                    <p className="flex items-center ">
                      <BsArrowRight
                        className="bg-[#5585EE] rounded-s-md h-9 w-9 text-white px-2"
                        size={25}
                      />
                      <span className="absolute text-white rounded-e-md text-[18px] font-semibold bg-[#5585EE] py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[12%]">
                        Read more
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 py-5 px-10 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[#5585EE] text-[18px]">Pro Plan</p>
                <h1 className="flex items-center text-[25px]">
                  $<span className="text-[45px]">249.00</span>/ Month
                </h1>
              </div>
              <hr />
              <div className="flex flex-col gap-3 px-5 py-4">
                <h3>Lead Management</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  10 task
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  10 video/per day
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  withdrawal limit
                </p>

                <div className="relative cursor-pointer group">
                  <div className="mt-2">
                    <p className="flex items-center ">
                      <BsArrowRight
                        className="bg-[#5585EE] rounded-s-md h-9 w-9 text-white px-2"
                        size={25}
                      />
                      <span className="absolute text-white rounded-e-md text-[18px] font-semibold bg-[#5585EE] py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[12%]">
                        Read more
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 py-5 px-10 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[#5585EE] text-[18px]">Super Plan</p>
                <h1 className="flex items-center text-[25px]">
                  $<span className="text-[45px]">499.00</span>/ Month
                </h1>
              </div>
              <hr />
              <div className="flex flex-col gap-3 px-5 py-4">
                <h3>Lead Management</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  10 task
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  10 video/per day
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  withdrawal limit
                </p>

                <div className="relative cursor-pointer group">
                  <div className="mt-2">
                    <p className="flex items-center ">
                      <BsArrowRight
                        className="bg-[#5585EE] rounded-s-md h-9 w-9 text-white px-2"
                        size={25}
                      />
                      <span className="absolute text-white rounded-e-md text-[18px] font-semibold bg-[#5585EE] py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[12%]">
                        Read more
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
