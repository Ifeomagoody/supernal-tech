import React from "react";

export default function page() {
  return (
    <>
      <section className="flex flex-wrap justify-around items-center bg-[url('/images/table-bg.svg')] bg-cover bg-center bg-no-repeat w-full min-h-scree">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className=" flex flex-col space-y-4 w-[60vw] h-[40vh] rounded-3xl m-10 flex-wrap space-x-20  justify-center items-center text-white">
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

      <section className="bg-white min-h-screen">
        <div className="flex flex-wrap gap-10 justify-center pt-15 p-5 items-center">
          <div className="">
            <h1 className="md:text-6xl text-4xl text-cente md:max-w-2xl md:font-bold md:text-balance">
              Contact our support team to grow your business
            </h1>

            <p className="">
              Contact our dedicated support team today to discover how we can
              help grow your business. Whether you're seeking guidance on our
              services, interested in a personalized solution, or simply have
              questions, our experts are here to assist you every step of the
              way. Reach out to us and start achieving your business goals with
              confidence.
            </p>
            <div className="md:w-[35rem] w-[35rem]  my-[2.5rem] border border-[#c2c2c2]"></div>

            <div className="flex items-center justify-cente">
              {[
                "/images/pink-girl.webp",
                "/images/ah-smiling-man.webp",
                "/images/nude-girl.webp",
                "/images/testimonial-man.webp",
                "/images/blonde-hair-color.webp",
              ].map((src, index) => (
                <div
                  key={index}
                  className={`relative w-15 h-15 rounded-full border-2 border-white overflow-hidden ${
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

          {/* second div */}
          <div className="">
            <h2 className="md:text-4xl text-4xl text-cente md:max-w-2xl md:font-semibold md:text-balance">
              Send Us a Message
            </h2>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-200 mt-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-[450] px-5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              id="Email"
              className="bg-gray-50 border border-gray-200 mt-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-[450] px-5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
              required
            />
            <textarea
              id="message"
              rows="4"
              className="block p-3 mt-8 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Text"
            ></textarea>

            <button className="bg-[#C28D01] my-10 flex justify-around w-full hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[1.8rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
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

        <div className="flex flex-wrap mt-15 space-x-8 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="w-100 h-80 rounded-2xl space-y-3 flex flex-col items-center justify-center bg-[#f9f9fa]">
              <div className="relative w-10 h-10  rounded-full">
                <Image
                  src="/images/envelope-regular-full.svg"
                  alt="Envelope"
                  width={5}
                  height={5}
                  className="w-15 h-15 absolute -bottom-3"
                />
              </div>
              <p className="text-3xl font-semibold">Services</p>
              <p className="text-center ">
                Explore our comprehensive range of services designed to meet
                your diverse needs
              </p>
              <Link href="#">
                <p className="text-xl text-[#C28D01] hover:text-black">
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
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="w-100 h-80 rounded-2xl space-y-3 flex flex-col items-center justify-center bg-[#f9f9fa]">
              <div className="relative w-10 h-10  rounded-full">
                <Image
                  src="/images/database-solid-full.svg"
                  alt="Envelope"
                  width={5}
                  height={5}
                  className="w-15 h-15 absolute -bottom-3"
                />
              </div>
              <p className="text-3xl font-semibold">Pricing</p>
              <p className="text-center ">
                We offer transparent and competitive pricing to suit your budget
                and requirements
              </p>
              <Link href="#">
                <p className="text-xl text-[#C28D01] hover:text-black">
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

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <div className="w-100 h-80 rounded-2xl space-y-3 flex flex-col items-center justify-center bg-[#f9f9fa]">
              <div className="relative w-10 h-10  rounded-full">
                <Image
                  src="/images/mobile-screen-button-solid-full.svg"
                  alt="Envelope"
                  width={5}
                  height={5}
                  className="w-15 h-15 absolute -bottom-3"
                />
              </div>
              <p className="text-3xl font-semibold">Job Oportunities</p>
              <p className="text-center ">
                Unleash your potential in a supportive and innovative
                environment
              </p>
              <Link href="#">
                <p className="text-xl text-[#C28D01] hover:text-black">
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
                    <br /> Company's services
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

                  {/* Moves Chevron more to the right */}
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

                  {/* Moves Chevron more to the right */}
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
