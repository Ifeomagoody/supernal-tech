
"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';



export default function page() {
  return (
    <>

             <title>Discover Now</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />

<section>
  <div className="relative w-full h-screen overflow-hidden">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/Ife_Video.webm"
      autoPlay
      loop
      muted
      playsInline
    />

    <div className="absolute inset-0 bg-black/40 z-5"></div>

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
      
      <img
        src="/images/668bc631552245e0b1f1f6ac_667d0d3673903a7f735aa1cc_Screenshot 2024-06-27 at 10.56.39-p-500.webp"
        alt="person"
        className="absolute hidden sm:block w-[140px] h-[150px] md:w-[180px] md:h-[200px] lg:w-[240px] lg:h-[250px] rounded-2xl object-cover left-4 sm:left-8 md:left-10 bottom-10 sm:bottom-20 md:bottom-28"
      />

      <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-tight">
        Explore the Future
        <br /> of Tech Today
      </h1>

      <p className="mt-4 text-base sm:text-lg md:text-xl max-w-[90%] sm:max-w-[600px]">
        Stay at the cutting edge of innovation with our comprehensive
        <br className="hidden sm:block" />
        coverage of the latest technological advancements.
      </p>

      <Link href="/expert-team-get-to-know-us">
        <div className="bg-[#C28D01] mt-8 flex justify-center items-center gap-2 text-white border border-[#C28D01] rounded-full px-[2rem] sm:px-[3rem] py-[0.7rem] text-[1rem] sm:text-[1.2rem] hover:bg-transparent hover:text-[#C28D01] transition-all duration-300">
          Discover Now
          <Image
            src="/arrow-up-solid-full.svg"
            alt="navigation"
            width={15}
            height={15}
            className="rotate-45 transition-all duration-300"
          />
        </div>
      </Link>

      <img
        src="/images/man_VR.webp"
        alt="person"
        className="absolute hidden sm:block w-[140px] h-[150px] md:w-[180px] md:h-[200px] lg:w-[220px] lg:h-[250px] rounded-2xl object-cover right-4 sm:right-8 md:right-10 top-20 sm:top-28 md:top-40"
      />
    </div>
  </div>
</section>

    </>
  )
}
