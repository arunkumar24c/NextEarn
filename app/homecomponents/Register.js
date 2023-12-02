"use client";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Please enter your name";
    }

    if (!email) {
      validationErrors.email = "Please enter your email";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      validationErrors.password = "Please enter your password";
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = "Please enter your phone number";
    } else if (!validatePhoneNumber(phoneNumber)) {
      validationErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If all validations pass, proceed with form submission
    console.log("Form submitted");
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setErrors({});
  };

  const validateEmail = (email) => {
    // Basic email validation
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Basic phone number validation (you can adjust this based on your requirements)
    const re = /^\d+$/;
    return re.test(String(phoneNumber));
  };

  return (
    <div className="bg-[#5585EE]">
      <div className="brand-container">
        <h1 className="text-[35px] py-5  text-center text-white">
          Register Form
        </h1>
        <div className="border rounded-md p-6 px-10 bg-white shadow-lg max-w-md mx-auto mt-8">
          <form className="mt-8 mb-2 " onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <label htmlFor="name" className="text-blue-gray -mb-3">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John"
                className="border-b border-black/30 focus:border-t-gray-900 p-2.5"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 mb-2">{errors.name}</p>
              )}

              <label htmlFor="phoneNumber" className="text-blue-gray -mb-3">
                Mobile Number
              </label>
              <input
                id="phoneNumber"
                type="number"
                placeholder="Phone number"
                className="border-b border-t-blue-gray-200 focus:border-t-gray-900 p-2.5"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 mb-2">{errors.phoneNumber}</p>
              )}

              <label htmlFor="email" className="text-blue-gray -mb-3">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@mail.com"
                className="border-b border-black/30 focus:border-t-gray-900 p-2.5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 mb-2">{errors.email}</p>
              )}

              <label htmlFor="password" className="text-blue-gray -mb-3">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="border-b border-black/30 focus:border-t-gray-900 p-2.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 mb-2">{errors.password}</p>
              )}
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
