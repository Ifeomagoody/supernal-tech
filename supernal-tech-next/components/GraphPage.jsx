
"use client"
import React from 'react'
import * as motion from "motion/react-client";
import Image from "next/image";


export default function page() {
  return (
    <>

             <title>Phone Number</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />

        <section className="min-h-screen w-full px-4 py-10 sm:px-6 md:px-10">
  <div className="flex flex-col md:flex-row items-center justify-center bg-[#C28D01] rounded-3xl m-4 md:m-10 p-6 md:p-10 gap-10 md:gap-20 relative">
    
    <div className="relative flex justify-center items-center w-full md:w-1/2">
      <Image
        src="/images/three-people-laptop.webp"
        alt="Three"
        width={500}
        height={500}
        className="rounded-2xl object-cover w-full max-w-[500px] h-auto"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10"
      >
        <Image
          src="/images/graph-pic.svg"
          alt="Graph"
          width={80}
          height={80}
          className="w-[100px] sm:w-[150px] md:w-[200px] h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10"
      >
        <Image
          src="/images/data-flow.svg"
          alt="Data Flow"
          width={80}
          height={80}
          className="w-[100px] sm:w-[150px] md:w-[200px] h-auto"
        />
      </motion.div>
    </div>

    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left text-white space-y-6 w-full md:w-1/2">
      <h1 className="text-[1.75rem] sm:text-[2rem] md:text-[2.385rem] font-semibold leading-snug text-balance">
        Unlock the full potential of your <br className="hidden sm:block" />
        business with our cutting-edge <br className="hidden sm:block" />
        software solutions. Join our <br className="hidden sm:block" />
        community today and gain instant.
      </h1>

      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 w-full sm:w-auto">
        <div className="flex items-center gap-3 w-full sm:w-[70%]">
          <Image
            src="/images/phone-solid-full.svg"
            alt="Phone"
            height={24}
            width={24}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <div className="relative w-full">
            <input
              type="text"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white/70 appearance-none focus:outline-none focus:border-black peer placeholder-transparent"
              placeholder="Your Phone Number"
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Phone Number
            </label>
          </div>
        </div>

        <button className="flex justify-center items-center bg-black hover:bg-transparent border border-black hover:text-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300">
          Send
          <Image
            src="/arrow-up-solid-full.svg"
            alt="navigation"
            width={15}
            height={15}
            className="ml-2 rotate-45 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
