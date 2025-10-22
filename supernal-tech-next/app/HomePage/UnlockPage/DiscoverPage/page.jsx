import React from "react";

export default function page() {
  return (
    <>
      <section className="flex flex-wrap justify-around items-center  bg-[url('/images/graphbg.webp')] h-[70vh] bg-cover bg-center bg-no-repeat w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className=" flex flex-col space-y-4 w-[60vw] h-[40vh] rounded-3xl m-10 z-10 flex-wrap space-x-20 bg-[#202020] justify-center items-center text-white">
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

      <section>
        <div className="relative z-20 flex bg-white justify-center p-15 items-center">
          <div className="flex max-w-6xl flex-wrap justify-center gap-8">
            <div className="relative sm:w-90   h-110 rounded-3xl overflow-hidden">
              {/* Top-left icon */}
              <div className="absolute top-3 left-3 z-20 p-2 border border-[#ffffff26] bg-[#00000066] rounded-xl">
                <Image
                  src="/images/cyber-icon.svg"
                  alt="icon"
                  width={40}
                  height={30}
                />
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
                    src="/images/cyber-security.jpg"
                    alt="Cyber Security"
                    fill
                    className="object-cover "
                  />
                </motion.div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                <h1 className="font-bold text-[2rem] hover:text-[#C28D01]">
                  Cyber Security
                </h1>
                <p className="text-sm text-gray-300 cursor-pointer">
                  We believe that human-centered design are revolutionizing
                  brand experiences.
                </p>
              </div>
            </div>

            <div className="relative sm:w-90   h-110 rounded-3xl overflow-hidden">
              {/* Top-left icon */}
              <div className="absolute top-3 left-3 z-20 p-2 border border-[#ffffff26] bg-[#00000066] rounded-xl">
                <Image
                  src="/images/app-icon.svg"
                  alt="icon"
                  width={40}
                  height={30}
                />
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
                    src="/images/app-dev.jpg"
                    alt="Cyber Security"
                    fill
                    className="object-cover "
                  />
                </motion.div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                <h1 className="font-bold text-[2rem] hover:text-[#C28D01]">
                  App Development
                </h1>
                <p className="text-sm text-gray-300 cursor-pointer">
                  Reduce your capital and operating costs, while modernizing
                  your IT.
                </p>
              </div>
            </div>

            <div className="relative sm:w-90   h-110 rounded-3xl overflow-hidden">
              {/* Top-left icon */}
              <div className="absolute top-3 left-3 z-20 p-2 border border-[#ffffff26] bg-[#00000066] rounded-xl">
                <Image
                  src="/images/data-icon.svg"
                  alt="icon"
                  width={40}
                  height={30}
                />
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
                    src="/images/data.jpg"
                    alt="IT Consultancy"
                    fill
                    className="object-cover "
                  />
                </motion.div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                <h1 className="font-bold text-[2rem] hover:text-[#C28D01]">
                  IT Consultancy
                </h1>
                <p className="text-sm text-gray-300 cursor-pointer">
                  We believe that technology design are revolutionizing brand
                  experiences.
                </p>
              </div>
            </div>

            <div className="relative sm:w-90   h-110 rounded-3xl overflow-hidden">
              {/* Top-left icon */}
              <div className="absolute top-3 left-3 z-20 p-2 border border-[#ffffff26] bg-[#00000066] rounded-xl">
                <Image
                  src="/images/cloud-icon.svg"
                  alt="icon"
                  width={40}
                  height={30}
                />
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
                    src="/images/cloud.jpg"
                    alt="Cloud Migration"
                    fill
                    className="object-cover "
                  />
                </motion.div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                <h1 className="font-bold text-[2rem] hover:text-[#C28D01]">
                  Cloud Migration
                </h1>
                <p className="text-sm text-gray-300 cursor-pointer">
                  Process of designing, creating, deploying and maintaining
                  software.
                </p>
              </div>
            </div>

            <div className="relative sm:w-90   h-110 rounded-3xl overflow-hidden">
              {/* Top-left icon */}
              <div className="absolute top-3 left-3 z-20 p-2 border border-[#ffffff26] bg-[#00000066] rounded-xl">
                <Image
                  src="/images/poc-icon.svg"
                  alt="icon"
                  width={40}
                  height={30}
                />
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
                    src="/images/POC-dev.jpg"
                    alt="PoC Development"
                    fill
                    className="object-cover "
                  />
                </motion.div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                <h1 className="font-bold text-[2rem] hover:text-[#C28D01]">
                  PoC Development
                </h1>
                <p className="text-sm text-gray-300 cursor-pointer">
                  Protect networks, devices and data from attacks or
                  unauthorized access.
                </p>
              </div>
            </div>

            <div className="relative sm:w-90   h-110 rounded-3xl overflow-hidden">
              {/* Top-left icon */}
              <div className="absolute top-3 left-3 z-20 p-2 border border-[#ffffff26] bg-[#00000066] rounded-xl">
                <Image
                  src="/images/smart-icon.svg"
                  alt="icon"
                  width={40}
                  height={30}
                />
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
                    src="/images/smart-image.jpg"
                    alt="Smart Image"
                    fill
                    className="object-cover "
                  />
                </motion.div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                <h1 className="font-bold text-[2rem] hover:text-[#C28D01]">
                  Smart Image
                </h1>
                <p className="text-sm text-gray-300 cursor-pointer">
                  See to the integrity and security of your records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="flex flex-wrap justify-center p-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="md:text-5xl leading-[1.4] text-4xl md:max-w-2xl md:font-semibold md:text-balance text-white">
              Key Features of Our Tech Hub
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <p className="text-[1.2rem] mt-5 max-w-2xl font-light text-cente md:text-balance text-white">
              Discover the standout features that make our tech website your
              ultimate destination for all things technology. From in-depth
              reviews and expert articles to interactive tutorials and vibrant
              community forums, explore the comprehensive resources designed to
              keep you informed and ahead in the tech world
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap p-10 gap-5 justify-cente items-center">
          <div>
            <motion.div
              className="flex flex-col justify-start mt-10 items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image
                src="/images/bulb.svg"
                alt="Bulb"
                width={15}
                height={15}
                className="w-10 h-8"
              />
              <h1 className="text-white text-3xl p-5 ">Innovation</h1>
              <div className="md:w-[18rem] w-[4.15rem] my-[0.5rem] border border-[#C28D01] mx-au"></div>
              <p className="text-[1rem] mt-5 max-w-xs  font-light text-center md:text-balance text-white">
                Driving forward-thinking solutions and creative ideas to
                transform technology and improve everyday life.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="flex flex-col justify-start mt-10 items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <Image
                src="/images/star-excellent.svg"
                alt="Star"
                width={15}
                height={15}
                className="w-10 h-8"
              />
              <h1 className="text-white text-3xl p-5 ">Excellence</h1>
              <div className="md:w-[18rem] w-[4.15rem] my-[0.5rem] border border-[#C28D01] mx-au"></div>
              <p className="text-[1rem] mt-5 max-w-xs font-light text-center md:text-balance text-white">
                Striving for the highest standards in everything we do to
                deliver outstanding results and unparalleled quality.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="flex flex-col justify-start mt-10 items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <Image
                src="/images/round-collabo.svg"
                alt="Circles"
                width={15}
                height={15}
                className="w-10 h-8"
              />
              <h1 className="text-white text-3xl p-5 ">Collaboration</h1>
              <div className="md:w-[18rem] w-[4.15rem] my-[0.5rem] border border-[#C28D01] mx-au"></div>
              <p className="text-[1rem] mt-5 max-w-xs  font-light text-center md:text-balance text-white">
                Fostering a culture of teamwork and open communication to
                achieve shared goals and drive collective success.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="flex flex-col justify-start mt-10 items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            >
              <Image
                src="/images/hexagon.svg"
                alt="Buld"
                width={15}
                height={15}
                className="w-10 h-8"
              />
              <h1 className="text-white text-3xl p-5 ">Integrity</h1>
              <div className="md:w-[18rem] w-[4.15rem] my-[0.5rem] border border-[#C28D01]"></div>
              <p className="text-[1rem] mt-5 max-w-xs  font-light text-center md:text-balance text-white">
                Upholding honesty, transparency, and ethical standards in all
                our actions and decisions, in all situations we find ourselves
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white min-h-screen p-10">
        <h1 className="text-6xl mt-5 max-w-3xl font-bold text-cente md:text-balance">
          The most common questions
        </h1>

        <div className="flex flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mx-auto w-[40%] mt-10 max-w-2xl mt- divide-y bg-black divide-white/5 rounded-xl  p-4"
          >
            <div>
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between p-">
                  <span className="text-[1.5rem] text-white font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    What services does your tech company provide?
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-balance font-semibold text-white max-w-xl leading-relaxed">
                  We specialize in cutting-edge solutions for digital
                  transformation, including AI-driven software development,
                  cloud computing services, and cybersecurity solutions. Our
                  expertise covers industries such as healthcare, finance, and
                  retail.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mx-auto w-[40%] mt-10 max-w-2xl mt- divide-y bg-black divide-white/5 rounded-xl  p-4"
          >
            <div>
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between p-">
                  <span className="text-[1.5rem] text-white font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    What industries does your company serve?
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full  bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-white text-md text-balance font-semibold max-w-xl leading-relaxed">
                  Our solutions are tailored for a wide range of industries,
                  including manufacturing, hospitality, and telecommunications.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="mx-auto w-[40%] mt-10 max-w-2xl mt- divide-y bg-black divide-white/5 rounded-xl  p-4"
          >
            <div>
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between p-">
                  <span className="text-[1.5rem] text-white font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    How can I contact your support team?
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-white text-md text-balance font-semibold max-w-xl leading-relaxed">
                  You can reach our support team via email at
                  support@techcompany.com or by phone at +1 (555) 123-4567.
                  Alternatively, you can use the contact form on our website.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="mx-auto w-[40%] mt-10 max-w-2xl mt- divide-y bg-black divide-white/5 rounded-xl  p-4"
          >
            <div>
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between p-">
                  <span className="text-[1.5rem] text-white font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    Do you offer custom software development?
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-white text-balance font-semibold max-w-xl leading-relaxed">
                  Yes, we provide comprehensive custom software development
                  services tailored to meet the specific needs of businesses.
                  Our team excels in developing scalable applications and
                  integrating them with existing systems.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="mx-auto w-[40%] mt-10 max-w-2xl mt- divide-y bg-black divide-white/5 rounded-xl  p-4"
          >
            <div>
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between p-">
                  <span className="text-[1.5rem] text-white font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    Are you open to partnerships or Collaborations?
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-balance text-white font-semibold max-w-xl leading-relaxed">
                  Yes, we actively seek partnerships and collaborations that
                  align with our mission to drive innovation and deliver value
                  to our clients. Please reach out to
                  partnerships@techcompany.com to explore opportunities.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="mx-auto w-[40%] mt-10 max-w-2xl mt- divide-y bg-black divide-white/5 rounded-xl  p-4"
          >
            <div>
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between p-">
                  <span className="text-[1.5rem] text-white font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    Can you integrate with existing systems or software
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-balance text-white font-semibold max-w-xl leading-relaxed">
                  Absolutely. We have a proven track record of seamlessly
                  integrating our solutions with various ERP, CRM, and legacy
                  systems to enhance operational efficiency.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="mx-auto w-[40%] mt-10 max-w-2xl mt- divide-y bg-black divide-white/5 rounded-xl  p-4"
          >
            <div>
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between p-">
                  <span className="text-[1.5rem] text-white font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    What is your approach to project management
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-balance text-white font-semibold max-w-xl leading-relaxed">
                  We adopt agile project management methodologies to deliver
                  projects on time and within budget. Our transparent approach
                  includes frequent client communication and milestone reviews.{" "}
                </DisclosurePanel>
              </Disclosure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="mx-auto w-[40%] mt-10 max-w-2xl mt- divide-y bg-black divide-white/5 rounded-xl  p-4"
          >
            <div>
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between p-">
                  <span className="text-[1.5rem] text-white font-medium text-left whitespace-normal hover:text-[#C28D01]">
                    How do you ensure data security and confidentiality
                  </span>

                  {/* Moves Chevron more to the right */}
                  <div className="ml-8">
                    <ChevronDownIcon className="h-10 w-10 rounded-full bg-[#C28D01] fill-white transition-transform duration-300 group-data-open:rotate-180 group-data-hover:fill-white/50" />
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="mt-2 text-md text-balance text-white font-semibold max-w-xl leading-relaxed">
                  We implement stringent data security measures, including
                  AES-256 encryption for data at rest and in transit, regular
                  security audits, and compliance with industry standards such
                  as HIPAA and GDPR.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="min-h-screen ">
        <div className="flex  h-[90vh] rounded-4xl m-10 flex-wrap space-x-20  bg-[#C28D01] justify-center items-center">
          <div className="relative">
            <Image
              src="/images/three-people-laptop.webp"
              alt="Three"
              height={500}
              width={100}
              className="w-100 h-100 rounded-2xl relative object-cover"
            />

            <div className="absolute bottom-75 right-[-50]">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Image
                  src="/images/graph-pic.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-65 h-50"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-[-50] left-[-40]">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Image
                  src="/images/data-flow.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-50 h-50"
                />
              </motion.div>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="md:text-[2.385rem] text-[2rem] font-semibold">
              Unlock the full potential of your
              <br /> business with our cutting-edge
              <br /> software solutions. Join our
              <br /> community today and gain
              <br /> instant.
            </h1>

            <div className="flex gap-5 justify-between items-center">
              <div className="flex gap-5">
                <Image
                  src="/images/phone-solid-full.svg"
                  alt="Phone"
                  height={10}
                  width={30}
                />

                <div className="relative z-0">
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Your Phone Number
                  </label>
                </div>
              </div>
              <div>
                <button className="text-white bg-black flex mt-10 justify-center  border border-black hover:bg-[#C28D01] hover:text-white px-[2rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2">
                  Send
                  <Image
                    src="/arrow-up-solid-full.svg"
                    alt="navigation"
                    width={15}
                    height={15}
                    className="rotate-45 text-black transition-all duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
