"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import "glider-js/glider.min.css";

const data = [
  {
    imgSrc: "/assest/banner1.jpg",
    title: "Double Your Money with",
    description: "Daily Tasks",
    para: "Invest and watch your money grow!  we help you double your investment by completing simple daily tasks.",
  },
  {
    imgSrc: "/assest/banner2.jpg",
    title: "Start Small or ",

    description: "Go Big",
    para: " Select an investment plan that fits your budget and goals.  start with just 100 or aim higher with 500 or 1000.",
  },
  {
    imgSrc: "/assest/banner3.jpg",
    title: "Surveys, Games, Videos, ",

    description: "and More!",
    para: "Earning is easy! Complete daily tasks like surveys, play engaging games, and watch interesting videos.",
  },
  {
    imgSrc: "/assest/banner1.jpg",
    title: "Double Your Money with",
    description: "Daily Tasks",
    para: "Invest and watch your money grow!  we help you double your investment by completing simple daily tasks.",
  },
  {
    imgSrc: "/assest/banner2.jpg",
    title: "Start Small or ",

    description: "Go Big",
    para: " Select an investment plan that fits your budget and goals.  start with just 100 or aim higher with 500 or 1000.",
  },
  {
    imgSrc: "/assest/banner3.jpg",
    title: "Surveys, Games, Videos, ",

    description: "and More!",
    para: "Earning is easy! Complete daily tasks like surveys, play engaging games, and watch interesting videos.",
  },
];

const Hero = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="py-10  " id="home">
      <Glider
        className="glider-container"
        draggable
        hasDots={false}
        slidesToShow={1}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.55,
            },
          },
        ]}
      >
        {data.map((item, index) => (
          <div className=" py-5" key={index}>
            <PopularDestinationCard {...item} />
          </div>
        ))}
      </Glider>
      <div className=" ">
        <div className="glider-arrows flex items-center justify-center gap-3">
          <button
            className=" glider-arrow bg-transparent border-2 text-black px-3 py-3 rounded-2xl hover:bg-[#5585EE]"
            onClick={handleGliderPrev}
          >
            <GoArrowLeft size={32} />
          </button>
          <button
            className="glider-arrow bg-transparent border-2 text-black px-3 py-3 rounded-2xl hover:bg-[#5585EE]"
            onClick={handleGliderNext}
          >
            <GoArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div
      className="h-[80vh]"
      style={{
        backgroundImage: `url(${props.imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col xl:flex-row lg:flex-row md:flex-col  px-10 py-16 gap-4 ">
        <div className=" w-full xl:w-1/2 lg:w-1/2 md:w-full flex-col flex justify-center items-center py-16">
          <h1 className="text-[45px] font-bold flex gap-2 py-2 text-[#5585EE] leading-normal ">
            {props.title}
          </h1>
          <h2 className="text-justify text-[30px] font-bold  text-[white] leading-normal">
            {props.description}
          </h2>
          <p className="text-center text-[20px] font-medium py-3 text-[white] leading-normal">
            {props.para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
 