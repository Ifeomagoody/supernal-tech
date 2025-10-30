
"use client"
import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function page() {
  return (
    <>
    
             <title>Footer</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />


      <section className="min-h-screen px-5 md:px-10 py-10 bg-black">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + Text */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <Link href="#">
              <Image
                src="/images/Ife_Logo.png"
                alt="The Logo"
                width={70}
                height={60}
                className="mx-auto w-25 h-25 md:mx-0"
              />
            </Link>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-semibold">
              Let us Work With You
            </h1>
          </div>

          {/* Book a Call Button */}
          <Link href="/book-a-call-get-in-touch" className="w-full md:w-auto">
            <div className="text-white bg-black flex justify-center border border-[#C28D01] hover:bg-[#C28D01] hover:text-white px-6 py-3 rounded-full text-lg items-center gap-2 transition-all duration-300">
              Book a Call
              <Image
                src="/arrow-up-solid-full.svg"
                alt="navigation"
                width={15}
                height={15}
                className="rotate-45"
              />
            </div>
          </Link>
        </div>

        {/* Divider Line */}
        <div className="w-full my-10 border border-[#919191]"></div>

        {/* Middle Section (Newsletter + Links) */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-10 justify-between px-2 md:px-10">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="w-full md:w-[22rem]"
          >
            <div className="space-y-3">
              <h3 className="text-2xl text-white font-semibold">Newsletter</h3>
              <p className="text-white text-sm sm:text-base">
                Sign up for the Tech Hub weekly newsletter to get the latest
                updates.
              </p>

              <div className="flex flex-wrap gap-3 items-center">
                {/* Input */}
                <div className="flex items-center gap-2 flex-1 border-b border-gray-500 focus-within:border-white">
                  <svg
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="bg-transparent flex-1 text-white placeholder-white text-sm p-2 focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button className="bg-[#C28D01] p-3 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <Image
                    src="/arrow-up-solid-full.svg"
                    alt="navigation"
                    width={15}
                    height={15}
                    className="rotate-45"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-10 justify-between flex-1">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="space-y-3 w-1/2 sm:w-auto"
            >
              <h2 className="text-lg text-white font-semibold">Services</h2>
              <p className="text-white text-sm">About Us</p>
              <p className="text-white text-sm">Why Choose Us</p>
              <p className="text-white text-sm">Testimonials</p>
              <p className="text-white text-sm">Pricing</p>
            </motion.div>

            {/* Information */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="space-y-3 w-1/2 sm:w-auto"
            >
              <h2 className="text-lg text-white font-semibold">Information</h2>
              <p className="text-white text-sm">Cyber Security</p>
              <p className="text-white text-sm">App Development</p>
              <p className="text-white text-sm">IT Consultancy</p>
              <p className="text-white text-sm">Cloud Migration</p>
            </motion.div>

            {/* Useful Links */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="space-y-3 w-1/2 sm:w-auto"
            >
              <h2 className="text-lg text-white font-semibold">Useful Links</h2>
              <p className="text-white text-sm">Case Studies</p>
              <p className="text-white text-sm">Careers</p>
              <p className="text-white text-sm">Blog</p>
              <p className="text-white text-sm">FAQ</p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16 text-center md:text-left">
          <h3 className="text-white text-sm sm:text-base">
            © Tech Hub. All Rights Reserved. Licensing Template by wCopilot
            Powered by{" "}
            <span className="hover:text-[#C28D01] cursor-pointer">Ifeoma</span>
          </h3>

          <div className="flex flex-wrap justify-between p-20 items-center">
            <div className="flex">
              <a href="https://www.facebook.com/">
                <Image
                  src="/images/facebook-f-brands-solid-full (1).svg"
                  alt="Facebook"
                  width={10}
                  height={10}
                  className="w-15 h-10"
                />
              </a>
              <a href="https://www.instagram.com/">
                <Image
                  src="/images/instagram-brands-solid-full.svg"
                  alt="Facebook"
                  width={10}
                  height={10}
                  className="w-15 h-10"
                />
              </a>
              <a href="https://www.twitter.com/">
                <Image
                  src="/images/twitter-brands-solid-full.svg"
                  alt="Facebook"
                  width={10}
                  height={10}
                  className="w-15 h-10"
                />
              </a>
              <a href="https://www.dribble.com/">
                <Image
                  src="/images/dribbble-brands-solid-full.svg"
                  alt="Facebook"
                  width={10}
                  height={10}
                  className="w-15 h-10 hover:text-[#C28D01]"
                />
              </a>
              <a href="https://www.pinterest.com/">
                <Image
                  src="/images/pinterest-brands-solid-full.svg"
                  alt="Facebook"
                  width={10}
                  height={10}
                  className="w-15 h-10 hover:text-[#C28D01]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
