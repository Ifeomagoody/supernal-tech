"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import * as motion from "motion/react-client";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Unlock,
} from "lucide-react";
import Navbar from "./Navbar/page";
import UnlockPage from "./UnlockPage/page";
import ExplorePage from "./ExplorePage/page";
import CoursesPage from "./CoursesPage/page";
import InsightsPage from "./InsightsPage/page";
import StatisticsPage from "./StatisticsPage/page";
import InnovationsPage from "./InnovationsPage/page";
import TestimonialsPage from "./TestimonialsPage/page";
import ExpertTeam from "./ExpertTeam/page";
import GraphPage from "./GraphPage/page";
import Footer from "./Footer/page";

import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { easeInOut } from "motion";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function Page() {
  const [open, setOpen] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const handleOpen = (menuName) => setOpen(menuName);
  const handleClose = () => setOpen(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
  }, []);
  function toggleMenu() {
    setNavOpen(!navOpen);
  }

  const images = [
    {
      src: "/images/cyber-security.jpg",
      icon: "/images/cyber-icon.svg",
      boldText: "Cyber Security",
      smallText:
        "We believe that human-centered design are revolutionizing brand experiences.",
    },
    {
      src: "/images/app-dev.jpg",
      icon: "/images/app-icon.svg",
      boldText: "App Development",
      smallText:
        "Reduce your capital and operating costs, while modernizing your IT.",
    },
    {
      src: "/images/data.jpg",
      icon: "/images/data-icon.svg",
      boldText: "IT Consultancy",
      smallText:
        "We believe that technology design are revolutionizing brand experiences.",
    },
    {
      src: "/images/POC-dev.jpg",
      icon: "/images/poc-icon.svg",
      boldText: "PoC Development",
      smallText:
        "Protect networks, devices and data from attacks or unauthorized access.",
    },
    {
      src: "/images/cloud.jpg",
      icon: "/images/cloud-icon.svg",
      boldText: "Cloud Migration",
      smallText:
        "Process of designing, creating, deploying and maintaining software.",
    },
  ];

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= images.length ? 0 : prev + 1));
  };

  const testimonials = [
    {
      Text: "Partnering with Tech Hub has been a game-changer for us. Their real-time data tracking and performance dashboards have provided us with unparalleled insights into our software performance.",
      src: "/images/testimonial-man.webp",
      nameOfUser: "IfeChukwu",
      position: "CTO of CyberSecurity",
    },
    {
      Text: "We can now anticipate market shifts and drive innovation with confidence. Their benchmarking and goal tracking services ensure we stay ahead of the competition and meet our digital transformation goals.",
      src: "/images/testimonial-woman.webp",
      nameOfUser: "IfeChukwu",
      position: "CTO of CyberSecurity",
    },
    {
      Text: "Partnering with Tech Hub has been a game-changer for us. Their real-time data tracking and performance dashboards have provided us with unparalleled insights into our software performance. ",
      src: "/images/testimonial-man.webp",
      nameOfUser: "IfeChukwu",
      position: "CTO of CyberSecurity",
    },
    {
      Text: "We can now anticipate market shifts and drive innovation with confidence. Their benchmarking and goal tracking services ensure we stay ahead of the competition and meet our digital transformation goals.",
      src: "/images/testimonial-woman.webp",
      nameOfUser: "IfeChukwu",
      position: "CTO of CyberSecurity",
    },
    {
      Text: "Partnering with Tech Hub has been a game-changer for us. Their real-time data tracking and performance dashboards have provided us with unparalleled insights into our software performance.",
      src: "/images/testimonial-man.webp",
      nameOfUser: "IfeChukwu",
      position: "CTO of CyberSecurity",
    },
  ];

  const visibleTexts = testimonials.slice(currentText, currentText + 2);

  const prevText = () => {
    setCurrentText((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  const nextText = () => {
    setCurrentText((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 1));
  };

  const title = "Trusted by 45,000+ founders & business owners"
    .split(" ")
    .map((word) => word.split(""));

  // const Logos = [LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5];

  // const allLogos = [...Logos, ...Logos];

  return (
    <>
      <Navbar />
      <main className="bg-black  pt-34">
        {/**Unlock section first one */}
        <UnlockPage />
        {/** second section*/}
        <ExplorePage />

        {/** the scattered floating icons section third */}
        <CoursesPage />

        {/**fourth section */}

        <InsightsPage />

        {/**Not completed, remaining graph fifth section*/}

        <StatisticsPage />

        {/**sixth section */}

        <InnovationsPage />

        {/*seventh section*/}
        {/*<section className="min-h-screen p-6 w-full flex  bg-black">
   <div className="relative border border-green-500 w-[400px] flex flex-wrap h-[400px] rounded-3xl overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], 
              }}
            >

              <div className="flex justify-between border border-green-500 items-center">
                <h1 className="text-[4rem]">Testimonials</h1>

                  <button className="bg-[#C28D01] flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[2rem] py-[1rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                View all
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 transition-all duration-300"
                />
              </button>
              </div>
             <div className="w-[30rem] h-[30rem] rounded-xl border border-white">
                 <h1></h1>
             </div>
              <div className="flex justify-between items-center">
                <h1 className="text-[4rem]">Testimonials</h1>

                  <button className="bg-[#C28D01] flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[2rem] py-[1rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                View all
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 transition-all duration-300"
                />
              </button>
              </div>
             <div className="w-[30rem] h-[30rem] rounded-xl border border-white">
                 <h1></h1>
             </div>
            </motion.div>

{/*             
      <button
        onClick={nextText}
        className="absolute -right-12 bg-[#C28D01] border border-[#C28D01] hover:bg-white hover:text-[#C28D01] text-white flex items-center justify-center h-15 w-15 rounded-full"
      >
        <ArrowRight className="h-8 w-8" />
      </button>

         <button
        onClick={prevText}
        className="absolute -left-12 bg-[#C28D01] border border-[#C28D01] hover:bg-white hover:text-[#C28D01] text-white flex items-center justify-center h-15 w-15 rounded-full"
      >
        <ArrowLeft className="h-8 w-8" />
      </button> *
          </div> */}

        {/* <div className="flex justify- items-cente">

            <h1 className="text-[4rem] text-white">Testimonials</h1>


                <button className="bg-[#C28D01] flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[2rem] py-[1rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                View all
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 transition-all duration-300"
                />
              </button>
            
          </div> *       
  <div className="md:flex md:justify-between items-cente pt-10">
        <h1 className="text-[3rem] font-semibold">Insights &<br/> Innovations</h1>
      <div>
       <button className="bg-[#C28D01] flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[2rem] py-[1rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                View all
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 transition-all duration-300"
                />
              </button>
      </div>  
  </div>
</section>*/}

        {/*seventh section*/}

        <TestimonialsPage />

        {/*eight section*/}

        <ExpertTeam />

        {/*ninth section*/}

        <GraphPage />

        {/**Services Page */}

        {/**Cyber Security page */}


        {/*tenth section*/}

        <Footer />
      </main>
    </>
  );
}
