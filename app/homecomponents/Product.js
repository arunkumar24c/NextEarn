"use client";
import Image from "next/image";
import React, { useState } from "react";

const Product = () => {
  
  
 const [selectedWeight, setSelectedWeight] = useState({});

 const handleWeightSelection = (productId, weight) => {
   setSelectedWeight({ ...selectedWeight, [productId]: weight });
   // Handle logic for selected weight (e.g., add to cart, update state, etc.)
   console.log(`Selected weight for product ${productId}: ${weight}g`);
 };
  const products = [
    {
      id: 1,
      imageSrc: "/assest/a1.jpeg",
      name: "Rice",
      description: "ffkjkfbfbkkmbk enfrfrigiirvnkfnkvknfkvkfnv",
      originalPrice: 109,
      discountedPrice: 150,
      discount: "27% off",
    },
    {
      id: 2,
      imageSrc: "/assest/a1.jpeg",
      name: "Rice",
      description: "ffkjkfbfbkkmbk enfrfrigiirvnkfnkvknfkvkfnv",
      originalPrice: 109,
      discountedPrice: 150,
      discount: "27% off",
    },
    {
      id: 3,
      imageSrc: "/assest/a1.jpeg",
      name: "Rice",
      description: "ffkjkfbfbkkmbk enfrfrigiirvnkfnkvknfkvkfnv",
      originalPrice: 109,
      discountedPrice: 150,
      discount: "27% off",
    },
    {
      id: 4,
      imageSrc: "/assest/a1.jpeg",
      name: "Rice",
      description: "ffkjkfbfbkkmbk enfrfrigiirvnkfnkvknfkvkfnv",
      originalPrice: 109,
      discountedPrice: 150,
      discount: "27% off",
    },
    {
      id: 5,
      imageSrc: "/assest/a1.jpeg",
      name: "Rice",
      description: "ffkjkfbfbkkmbk enfrfrigiirvnkfnkvknfkvkfnv",
      originalPrice: 109,
      discountedPrice: 150,
      discount: "27% off",
    },
    {
      id: 6,
      imageSrc: "/assest/a1.jpeg",
      name: "Rice",
      description: "ffkjkfbfbkkmbk enfrfrigiirvnkfnkvknfkvkfnv",
      originalPrice: 109,
      discountedPrice: 150,
      discount: "27% off",
    },
  ];
  const toggleOptions = (productId) => {
    setSelectedWeight({
      ...selectedWeight,
      [productId]: selectedWeight[productId] ? null : 500,
    });
  };
  return (
    <div id="Product">
      <div className="brand-container py-5 px-5">
        <div className="flex flex-col justify-center items-center py-4 ">
          <h1 className="text-center text-[35px] py-4">Products</h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center items-center">
          {products.map((product) => (
            <div key={product.id} className="shadow-lg">
              <div className="relative">
                <Image
                  src={product.imageSrc}
                  width={300}
                  height={500}
                  className="w-full"
                  alt={product.name}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-90 flex items-center justify-center">
                  <p className="text-white text-lg">Coming Soon</p>
                </div>
              </div>
              <div className="px-4">
                <h1 className="py-2">{product.name}</h1>
                <p className="py-2">{product.description}</p>
                <p className="flex gap-2 py-2">
                  ₹{product.originalPrice}
                  <span className=" line-through">
                    ₹{product.discountedPrice}
                  </span>{" "}
                  <span className="text-[red]">{product.discount}</span>
                </p>
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => toggleOptions(product.id)}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none   "
                    id={`options-menu-${product.id}`}
                    aria-haspopup="true"
                    aria-expanded={
                      selectedWeight[product.id] ? "true" : "false"
                    }
                  >
                    {selectedWeight[product.id] || 500}g
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {selectedWeight[product.id] && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 px-4 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`options-menu-${product.id}`}
                    >
                      <div className="py-1" role="none">
                        <button
                          onClick={() =>
                            handleWeightSelection(product.id, 1000)
                          }
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          1000g
                        </button>
                        <button
                          onClick={() =>
                            handleWeightSelection(product.id, 1500)
                          }
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          1500g
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="py-2">
                  <button className="bg-[#5585EE] px-4 mt-4 py-2 w-full text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Product;
