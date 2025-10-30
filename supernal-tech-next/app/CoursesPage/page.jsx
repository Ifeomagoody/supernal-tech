
"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import * as motion from "motion/react-client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/images/cyber-security.jpg",
      icon: "/images/cyber-icon.svg",
      boldText: "Cyber Security",
      smallText:
        "We believe that human-centered design are revolutionizing brand experiences.",
      link: "/cyber-security",
    },
    {
      src: "/images/app-dev.jpg",
      icon: "/images/app-icon.svg",
      boldText: "App Development",
      smallText:
        "Reduce your capital and operating costs, while modernizing your IT.",
      link: "/app-development",
    },
    {
      src: "/images/data.jpg",
      icon: "/images/data-icon.svg",
      boldText: "IT Consultancy",
      smallText:
        "We believe that technology design are revolutionizing brand experiences.",
      link: "/it-consultancy",
    },
    {
      src: "/images/POC-dev.jpg",
      icon: "/images/poc-icon.svg",
      boldText: "PoC Development",
      smallText:
        "Protect networks, devices and data from attacks or unauthorized access.",
      link: "/poc-development",
    },
    {
      src: "/images/cloud.jpg",
      icon: "/images/cloud-icon.svg",
      boldText: "Cloud Migration",
      smallText:
        "Process of designing, creating, deploying and maintaining software.",
        link: "/cloud-migration",
    },
  ];

  const Techlogo = [
    { src: "/images/react.svg", name: "React" },
    { src: "/images/Nextjs-icon.png", name: "Next.js" },
    { src: "/images/Nodejs-icon.png", name: "Node.js" },
    { src: "/images/express-icon.png", name: "Express" },
    { src: "/images/mongodb-icon.png", name: "MongoDB" },
  ];

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= images.length ? 0 : prev + 1));
  };

  return (
    <>
       
             <title>Services</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />
            
      <section className="px-4 md:px-10 lg:px-20">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left gap-6 pt-10">
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight">
      Our Advanced <br /> Tech Services
    </h1>

    <Link href="/expert-team-get-to-know-us">
      <div className="bg-[#C28D01] hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] text-white px-6 py-3 rounded-full text-lg md:text-xl flex items-center justify-center gap-2 transition-all">
        View all
        <Image
          src="/arrow-up-solid-full.svg"
          alt="navigation"
          width={15}
          height={15}
          className="rotate-45 transition-all duration-300"
        />
      </div>
    </Link>
  </div>

  <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center mt-10 overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute right-10 md:right-40 bottom-0 w-[250px] sm:w-[400px] md:w-[570px] h-[250px] sm:h-[400px] md:h-[460px] rounded-[300px] opacity-70 blur-[100px] bg-[radial-gradient(circle,#C28D01,#C28D0100)]"></div>
      <div className="absolute left-10 md:left-40 top-10 w-[250px] sm:w-[400px] md:w-[570px] h-[250px] sm:h-[400px] md:h-[460px] rounded-[300px] opacity-70 blur-[100px] bg-[radial-gradient(circle,#C28D01,#C28D0100)]"></div>
    </div>

    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="absolute top-10 left-5 sm:left-10 animate-icon-1 p-2 sm:p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d1ea1458bb01af5a47b39_Icon_1.svg" alt="laptop" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
      </div>

      <div className="absolute top-20 right-10 md:right-20 animate-icon-2 p-2 sm:p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d1f159491ad7d8138a56e_Icon_2.svg" alt="VR" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
      </div>

      <div className="absolute bottom-20 left-5 sm:left-10 animate-icon-3 p-2 sm:p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d20430bdeb0613eb7260a_Icon_3.svg" alt="phone" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
      </div>

      <div className="absolute bottom-10 right-10 md:right-30 animate-icon-4 p-2 sm:p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d218ce38eb57331b53962_Icon_5.svg" alt="shield" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
      </div>

      <div className="absolute bottom-40 right-10 md:right-20 animate-icon-5 p-2 sm:p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d20e58f08a445ae96240d_Icon_4.svg" alt="scanner" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
      </div>
    </div>

    <div className="relative z-20 flex items-center justify-center flex-wrap gap-6 w-full">
      {visibleImages.map((img, index) => (
       
        <Link
        href={img.link} 
        key={index} 
        className="relative w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[300px] md:h-[380px] lg:h-[400px] rounded-3xl overflow-hidden">
          <div
           className="absolute top-3 left-3 z-20 p-2 border border-[#ffffff26] bg-[#00000066] rounded-xl">
            <Image src={img.icon} alt="icon" width={35} height={30} />
          </div>

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image src={img.src} alt={`slide-${index}`} fill className="object-cover" />
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl hover:text-[#C28D01]">{img.boldText}</h1>
            <p className="text-xs sm:text-sm text-gray-300 cursor-pointer">{img.smallText}</p>
          </div>
        </Link>
       
      ))}
    </div>

    <div className="flex justify-between w-full px-6 mt-6 md:mt-10">
      <button
        onClick={prevSlide}
        className="bg-[#C28D01] border border-[#C28D01] hover:bg-white hover:text-[#C28D01] text-white flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full transition-all"
      >
        <ArrowLeft className="h-5 w-5 md:h-7 md:w-7" />
      </button>

      <button
        onClick={nextSlide}
        className="bg-[#C28D01] border border-[#C28D01] hover:bg-white hover:text-[#C28D01] text-white flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full transition-all"
      >
        <ArrowRight className="h-5 w-5 md:h-7 md:w-7" />
      </button>
    </div>

    
  </div>
</section>


  <section className="bg-[#C28D01] mt-10 py-6 sm:py-10 flex items-center overflow-hidden">
    <motion.div
      className="flex items-center gap-10 sm:gap-16"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[...Techlogo, ...Techlogo].map((tech, i) => (
        <div key={i} className="flex items-center space-x-3">
          <Image
            src={tech.src}
            alt={tech.name}
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="font-semibold text-base sm:text-xl">{tech.name}</span>
        </div>
      ))}
    </motion.div>
  </section>


    </>
  );
}
