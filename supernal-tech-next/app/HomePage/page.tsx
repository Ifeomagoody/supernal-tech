"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import * as motion from "motion/react-client";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";


import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { easeInOut } from "motion";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(0);


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
    { src: "/images/cyber-security.jpg", icon: "/images/cyber-icon.svg", boldText: "Cyber Security", smallText: "We believe that human-centered design are revolutionizing brand experiences." },
    { src: "/images/app-dev.jpg", icon: "/images/app-icon.svg", boldText: "App Development", smallText: "Reduce your capital and operating costs, while modernizing your IT."},
    { src: "/images/data.jpg", icon: "/images/data-icon.svg", boldText: "IT Consultancy", smallText: "We believe that technology design are revolutionizing brand experiences."},
    { src: "/images/POC-dev.jpg", icon: "/images/poc-icon.svg", boldText: "PoC Development", smallText: "Protect networks, devices and data from attacks or unauthorized access."},
    { src: "/images/cloud.jpg", icon: "/images/cloud-icon.svg", boldText: "Cloud Migration", smallText: "Process of designing, creating, deploying and maintaining software."},
  ];



    const  visibleImages = images.slice(currentIndex, currentIndex + 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  };


   const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= images.length ? 0 : prev + 1
    );
  };

    const testimonials = [
    {Text: "Partnering with Tech Hub has been a game-changer for us. Their real-time data tracking and performance dashboards have provided us with unparalleled insights into our software performance.", src: "/images/testimonial-man.webp", nameOfUser: "IfeChukwu", position: "CTO of CyberSecurity"},
    {Text: "We can now anticipate market shifts and drive innovation with confidence. Their benchmarking and goal tracking services ensure we stay ahead of the competition and meet our digital transformation goals.", src: "/images/testimonial-woman.webp", nameOfUser: "IfeChukwu", position: "CTO of CyberSecurity"},
    {Text: "Partnering with Tech Hub has been a game-changer for us. Their real-time data tracking and performance dashboards have provided us with unparalleled insights into our software performance. ", src: "/images/testimonial-man.webp", nameOfUser: "IfeChukwu", position: "CTO of CyberSecurity"},
    {Text: "We can now anticipate market shifts and drive innovation with confidence. Their benchmarking and goal tracking services ensure we stay ahead of the competition and meet our digital transformation goals.", src: "/images/testimonial-woman.webp", nameOfUser: "IfeChukwu", position: "CTO of CyberSecurity"},
    {Text: "Partnering with Tech Hub has been a game-changer for us. Their real-time data tracking and performance dashboards have provided us with unparalleled insights into our software performance.", src: "/images/testimonial-man.webp", nameOfUser: "IfeChukwu", position: "CTO of CyberSecurity"},
  ];

  


    const visibleTexts = testimonials.slice(currentText, currentText + 2);

  const prevText = () => {
    setCurrentText((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };


   const nextText = () => {
    setCurrentText((prev) =>
      prev + 2 >= testimonials.length ? 0 : prev + 1
    );
  };

    const title = "Trusted by 45,000+ founders & business owners".split(" ").map(word => word.split(""));

    // const Logos = [LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5];

   // const allLogos = [...Logos, ...Logos];

  return (
    <>
      <nav className="relative">
        <div className="fixed z-10 bg-black p-4 right-0 left-0 flex sm:gap-3 justify-between items-center">
          <div className="flex flex-row items-center gap-">
            <Link href="#">
              <Image
                src="/images/Ife_Logo.png"
                alt="The Logo"
                width={70}
                height={60}
              />
            </Link>
            <h1 className="text-white text-[1.5rem]">Supernal Tech</h1>
          </div>
          {!navOpen && (
            <div
              className="cursor-pointer md:hidden text-white"
              onClick={toggleMenu}
            >
              {" "}
              {/** for screens that are md, lg and xl, the HiMenu should not show, but below they can show */}
              <HiMenu size={30} />
            </div>
          )}
          {navOpen && (
            <div
              className="cursor-pointer md:hidden text-white"
              onClick={toggleMenu}
            >
              {" "}
              {/** for screens that are md, lg and xl, the HiMenu should not show, but below they can show */}
              <IoClose size={30} />
            </div>
          )}

          {navOpen ? (
            <div className="bg-black overflow-y-hidden fixed z-10 top-0 left-0 p-5 min-h-screen flex flex-col gap-1 duration-300 ease-in">
              <div className="flex flex-row items-center gap-5">
                <div>
                  <Link href="#">
                    <Image
                      src="/images/Ife_Logo.png"
                      alt="The Logo"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>

                <h1 className="text-white text-[1.3rem] ">Supernal Tech</h1>

                {navOpen && (
                  <div
                    className="cursor-pointer :hidden text-white"
                    onClick={toggleMenu}
                  >
                    {" "}
                    {/** for screens that are md, lg and xl, the HiMenu should not show, but below they can show */}
                    <IoClose size={30} />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="mt-5"
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Home
                  </MenuButton>
                </Menu>
              </div>

              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Company
                    <ChevronDownIcon className="size-4 fill-white/60 hover:text-[#C28D01]" />
                  </MenuButton>

                  {open && (
                    <MenuItems
                      transition
                      anchor="bottom end"
                      className="w-70 origin-top-right rounded-xl border p-2 border-white/5  bg-black p- text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                    >
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-white/10" : ""
                            } group flex w-full hover:text-[#C28D01] hover:list-disc items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10`}
                          >
                            <span
                              className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                   group-hover:w-4 transition-all duration-300 ease-out"
                            />

                            <span className="transition-all duration-300 ease-out group-hover:ml-2 text-[#C28D01]">
                              Our Distinctive Qualities
                            </span>
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                              ⌘DQ
                            </kbd>
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                   group-hover:w-4 transition-all duration-300 ease-out"
                          />

                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Our Team
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘T
                          </kbd>
                        </button>
                      </MenuItem>
                      <div className="my-1 h-px bg-white/5" />
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />

                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Core Values
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘CV
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />

                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Pricing
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘P
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />

                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Jobs
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘J
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />

                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            About Us
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘AU
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />

                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Customer Care
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘CC
                          </kbd>
                        </button>
                      </MenuItem>
                    </MenuItems>
                  )}
                </Menu>
              </div>
              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Services
                  </MenuButton>
                </Menu>
              </div>

              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Service Reports
                  </MenuButton>
                </Menu>
              </div>

              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Academy
                    <ChevronDownIcon className="size-4 fill-white/60 hover:text-[#C28D01]" />
                  </MenuButton>

                  {open && (
                    <MenuItems
                      transition
                      anchor="bottom end"
                      className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                    >
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-white/10" : ""
                            } group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10`}
                          >
                            <span
                              className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                            />
                            <span className="transition-all duration-300 ease-out group-hover:ml-2 text-[#C28D01]">
                              Programs
                            </span>
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                              ⌘P
                            </kbd>
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />
                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Testimonials
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘T
                          </kbd>
                        </button>
                      </MenuItem>
                      <div className="my-1 h-px bg-white/5" />
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />
                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Blog
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘B
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />
                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Shop
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘S
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />
                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Contact Us
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘CU
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />
                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Register
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘R
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />
                          <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                            Online
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘O
                          </kbd>
                        </button>
                      </MenuItem>
                    </MenuItems>
                  )}
                </Menu>
              </div>
              <button className="bg-[#C28D01] flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[1rem py-[1rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                Get in Touch
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 transition-all duration-300"
                />
              </button>
            </div>
          ) : (
            <div className="className=bg-gray-800 overflow-y-hidden fixed z-10 top-0 left-[-150%] p-5 min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in"></div>
          )}
          <div className="md:flex hidden  gap-3 border px-6 py-3 rounded-full border-[#535353] top-2 bg-[#191919] text-left data-focus:bg-white/10">
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Home
                </MenuButton>
              </Menu>
            </div>

            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Company
                  <ChevronDownIcon className="size-4 fill-white/60 hover:text-[#C28D01]" />
                </MenuButton>

                {open && (
                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-70 origin-top-right rounded-xl border p-2 border-white/5  bg-black p- text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                  >
                    <MenuItem>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-white/10" : ""
                          } group flex w-full hover:text-[#C28D01] hover:list-disc items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10`}
                        >
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                   group-hover:w-4 transition-all duration-300 ease-out"
                          />

                          <span className="transition-all duration-300 ease-out group-hover:ml-2 text-[#C28D01]">
                            {/* <PencilIcon className="size-4 fill-white/30" /> */}
                            Our Distinctive Qualities
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘DQ
                          </kbd>
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                   group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        {/* <Square2StackIcon className="size-4 fill-white/30" /> */}
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Our Team
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘T
                        </kbd>
                      </button>
                    </MenuItem>
                    <div className="my-1 h-px bg-white/5" />
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        {/* <ArchiveBoxXMarkIcon className="size-4 fill-white/30" /> */}
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Core Values
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘CV
                        </kbd>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        {/* <TrashIcon className="size-4 fill-white/30" /> */}
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Pricing
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘P
                        </kbd>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />

                        {/* <TrashIcon className="size-4 fill-white/30" /> */}
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Jobs
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘J
                        </kbd>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        {/* <TrashIcon className="size-4 fill-white/30" /> */}
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          About Us
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘AU
                        </kbd>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />

                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Customer Care
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘CC
                        </kbd>
                      </button>
                    </MenuItem>
                  </MenuItems>
                )}
              </Menu>
            </div>
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Services
                </MenuButton>
              </Menu>
            </div>

            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Menu>
                <MenuButton className="inline-flex flex-wrap items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Service Reports
                </MenuButton>
              </Menu>
            </div>

            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Academy
                  <ChevronDownIcon className="size-4 fill-white/60 hover:text-[#C28D01]" />
                </MenuButton>

                {open && (
                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                  >
                    <MenuItem>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-white/10" : ""
                          } group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10`}
                        >
                          <span
                            className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                          />
                          <span className="transition-all duration-300 ease-out group-hover:ml-2 text-[#C28D01]">
                            Programs
                          </span>
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                            ⌘P
                          </kbd>
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Testimonials
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘T
                        </kbd>
                      </button>
                    </MenuItem>
                    <div className="my-1 h-px bg-white/5" />
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Blog
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘B
                        </kbd>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Shop
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘S
                        </kbd>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Contact Us
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘CU
                        </kbd>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Register
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘R
                        </kbd>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                        <span
                          className="inline-block w-0 h-[2px] bg-[#C28D01] rounded-sm
                                    group-hover:w-4 transition-all duration-300 ease-out"
                        />
                        <span className="transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-[#C28D01]">
                          Online
                        </span>
                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                          ⌘O
                        </kbd>
                      </button>
                    </MenuItem>
                  </MenuItems>
                )}
              </Menu>
            </div>
          </div>
          <button className="bg-[#C28D01] md:flex hidden hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[1.8rem] py-[1rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
            Get in Touch
            <Image
              src="/arrow-up-solid-full.svg"
              alt="navigation"
              width={15}
              height={15}
              className="rotate-45 transition-all duration-300"
            />
          </button>
        </div>
      </nav>

      <main className="bg-black p- pt-34">
        {/**Unlock section first one */}
        <section className="flex flex-wrap  justify-around items-center">
          <div className="md:flex md:flex-col md:items-start items-center md:text-left text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h1 className="text-white text-[4rem] leading-[1.1] font-bold sm:w">
                Unlock the
                <br /> Latest in Tech
                <br /> <span className="text-[#C28D01]">Innovation</span>
              </h1>
              <p className="text-white text-[1.5rem] sm:text-[1rem] font-light mt-4">
                Stay informed with our expert reviews, insightful
                <br /> articles, and comprehensive guides to navigate
                <br /> the ever-evolving tech landscape.
              </p>

              <button className="bg-[#C28D01] my-10 flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[1.8rem] py-[1rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                Discover Now
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 transition-all duration-300"
                />
              </button>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="relative  flex items-center justify-center z-1 min-h-screen"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.5, 0.71, 0.2, 1.01],
              }}
            >
              <img
                src="/images/orange lines.svg"
                alt="orbit lines"
                className="relative w-[650px] h-[700px] object-contain z-0"
              />

              <img
                src="images/668bc631552245e0b1f1f6ac_667d0d3673903a7f735aa1cc_Screenshot 2024-06-27 at 10.56.39-p-500.webp"
                alt="person"
                className="absolute z-10  w-[350px] h-[350px] rounded-2xl object-cover"
              />

              {/** floating icons around the orbit lines */}
              <div className="absolute top-50 left-0.5 animate-icon-1 z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                <img
                  src="/images/667d1ea1458bb01af5a47b39_Icon_1.svg"
                  alt="laptop"
                  className="w-12 h-12"
                />
              </div>

              <div className="absolute top-13 right-35 animate-icon-2 z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                <img
                  src="/images/667d1f159491ad7d8138a56e_Icon_2.svg"
                  alt="VR"
                  className="w-12 h-12"
                />
              </div>

              <div className="absolute bottom-35 left-1/10 animate-icon-3 z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                <img
                  src="/images/667d20430bdeb0613eb7260a_Icon_3.svg"
                  alt="phone"
                  className="w-12 h-12"
                />
              </div>

              <div className="absolute bottom-20 right-1/4 animate-icon-4  z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                <img
                  src="/images/667d218ce38eb57331b53962_Icon_5.svg"
                  alt="shield"
                  className="w-12 h-12"
                />
              </div>

              <div className="absolute top-1/3.5 right-10 animate-icon-5  z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                <img
                  src="/images/667d20e58f08a445ae96240d_Icon_4.svg"
                  alt="scanner"
                  className="w-12 h-12"
                />
              </div>
            </motion.div>
          </div>
        </section>
 

 {/** second section*/}
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

            <div className="relative z-10 flex flex-col items-center justify-center h-full mt-4 text-white">
              <img
                src="images/668bc631552245e0b1f1f6ac_667d0d3673903a7f735aa1cc_Screenshot 2024-06-27 at 10.56.39-p-500.webp"
                alt="person"
                className="absolute z-10 :hidden w-[240px] h-[250px] rounded-2xl object-cover left-10 bottom-35"
              />
              <div></div>
              <h1 className="text-[4rem] font-bold text-center">
                Explore the Future
                <br /> of Tech Today
              </h1>
              <p className="mt-4 text-lg text-center">
                Stay at the cutting edge of innovation with our comprehensive
                <br /> coverage of the latest technological advancements
              </p>
              <button className="bg-[#C28D01] mt-8 flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[3rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                Get in Touch
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 transition-all duration-300"
                />
              </button>

              <img
                src="/images/man_VR.webp"
                alt="person"
                className="absolute z-10  w-[220px] h-[250px] rounded-2xl object-cover right-10 top-45"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 z-5"></div>
          </div>
        </section>
       

       {/** the scattered floating icons section third */}
        <section>
  <div className="relative w-full min-h-screen bg-black flex  items-center justify-center overflow-hidden">

    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute right-40 bottom-0 w-[570px] h-[460px] rounded-[300px] opacity-70 blur-[100px] bg-[radial-gradient(circle,#C28D01,#C28D0100)]"></div>
      <div className="absolute left-40 top-10 w-[570px] h-[460px] rounded-[300px] opacity-70 blur-[100px] bg-[radial-gradient(circle,#C28D01,#C28D0100)]"></div>
    </div>

    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="absolute top-30 left-10 animate-icon-1 p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d1ea1458bb01af5a47b39_Icon_1.svg" alt="laptop" className="w-12 h-12" />
      </div>
      <div className="absolute top-20 right-20 animate-icon-2 p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d1f159491ad7d8138a56e_Icon_2.svg" alt="VR" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-30 left-10 animate-icon-3 p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d20430bdeb0613eb7260a_Icon_3.svg" alt="phone" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-15 right-30 animate-icon-4 p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d218ce38eb57331b53962_Icon_5.svg" alt="shield" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-50 right-20 animate-icon-5 p-3 rounded-2xl border border-[#ffffff26] bg-[#ffffff26]">
        <img src="/images/667d20e58f08a445ae96240d_Icon_4.svg" alt="scanner" className="w-12 h-12" />
      </div>
    </div>

    <div className="relative z-20 flex items-center gap-6">
      <div className="flex flex-wrap justify-center gap-6">
  {visibleImages.map((img, index) => (
   
    <div
      key={index}
      className="relative sm:w-90   h-110 rounded-3xl overflow-hidden"
    >
      {/* Top-left icon */}
      <div className="absolute top-3 left-3 z-20 p-2 border border-[#ffffff26] bg-[#00000066] rounded-xl">
        <Image src={img.icon} alt="icon" width={40} height={30} />
      </div>

          <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden">
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
              <Image
                src={img.src}
                alt={`slide-${index}`}
                fill
                className="object-cover "
              />
            </motion.div>
          </div>

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
      <h1 className="font-bold text-[2rem] hover:text-[#C28D01]">{img.boldText}</h1>
      <p className="text-sm text-gray-300 cursor-pointer">{img.smallText}</p>
      </div>
    </div>
    
  ))
  
  }
</div>


      <button
        onClick={nextSlide}
        className="absolute -right-12 bg-[#C28D01] border border-[#C28D01] hover:bg-white hover:text-[#C28D01] text-white flex items-center justify-center h-15 w-15 rounded-full"
      >
        <ArrowRight className="h-8 w-8" />
      </button>

         <button
        onClick={prevSlide}
        className="absolute -left-12 bg-[#C28D01] border border-[#C28D01] hover:bg-white hover:text-[#C28D01] text-white flex items-center justify-center h-15 w-15 rounded-full"
      >
        <ArrowLeft className="h-8 w-8" />
      </button>


    </div>

  </div>
       </section>

{/**Do not delete */}
     {/* <section className="business-owners">
                <div className="business-owners-content">
                    <div className="business-owners-content-scroll-section">
                        <div className="business-owners-content-heading-words">
                            {title.map((word, wordIndex) => (
                                <h3
                                className="word-wrapper" key={wordIndex}
                                >
                                    {word.map((letter, letterIndex) => (
                                        <motion.span
                                        key={letterIndex}
                                        initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.015 * (wordIndex * 13 + letterIndex) }}
                                        viewport={{ once: true, amount: 1 }}
                                        className="upRevealElement-inline"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </h3>
                            ))}
                        </div>
                        <div className="business-logo-scroll-container">
                            <motion.div 
                            className="business-logo-scroll-container-scroll-div" 
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                            }}
                            >
                                {allLogos.map((logo, index) => (
                                    <BusinessLogo key={index} logoPath={logo} />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
     </section> */}
  


{/**fourth section */}
<section className=" relative min-h-screen bg-white flex flex-wrap-reverse justify-center  lg:flex-nowrap p-6 lg:p-20">

    <div className="absolute top-30 right-30 animate-icon-1 p-3 rounded-2xl border border-[#ffffff26] bg-black">
        <img src="/images/667d1ea1458bb01af5a47b39_Icon_1.svg" alt="laptop" className="w-12 h-12" />
      </div>
  {/* Text section */}
  <div className="w-full lg:w-3/4 space-y-10">
    <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold text-center hover:text-[#C28D01] leading-tight">
      Empowering Tech<br /> Insights & Analytics
    </h1>


<motion.div
initial={{ opacity: 0, y: 100}}
animate={{ opacity: 1, y: 0}}
transition={{ duration: 1, ease: 'easeInOut' }}
>
    {/* Card 1 */}
    <div className="border border-black flex flex-col sm:flex-row gap-5 px-6 sm:px-10 py-6 sm:py-10  rounded-2xl">
      <h1 className="text-[#C28D01] text-[2.5rem] sm:text-[3rem] font-semibold">01</h1>
      <div>
        <h1 className="text-[1.5rem] sm:text-[2rem] hover:text-[#C28D01] font-semibold leading-tight">
          Real-Time Data<br /> Tracking
        </h1>
        <p className="text-[1rem] mt-2">
          Visualize key tech performance indicators (KPIs) through intuitive dashboards,
          facilitating quick insights into software performance, user engagement, and
          operational efficiency.
        </p>
      </div>
    </div>
</motion.div>



<motion.div
initial={{ opacity: 0, y: 100}}
animate={{ opacity: 1, y: 0}}
transition={{ duration: 2, ease: 'easeInOut' }}
>
    {/* Card 2 */}
    <div className="border border-black flex flex-col sm:flex-row gap-5 px-6 sm:px-10 py-6 sm:py-8 rounded-2xl">
      <h1 className="text-[#C28D01] text-[2.5rem] sm:text-[3rem] font-semibold">02</h1>
      <div>
        <h1 className="text-[1.5rem] sm:text-[2rem] hover:text-[#C28D01] font-semibold leading-tight">
          Performance<br /> Dashboards
        </h1>
        <p className="text-[1rem] mt-2">
          Spot emerging tech trends and user behaviors over time, leveraging insights to
          anticipate market shifts and drive innovation in software development and digital
          solutions.
        </p>
      </div>
    </div>
</motion.div>



<motion.div
initial={{ opacity: 0, y: 100}}
animate={{ opacity: 1, y: 0}}
transition={{ duration: 3, ease: 'easeInOut' }}
>
    {/* Card 3 */}
    <div className="border border-black  flex flex-col sm:flex-row gap-5 px-6 sm:px-10 py-6 sm:py-8 rounded-2xl">
      <h1 className="text-[#C28D01] text-[2.5rem] sm:text-[3rem] font-semibold">03</h1>
      <div>
        <h1 className="text-[1.5rem] sm:text-[2rem] hover:text-[#C28D01] font-semibold leading-tight">
          Trend Analysis
        </h1>
        <p className="text-[1rem] mt-2">
          Generate customized reports focusing on tech-specific metrics vital for strategic
          planning and digital product development, ensuring alignment with business goals.
        </p>
      </div>
    </div>
</motion.div>
  </div>

 
</section>


{/**Not completed, remaining graph fifth section*/}
<section className="min-h-screen p-6 w-full  flex flex-col justify-around bg-black">
  <div className="flex flex-wrap justify-around m-10  ">
    <motion.div
initial={{ opacity: 0, y: 100}}
animate={{ opacity: 1, y: 0}}
transition={{ duration: 1, ease: 'easeInOut' }}
>
  <h1 className="text-[3rem] text-white font-bold">Explore The Latest<br/> Statistics And Data-<br/> Driven Insights</h1>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 100}}
animate={{ opacity: 1, y: 0}}
transition={{ duration: 2, ease: 'easeInOut' }}
>

   <p className="text-white ">Explore the latest statistics and data-driven insights<br/> to understand the evolving tech landscape. Dive<br/> deep into market trends, user behaviors, and<br/> emerging innovations with our comprehensive and<br/> up-to-date data analysis. Our detailed visualizations<br/> and expert interpretations make complex data<br/> accessible, helping you stay informed and ahead in<br/> the world of technology.</p>
</motion.div>
  </div>

 

<div className="relative flex flex-col items-center mb-20">
  {/* Long background image */}
  <Image 
    src="/images/corporate devs.webp"
    alt="Empowering Picture"
    width={800}
    height={300}
    className="object-contain mt-3 rounded-3xl w-3/5 hidde"
  />

  {/* White boxes container */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    className="absolute md:top-1/2 md:left-1/2 md:-translate-y-1/3 md:flex md:flex-wrap md:justify-center md:gap-8
               w-full md:w-auto mt-30 md:mt-0"
  >
    <div className="flex flex-row mt-2 md:grid md:grid-cols-2 md:gap-8 gap-4 items-center justify-center">
      <div className="md:h-[170px] md:w-[210px] h-[130px] w-[130px] px-5 py-4 rounded-2xl bg-white text-center">
        <h1 className="text-[#C28D01] font-medium md:text-[3rem] text-[1.5rem] ">150+</h1>
        <div className="md:w-[8.3rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
        <h3 className="font-semibold md:text-[1rem] text-[0.7rem]">Happy Clients</h3>
      </div>
      <div className="md:h-[170px] md:w-[210px] h-[130px] w-[130px] px-5 py-4 rounded-2xl bg-white text-center">
        <h1 className="text-[#C28D01] font-medium md:text-[3rem] text-[1.5rem]">45+</h1>
        <div className="md:w-[8.3rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
        <h3 className="font-semibold md:text-[1rem] text-[0.7rem]">Experienced Staff</h3>
      </div>
      <div className="md:h-[170px] md:w-[210px] h-[130px] w-[130px] px-5 py-4 rounded-2xl bg-white text-center">
        <h1 className="text-[#C28D01] font-medium md:text-[3rem] text-[1.5rem]">22+</h1>
        <div className="md:w-[8.3rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
        <h3 className="font-semibold md:text-[1rem] text-[0.7rem]">Years of Experience</h3>
      </div>
      <div className="md:h-[170px] md:w-[210px] h-[130px] w-[130px] px-5 py-4 rounded-2xl bg-white text-center">
        <h1 className="text-[#C28D01] font-medium md:text-[3rem] text-[1.5rem]">820</h1>
        <div className="md:w-[8.3rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
        <h3 className="font-semibold md:text-[1rem] text-[0.7rem]">Projects Done</h3>
      </div>
    </div>
  </motion.div>
</div>


</section>

{/**sixth section */}
<section className="bg-white min-h-screen w-full">
 <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    >


   
  <div className="md:flex md:justify-around items-center pt-10">
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

  <div className="md:flex md:gap-10 md:justify-center md:items-center p-10">
     <motion.div
              
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], 
              }}
            >

      <Image
        src="/images/girl-hand-phone.png"
        alt="Girl Hand"
        width={450}
        height={500}
        className="rounded-xl object-fill"
      />
     </motion.div>

      <div>


          <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem]  rounded-full text-[1rem]  items-center gap-2 text-white">
                News</button>

                <h1 className="text-[2rem] hover:text-[#C28D01] font-semibold">Augmented Reality in Retail:<br/> Enhancing Customer<br/> Experiences and Sales</h1>
                <p className="text-[1rem]  font-light">Discover how augmented reality is reshaping the retail industry, from virtual<br/> try-ons to interactive shopping experiences.</p>
                <h3 className="text-[1.125rem] hover:text-[#C28D01] font-semibold">Look more</h3>
      </div>

  </div>
              <div className="md:w-[68rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>

  <div className="md:flex md:gap-10 md:justify-center md:items-center p-10">
     <motion.div
              
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], 
              }}
            >

      <Image
        src="/images/crypto-image.png"
        alt="Crypto"
        width={450}
        height={500}
        className="rounded-xl object-fill"
      />
     </motion.div>

      <div>


          <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem]  rounded-full text-[1rem]  items-center gap-2 text-white">
                Artificial Intelligence</button>

                <h1 className="text-[2rem] hover:text-[#C28D01] font-semibold">Blockchain Beyond<br/> Cryptocurrency: Applications<br/> and Innovations</h1>
                <p className="text-[1rem]  font-light">Learn about the diverse applications of blockchain technology beyond<br/> cryptocurrencies, including supply chain management and smart contracts.</p>
                <h3 className="text-[1.125rem] hover:text-[#C28D01] font-semibold">Look more</h3>
      </div>

  </div>
              <div className="md:w-[68rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
   </motion.div>
</section> 
 
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
          <section className="bg-black min-h-screen p-10 w-full">
      
            
                  <div className="flex justify-around items-center">
                                                  <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      >  
                    <h1 className="text-[4rem] text-white">Testimonials</h1>
                  </motion.div>
                    <div>

                                                <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: -100 }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      >  
                     <button className="bg-[#C28D01] flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[2rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                View all
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 transition-all duration-300"
                />
              </button>
              </motion.div>
                    </div>
                  </div>


          <div className="flex justify-around">
                  <div className="flex justify-center items-center  p-10">

                                               <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      >  
                    <div className="w-[35rem] h-[25rem] rounded-2xl p-10 border space-y-10 border-white">
                           <h1 className="text-[1.5rem] font-semibold text-white">"Partnering with Tech Hub has been a<br/> game-changer for us. Their real-time<br/> data tracking and performance<br/> dashboards have provided us with<br/> unparalleled insights into our software<br/> performance. "</h1>
                    
                    <div className="flex space-x-5 mt-">
                      <Image
                          src="/images/testimonial-man.webp"
                          alt="Testifier Man"
                          width={50}
                          height={50}
                          className="w-15 h-15 rounded-full"
                      />
                     <div>
                      <h2 className="font-semibold text-white">John D.</h2>
                      <p className="text-[1rem] font-light text-white">CTO of TechInnovate</p>

                     </div>
                    </div>
                    </div>
                    </motion.div>
                  </div>

                  
                  <div className="flex justify-center items-center p-10">
                                                <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: -100 }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                      >  
                    <div className="w-[35rem] h-[25rem] rounded-2xl p-10 border space-y-10 border-white">
                           <h1 className="text-[1.5rem] font-semibold text-white">"Partnering with Tech Hub has been a<br/> game-changer for us. Their real-time<br/> data tracking and performance<br/> dashboards have provided us with<br/> unparalleled insights into our software<br/> performance. "</h1>
                    
                    <div className="flex space-x-5 mt-">
                      <Image
                          src="/images/testimonial-woman.webp"
                          alt="Testifier Man"
                          width={50}
                          height={50}
                          className="w-15 h-15 rounded-full"
                      />
                     <div>
                      <h2 className="font-semibold text-white">John D.</h2>
                      <p className="text-[1rem] font-light text-white">CTO of TechInnovate</p>

                     </div>
                    </div>
                    </div>
                   </motion.div> 
                  </div>

          </div>
          </section>
      </main>
    </>
  );
}
