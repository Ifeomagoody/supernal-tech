"use client";
import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

export default function page() {
  return (
    <>

           
             <title>Get a Quote</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />

      <section className="flex flex-wrap justify-around items-center bg-[url('/images/table-bg.svg')] bg-cover bg-black h-[80vh] bg-center bg-no-repeat w-full min-h-scree">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className=" flex flex-col space-y-4 w-[60vw] h-[40vh] bg-[#C28D01] rounded-3xl m-10 flex-wrap space-x-20  justify-center items-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <h1 className="text-6xl font-bold">Get a Quote</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <p className="text-[1.5rem] ">
                Our team is ready to assist you with expert advice and
                competitive pricing
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      

      <section className="bg-white min-h-screen px-5 py-10">
        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-around items-center">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-balance">
              Contact our support team to grow your business
            </h1>

            <p className="text-base sm:text-lg md:text-xl mt-5 text-gray-700">
              Contact our dedicated support team today to discover how we can
              help grow your business. Whether you're seeking guidance on our
              services, interested in a personalized solution, or simply have
              questions, our experts are here to assist you every step of the
              way. Reach out to us and start achieving your business goals with
              confidence.
            </p>

            <div className="w-full my-6 border border-[#c2c2c2]"></div>

            <div className="flex justify-center md:justify-start items-center">
              {[
                "/images/pink-girl.webp",
                "/images/ah-smiling-man.webp",
                "/images/nude-girl.webp",
                "/images/testimonial-man.webp",
                "/images/blonde-hair-color.webp",
              ].map((src, index) => (
                <div
                  key={index}
                  className={`relative w-12 h-12 rounded-full border-2 border-white overflow-hidden ${
                    index !== 0 ? "-ml-4" : ""
                  }`}
                  style={{ zIndex: 10 - index }}
                >
                  <Image
                    src={src}
                    alt={`user-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center md:text-left">
              Send Us a Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-gray-50 border border-gray-200 mt-5 text-gray-900 text-sm rounded-lg focus:ring-[#C28D01] focus:border-[#C28D01] block w-full px-5 py-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-gray-50 border border-gray-200 mt-5 text-gray-900 text-sm rounded-lg focus:ring-[#C28D01] focus:border-[#C28D01] block w-full px-5 py-4"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="block p-3 mt-8 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#C28D01] focus:border-[#C28D01]"
            ></textarea>

            <button className="bg-[#C28D01] my-8 w-full hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-6 py-3 rounded-full text-lg flex justify-center items-center gap-2 text-white transition-all duration-300">
              Submit
              <Image
                src="/arrow-up-solid-full.svg"
                alt="navigation"
                width={20}
                height={20}
                className="rotate-45 transition-all duration-300"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-16">
          {[
            {
              title: "Services",
              text: "Explore our comprehensive range of services designed to meet your diverse needs",
              icon: "/images/envelope-regular-full.svg",
            },
            {
              title: "Pricing",
              text: "We offer transparent and competitive pricing to suit your budget and requirements",
              icon: "/images/database-solid-full.svg",
            },
            {
              title: "Job Opportunities",
              text: "Unleash your potential in a supportive and innovative environment",
              icon: "/images/mobile-screen-button-solid-full.svg",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: i + 1, ease: "easeInOut" }}
              className="w-full sm:w-[18rem] md:w-[20rem] lg:w-[22rem]"
            >
              <div className="h-80 rounded-2xl space-y-3 flex flex-col items-center justify-center bg-[#f9f9fa] text-center p-6">
                <div className="relative w-10 h-10 mb-3">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold">{card.title}</p>
                <p className="text-gray-700 text-sm sm:text-base">
                  {card.text}
                </p>
                <Link
                  href="#"
                  className="flex flex-col items-center mt-2 hover:text-[#C28D01]"
                >
                  <p className="text-lg text-[#C28D01] hover:text-black">
                    Learn more
                  </p>
                  <Image
                    src="/arrow-up-solid-full.svg"
                    alt="navigation"
                    width={20}
                    height={20}
                    className="transition-all duration-300"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="min-h-screen">
        <div className="flex flex-row m-10 justify-between items-center">
          <h1 className="text-5xl font-semibold text-white">Our Location</h1>

          <div className="bg-white rounded-2xl">
            <h1>Map is supposed to be here</h1>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white">
        <div className="flex flex-wrap justify-center space-x-10 pt-20">
          <div className="relative w-full max-w-xl h-64 md:h-120 rounded-2xl overflow-hidden">
            <Image
              alt="Collaboration"
              src="/images/collabo-image.webp"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="">
            <h1 className=" text-5xl font-bold text-balance max-w-xl leading-[1.4]">
              Innovation And{" "}
              <span className="text-[#C28D01]">Collaboration</span>
            </h1>

            <div className="mx-auto w-full max-w-2xl mt- divide-y divide-white/5 rounded-xl bg-white/5 p-4">
              <Disclosure as="div" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between p-4">
                  <span className="text-[1.5rem] font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    Who can benefit from Tech Hub
                    <br /> Company&lsquo services
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-balance max-w-xl leading-relaxed">
                  Tech Hub Company offers a range of services tailored to
                  support tech startups and businesses, including co-working
                  spaces, mentorship programs, access to funding opportunities,
                  and networking events. We provide the resources and support
                  needed to help tech entrepreneurs thrive and grow their
                  ventures.
                </DisclosurePanel>
              </Disclosure>
            </div>

            <div className="mx-auto w-full max-w-2xl mt- divide-y divide-white/5 rounded-xl bg-white/5 p-4">
              <Disclosure as="div" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between  p-4">
                  <span className="text-[1.5rem] font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    What services does Tech Hub
                    <br /> Company offer?
                  </span>

                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-balance max-w-xl leading-relaxed">
                  Our services are designed for tech startups, entrepreneurs,
                  freelancers, and businesses looking to innovate and scale.
                  Whether you're launching a new product, seeking investment, or
                  expanding your network, Tech Hub Company provides the
                  ecosystem and infrastructure to support your growth.
                </DisclosurePanel>
              </Disclosure>
            </div>

            <div className="mx-auto w-full max-w-2xl mt- divide-y divide-white/5 rounded-xl bg-white/5 p-4">
              <Disclosure as="div" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between p-4">
                  <span className="text-[1.5rem] font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    How can I become a member of
                    <br /> Tech Hub?
                  </span>

                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-balance max-w-xl leading-relaxed">
                  Becoming a member of Tech Hub is easy! Simply visit our
                  membership page or contact us directly to learn about our
                  membership options and benefits. Membership grants you access
                  to our facilities, networking opportunities, exclusive events,
                  and more.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
