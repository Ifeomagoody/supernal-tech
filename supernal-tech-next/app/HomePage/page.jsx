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



      const testimonialsViewAllPage = [
    {
      id: 1,
      text: `"Partnering with Tech Hub has been a game-changer for us. Their real-time data tracking and performance dashboards have provided us with unparalleled insights into our software performance."`,
      name: "Emily S.",
      role: "CEO of NextGen Solutions",
      image: "/images/blonde-hair-color.webp",
    },
    {
      id: 2,
      text: `"Working with Tech Hub streamlined our development process. Their automation tools saved us countless hours every week!"`,
      name: "Rebecca",
      role: "CTO of NextGen Solutions",
      image: "/images/checkers-shirt.webp",
    },
    {
      id: 3,
      text: `"Tech Hub helped us scale our infrastructure seamlessly. Their support team is always reliable and proactive."`,
      name: "Rachel",
      role: "CEO of Supernal",
      image: "/images/girl-in-pink-top.webp",
    },
  ];

    const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonialsViewAllPage.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsViewAllPage.length - 1 : prev - 1));
  };

  const active = testimonialsViewAllPage[current];


  

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
