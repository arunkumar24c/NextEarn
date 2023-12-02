"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaDownload } from "react-icons/fa6";

const Download = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 1000);
    };
  return (
    <div id="download">
      <div className="brand-container py-10 px-5">
        <h1 className="text-[35px] text-[#5585EE] py-5 leading-normal text-center">
          Downloads
        </h1>
        <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-center items-center gap-4">
          {/* left */}
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <div className="flex flex-col gap-6">
              <h1 className="text-[35px] leading-normal text-justify">
                Download the Earning App and Complete the task
              </h1>
              <p className="leading-normal text-[black] text-justify font-semibold">
                Download & Install: Get started by downloading our app from the
                App Store or Google Play Store—its free! Explore Offers: Browse
                through a wide range of offers, including apps, games, and more.
                Earn Rewards: For every app you download and engage with, earn
                points that can be redeemed for exciting rewards. Refer & Earn
                More: Share the app with friends using your unique referral code
                and earn additional rewards for every friend who signs up and
                starts earning.
              </p>
              <div>
                <button
                  onClick={handleClick}
                  className="bg-[#5585EE] px-5 py-2 text-white rounded-lg flex gap-2 items-center font-semibold "
                >
                  Download App{" "}
                  <span>
                    <FaDownload
                      className={`
          ${clicked ? "animate-download" : ""}`}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <Image
              src={"/assest/imgs1.avif"}
              width={300}
              height={200}
              alt="img"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download