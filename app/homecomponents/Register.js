"use client"

import React from "react";
import axios from "axios";
import { API_URL } from "../api/constant"; 

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      mobile_number: e.target.mobile_number.value,
      email: e.target.email.value,
      referral_code: e.target.referral_code.value || "",
    };

    try {
      const result = await axios.post(`${API_URL}/v1/auth/customer`, formData);
      console.log(result?.data, "Success");
      
    } catch (error) {
      console.log(error, "Error");
      
    }
  };

  return (
    <div className="bg-[#5585EE] min-h-screen flex items-center justify-center">
      <div className="brand-container">
        <h1 className="text-[35px] py-5 text-center text-white">
          Register Form
        </h1>
        <div className="border rounded-md p-6 px-10 bg-white shadow-lg max-w-md mx-auto mt-8">
          <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <label htmlFor="name" className="text-blue-gray -mb-3">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John"
                className="border-b border-black/30 focus:border-t-gray-900 p-2.5"
              />

              <label htmlFor="phoneNumber" className="text-blue-gray -mb-3">
                Mobile Number
              </label>
              <input
                id="mobile_number"
                name="mobile_number"
                type="text"
                placeholder="Phone number"
                className="border-b border-t-blue-gray-200 focus:border-t-gray-900 p-2.5"
              />

              <label htmlFor="email" className="text-blue-gray -mb-3">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@mail.com"
                className="border-b border-black/30 focus:border-t-gray-900 p-2.5"
              />

              <label htmlFor="password" className="text-blue-gray -mb-3">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="border-b border-black/30 focus:border-t-gray-900 p-2.5"
              />

              <label htmlFor="referralCode" className="text-blue-gray -mb-3">
                Referral Code
              </label>
              <input
                id="referral_code"
                name="referral_code"
                type="text"
                placeholder="Referral code"
                className="border-b border-black/30 focus:border-t-gray-900 p-2.5"
              />
            </div>

            <div className="-ml-2.5 mt-4">
              <label className="flex items-center font-normal text-gray">
                <input type="checkbox" className="mr-1" />I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 w-full"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
