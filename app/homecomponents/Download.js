import Image from 'next/image';
import React from 'react'

const Download = () => {
  return (
    <div>
      <div className="brand-container py-10 px-5">
        <h1 className="text-[35px] text-[#5585EE] py-5 leading-normal text-center">
          Downloads
        </h1>
        <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-center items-center gap-4">
          {/* left */}
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <div className="flex flex-col gap-6">
              <h1 className="text-[35px] leading-normal text-center">
                Download the Earning App and Complete the task
              </h1>
              <p className="leading-normal text-center font-medium">
                Open the Rentyaar app to get started and follow the steps.
                Rentyaar Does not charge a fee to create or maintain your
                Rentyaar account.
              </p>
              <div className="flex gap-4 flex-row">
                <Image
                  src={"/assest/play.png"}
                  width={150}
                  height={100}
                  alt="img"
                  className=""
                />
                <Image
                  src={"/assest/apple.png"}
                  width={150}
                  height={100}
                  alt="img"
                  className=""
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <Image
              src={"/assest/bans.jpeg"}
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