"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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

export default function page() {
  const [navOpen, setNavOpen] = useState(false);
  const [open, setOpen] = useState(null)

  function toggleMenu() {
    setNavOpen(!navOpen);
  }


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

  return (
    <>
      <nav className="relative z-40">
        <div className="fixed  bg-black p-4 right-0 left-0 top-0  flex sm:gap-3 justify-between items-center">
          <div className="flex flex-row items-center">
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
              {/** for screens that are md, lg and xl, the HiMenu should not show, but below they can show */}
              <HiMenu size={30} />
            </div>
          )}
          {navOpen && (
            <div
              className="cursor-pointer md:hidden text-white"
              onClick={toggleMenu}
            >
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
                    {/** for screens that are md, lg and xl, the HiMenu should not show, but below they can show */}
                    <IoClose size={30} />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => handleOpen("Home")}
                onMouseLeave={handleClose}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Home
                  </MenuButton>
                </Menu>
              </div>

              <div
                onMouseEnter={() => handleOpen("Company")}
                onMouseLeave={handleClose}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Company
                    <ChevronDownIcon className="size-4 fill-white/60 hover:text-[#C28D01]" />
                  </MenuButton>

                  {open === "company" && (
                    <MenuItems
                      transition
                      anchor="bottom end"
                      className="w-70 absolute z-60 origin-top-right rounded-xl border p-2 border-white/5  bg-black  text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
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
                onMouseEnter={() => handleOpen("Services")}
                onMouseLeave={handleClose}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Services
                  </MenuButton>
                </Menu>
              </div>

              <div
                onMouseEnter={() => handleOpen("Service Reports")}
                onMouseLeave={handleClose}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Service Reports
                  </MenuButton>
                </Menu>
              </div>

              <div
                onMouseEnter={() => handleOpen("Academy")}
                onMouseLeave={handleClose}
              >
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                    Academy
                    <ChevronDownIcon className="size-4 fill-white/60 hover:text-[#C28D01]" />
                  </MenuButton>

                  {open === "Academy" && (
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
              onMouseEnter={() => handleOpen("Home")}
              onMouseLeave={handleClose}
            >
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Home
                </MenuButton>
              </Menu>
            </div>

            <div
              onMouseEnter={() => handleOpen("Company")}
              onMouseLeave={handleClose}
            >
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Company
                  <ChevronDownIcon className="size-4 fill-white/60 hover:text-[#C28D01]" />
                </MenuButton>

                {open === "Company" && (
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
              onMouseEnter={() => handleOpen("Services")}
              onMouseLeave={handleClose}
            >
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Services
                </MenuButton>
              </Menu>
            </div>

            <div
              onMouseEnter={() => handleOpen("Service Reports")}
              onMouseLeave={handleClose}
            >
              <Menu>
                <MenuButton className="inline-flex flex-wrap items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Service Reports
                </MenuButton>
              </Menu>
            </div>

            <div
              onMouseEnter={() => handleOpen("Academy")}
              onMouseLeave={handleClose}
            >
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md hover:text-[#C28D01] px-3 py-1.5 text-sm/6 font-light text-white shadow-inner shadow-w focus:not-data-focus:outline-none data-focus:outline data-focus:outli data-open:bg-gray">
                  Academy
                  <ChevronDownIcon className="size-4 fill-white/60 hover:text-[#C28D01]" />
                </MenuButton>

                {open === "Academy" && (
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
    </>
  );
}
