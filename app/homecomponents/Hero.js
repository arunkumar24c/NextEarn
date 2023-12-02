"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
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

 



  useEffect(() => {
    const interval = setInterval(() => {
      handleGliderNext();
    }, 3000); 

    return () => clearInterval(interval);
  }, [handleGliderNext]);



  return (
    <div className="  " id="home">
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
          <div className="" key={index}>
            <PopularDestinationCard {...item} />
          </div>
        ))}
      </Glider>
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div
      className="h-[80vh] relative"
      style={{
        backgroundImage: `url(${props.imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 py-16 gap-4 bg-black bg-opacity-50">
        <h1 className="text-[45px] font-bold text-[#5585EE] leading-normal">
          {props.title}
        </h1>
        <h2 className="text-justify text-[30px] font-bold text-white leading-normal">
          {props.description}
        </h2>
        <p className="text-justify text-[20px] w-full xl:w-[700px] lg:w-[700px] md:w-[400px] font-medium text-white leading-normal">
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default Hero;
