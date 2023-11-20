"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsStarFill, BsStar } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";
import "glider-js/glider.min.css";

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    stars: 3,
    location: "New York",
    quote:
      "Download & Install: Get started by downloading our app from the App Store or Google Play Store—its free!",
  },
  {
    id: 2,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Download & Install: Get started by downloading our app from the App Store or Google Play Store—its free!",
  },
  {
    id: 3,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Explore Offers: Browse through a wide range of offers, including apps, games, and more.",
  },
  {
    id: 4,
    name: "Jane Smith",
    stars: 3,
    location: "Los Angeles",
    quote:
      " Browse through a wide range of offers, including apps, games, and more.Earn Rewards: For every app you download and engage with, earn points that can be redeemed for exciting rewards.",
  },
  {
    id: 5,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Earn Rewards: For every app you download and engage with, earn points that can be redeemed for exciting rewards.",
  },
];

const Testimonials = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div>
      <h1 className="text-center">Testimonial</h1>
      <div className="relative container mx-auto mmb-5 mt-10 py-10">
        <Glider
          className="glider-container"
          draggable
          hasDots={false}
          slidesToShow={3}
          scrollLock
          hasArrows={false}
          ref={gliderRef}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: "3",
                slidesToScroll: "auto",
                itemWidth: 150,
                duration: 0.25,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: "2",
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
          {testimonialData.map((testimonial) => (
            <div className="mx-1" key={testimonial.id}>
              <PopularDestinationCard {...testimonial} />
            </div>
          ))}
        </Glider>
        <div className="glider-arrows flex items-center justify-center gap-3">
          <button className="glider-arrow " onClick={handleGliderPrev}>
            <GoArrowLeft size={32} />
          </button>
          <button className="glider-arrow " onClick={handleGliderNext}>
            <GoArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDestinationCard = ({ id, name, stars, location, quote }) => {
  return (
    <div className="brand-container py-5 mt-5 mb-5 px-5 hover:shadow-lg shadow-md border ">
      
      <div className="">
        <div className="flex flex-col gap-4 px-5 py-5" key={id}>
          <div className="flex items-center gap-2">
            <Image
              src="/assest/im6.jpg"
              width={60}
              height={60}
              className="rounded-full"
              alt="imges"
            />
            <div>
              <div className="flex gap-2">
                <p>{name}</p>
                {Array.from({ length: stars }, (_, i) => (
                  <p className="text-[red]" key={i}>
                    <BsStarFill />
                  </p>
                ))}
                {Array.from({ length: 5 - stars }, (_, i) => (
                  <p key={i}>
                    <BsStar />
                  </p>
                ))}
              </div>
              <p>{location}</p>
            </div>
          </div>
          <div>
            <p>{quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
