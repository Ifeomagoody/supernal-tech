import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
     
             <title>Get to Know Us</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />

      <section className="flex flex-wrap justify-around items-center bg-[url('/images/graphbg.webp')] h-[70vh] bg-cover bg-center bg-no-repeat w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className=" flex flex-co space-y- w-[65vw] h-[40vh] rounded-3xl m-10 z-10 flex-wrap space-x-20 bg-[#202020] justify-center items-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <h1 className="text-6xl font-bold">Services</h1>{" "}
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <p className="text-[1.5rem] text-center max-w-3xl text-balanc">
                We offer a comprehensive range of services designed to meet the
                diverse needs of businesses in the tech industry.
              </p>
            </motion.div>
          </div>{" "}
        </motion.div>
      </section>

      <section className="w-full min-h-screen bg-white pt-10 flex items-center justify-center overflow-hidden px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
            <div>
              <div className="relative w-[260px] h-[210px] bg-[#C28D01] rounded-3xl">
                <Image
                  src="/images/off-white-girl.webp"
                  alt="Team-member-1"
                  width={700}
                  height={500}
                  className="absolute w-full h-[300px] object-cover right-0 bottom-0"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-semibold text-[#191919] text-2xl">
                  Emma Johnson
                </h2>
                <p className="text-[1rem] font-light text-[#191919]">
                  Lead Software Engineer
                </p>
              </div>
            </div>

            <div>
              <div className="relative w-[260px] h-[210px] bg-[#C28D01] rounded-3xl">
                <Image
                  src="/images/afro-hair.webp"
                  alt="Team-member-2"
                  width={700}
                  height={500}
                  className="absolute w-full h-[300px] object-cover right-0 bottom-0"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-semibold text-[#191919] text-2xl">
                  Ava Davis
                </h2>
                <p className="text-[1rem] font-light text-[#191919]">
                  Data Scientist
                </p>
              </div>
            </div>

            <div>
              <div className="relative w-[260px] h-[210px] bg-[#C28D01] rounded-3xl">
                <Image
                  src="/images/brown-black-shirt.webp"
                  alt="Team-member-3"
                  width={700}
                  height={500}
                  className="absolute w-full h-[300px] object-cover right-0 bottom-0"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-semibold text-[#191919] text-2xl">
                  James Anderson
                </h2>
                <p className="text-[1rem] font-light text-[#191919]">
                  Chief Executive Officer
                </p>
              </div>
            </div>

            <div>
              <div className="relative w-[260px] h-[210px] bg-[#C28D01] rounded-3xl">
                <Image
                  src="/images/checkers-blue.webp"
                  alt="Team-member-4"
                  width={700}
                  height={500}
                  className="absolute w-full h-[300px] object-cover right-0 bottom-0"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-semibold text-[#191919] text-2xl">
                  William Harris
                </h2>
                <p className="text-[1rem] font-light text-[#191919]">
                  Senior DevOps Engineer
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
            <div>
              <div className="relative w-[260px] h-[210px] bg-[#C28D01] rounded-3xl">
                <Image
                  src="/images/side-girl-laughing.webp"
                  alt="Team-member-5"
                  width={700}
                  height={500}
                  className="absolute w-full h-[250px] object-cover right-0 -top-10"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-semibold text-[#191919] text-2xl">
                  Isabella Morgan
                </h2>
                <p className="text-[1rem] font-light text-[#191919]">
                  UX/UI Designer
                </p>
              </div>
            </div>

            <div>
              <div className="relative w-[260px] h-[210px] bg-[#C28D01] rounded-3xl">
                <Image
                  src="/images/white-girl-smiling.webp"
                  alt="Team-member-6"
                  width={700}
                  height={500}
                  className="absolute w-full h-[240px] object-cover right-0 bottom-0"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-semibold text-[#191919] text-2xl">
                  Mia Davis
                </h2>
                <p className="text-[1rem] font-light text-[#191919]">
                  Cybersecurity Specialist
                </p>
              </div>
            </div>

            <div>
              <div className="relative w-[260px] h-[210px] bg-[#C28D01] rounded-3xl">
                <Image
                  src="/images/black-top-tab.webp"
                  alt="Team-member-7"
                  width={700}
                  height={500}
                  className="absolute w-full h-[240px] object-cover right-0 bottom-1"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-semibold text-[#191919] text-2xl">
                  Sophia Adams
                </h2>
                <p className="text-[1rem] font-light text-[#191919]">
                  Product Manager
                </p>
              </div>
            </div>

            <div>
              <div className="relative w-[260px] h-[210px] bg-[#C28D01] rounded-3xl">
                <Image
                  src="/images/off-white-girl.webp"
                  alt="Team-member-8"
                  width={700}
                  height={500}
                  className="absolute w-full h-[300px] object-cover right-0 bottom-0"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-semibold text-[#191919] text-2xl">
                  Jackson Lee
                </h2>
                <p className="text-[1rem] font-light text-[#191919]">
                  Chief Operating Officer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <div className="flex flex-wrap justify-around items-stretch gap-10 w-full px-10 py-10">
          <motion.div
            className="relative flex justify-center items-center bg-transparent rounded-2xl overflow-hidden flex-1 min-w-[300px] max-w-[600px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src="/images/man-girl-white-pen.webp"
              alt="Man and Woman"
              width={600}
              height={450}
              className="rounded-2xl w-full h-[450px] object-cover"
            />

            <Link href="https://www.youtube.com/watch?v=KGg5cIjHQiw">
              <div className="group absolute inset-0 flex items-center justify-center">
                <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 delay-100 hover:scale-105 hover:ring-[6px] hover:ring-[#C28D01] hover:ring-offset-[8px] hover:ring-offset-transparent">
                  <Image
                    src="/images/play-solid-full (1).svg"
                    alt="Play Button"
                    width={30}
                    height={30}
                    className="transition-all duration-300 delay-100 group-hover:brightness-0"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between items-center text-white bg-[#202020] rounded-2xl  min-w-[300px] max-w-[600px] p-10 h-[450px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center space-y-6 text-center">
              <Image
                src="/images/quotes-img.svg"
                alt="Quote Icon"
                width={50}
                height={50}
              />

              <h2 className="text-[1.5rem]  font-medium leading-relaxed">
                "It is really refreshing to create the best solutions for
                clients who are truly interested in their client’s needs and
                preferences."
              </h2>
            </div>

            <div className="flex items-center  space-x-5">
              <Image
                src="/images/girl-in-pink-top.webp"
                alt="Testifier"
                width={50}
                height={50}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-xl">Jessica Robinson</h2>
                <p className="text-sm font-light">CEO, Apple</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap p-10 gap-5 bg-[#202020] rounded-xl justify-cente items-center">
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
                <div className="md:w-[18rem] w-[4.15rem] my-[0.5rem] border border-[#C28D01]"></div>
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
                <h1 className="text-white text-3xl p-5">Collaboration</h1>
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
        </div>
      </section>

      <section className="bg-white min-h-screen p-10 w-full">
        <div className="flex flex-wrap justify-around items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-[4rem]">Testimonials</h1>
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Link href="">
                <div className="bg-[#C28D01] flex  justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[2rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
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
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="flex justify-center items-center  p-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="flex justify-center items-center p-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="md:w-[35rem] md:h-[25rem] w-[25rem] h-[18rem] rounded-2xl p-10  bg-black space-y-10">
                <h1 className="md:text-[1.5rem] text-[1rem] font-semibold text-white text-center">
                  "Partnering with Tech Hub has been a<br /> game-changer for
                  us. Their real-time
                  <br /> data tracking and performance
                  <br /> dashboards have provided us with
                  <br /> unparalleled insights into our software
                  <br /> performance. "
                </h1>

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
                    <p className="text-[1rem] font-light text-white">
                      CTO of TechInnovate
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center items-center p-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="md:w-[35rem] md:h-[25rem] w-[25rem] h-[18rem] rounded-2xl p-10  bg-black space-y-10">
                <h1 className="md:text-[1.5rem] text-[1rem] font-semibold text-white text-center">
                  "Partnering with Tech Hub has been a<br /> game-changer for
                  us. Their real-time
                  <br /> data tracking and performance
                  <br /> dashboards have provided us with
                  <br /> unparalleled insights into our software
                  <br /> performance. "
                </h1>

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
                    <p className="text-[1rem] font-light text-white">
                      CTO of TechInnovate
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/**Footer */}
      <section className="min-h-screen bg-black p-10">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center">
            <Link href="#">
              <Image
                src="/images/Ife_Logo.png"
                alt="The Logo"
                width={70}
                height={60}
              />
            </Link>
            <h1 className="text-white text-[3rem]">Let&lsquo Work With You</h1>
          </div>

          <Link href="/book-a-call-get-in-touch"></Link>
          <div className="text-white bg-black flex mt-10 justify-center  border border-[#C28D01] hover:bg-[#C28D01] hover:text-white px-[2rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2">
            Book a Call
            <Image
              src="/arrow-up-solid-full.svg"
              alt="navigation"
              width={15}
              height={15}
              className="rotate-45 text-black transition-all duration-300"
            />
          </div>
          <div className="md:w-[88rem] w-[4.15rem] my-[2rem] border border-[#919191] mx-auto"></div>
        </div>

        <div className="flex flex-wrap p-10 justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          >
            <div className="Newsletter space-y-3">
              <h3 className="text-[2rem] text-white">Newsletter</h3>
              <p className="text-white">
                Sign up for the Tech Hub weekly
                <br /> newsletter to get the latest updates.
              </p>

              <div className="relative mt-15 flex flex-wrap justify-between items-center">
                <div className="flex justify-between gap-5 items-center">
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>

                  <input
                    type="text"
                    id="input-group-1"
                    className="md:w-100 text-white text-sm block ps-10 p-2.5 placeholder-white 
                     border-0 border-b-2 border-gray-500 focus:border-white 
                     focus:ring-0 outline-none appearance-none rounded-none"
                    placeholder="Your Email Address"
                  />
                </div>
                <div>
                  <button className="text-white bg-[#C28D01] flex  justify-center  border border-black hover:bg-[#C28D01] hover:text-white h-13 w-13 rounded-full text-[1.3rem]  items-center gap-2">
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
          </motion.div>

          <div className="Information ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="space-y-3"
            >
              <h2 className="text-[1.3rem] text-white font-semibold">
                Services
              </h2>
              <p className="text-white">About Us</p>
              <p className="text-white">Why Choose Us</p>
              <p className="text-white">Testimonials</p>
              <p className="text-white">Pricing</p>
            </motion.div>
          </div>

          <div className="Services">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="space-y-3"
            >
              <h2 className="text-[1.3rem] text-white font-semibold">
                Information
              </h2>
              <p className="text-white">Cyber Security</p>
              <p className="text-white">App Development</p>
              <p className="text-white">IT Consultancy</p>
              <p className="text-white">Cloud Migration</p>
            </motion.div>
          </div>

          <div className="Useful Links">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="space-y-3"
            >
              <h2 className="text-[1.3rem] text-white font-semibold">
                Useful Links
              </h2>
              <p className="text-white">Case Studies</p>
              <p className="text-white">Careers</p>
              <p className="text-white">Blog</p>
              <p className="text-white">FAQ</p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between p-20 items-center">
          <h3 className="text-white">
            © Tech Hub. All Rights Reserved .Licensing Template by wCopilot
            Powered by <span className="hover:text-[#C28D01]">Ifeoma</span>
          </h3>

          <div className="flex">
            <a href="https://www.facebook.com/">
              <Image
                src="/images/facebook-f-brands-solid-full (1).svg"
                alt="Facebook"
                width={10}
                height={10}
                className="w-15 h-10"
              />
            </a>
            <a href="https://www.instagram.com/">
              <Image
                src="/images/instagram-brands-solid-full.svg"
                alt="Facebook"
                width={10}
                height={10}
                className="w-15 h-10"
              />
            </a>
            <a href="https://www.twitter.com/">
              <Image
                src="/images/twitter-brands-solid-full.svg"
                alt="Facebook"
                width={10}
                height={10}
                className="w-15 h-10"
              />
            </a>
            <a href="https://www.dribble.com/">
              <Image
                src="/images/dribbble-brands-solid-full.svg"
                alt="Facebook"
                width={10}
                height={10}
                className="w-15 h-10 hover:text-[#C28D01]"
              />
            </a>
            <a href="https://www.pinterest.com/">
              <Image
                src="/images/pinterest-brands-solid-full.svg"
                alt="Facebook"
                width={10}
                height={10}
                className="w-15 h-10 hover:text-[#C28D01]"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
