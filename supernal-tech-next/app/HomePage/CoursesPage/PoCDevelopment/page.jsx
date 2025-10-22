
import React from "react";
import * as motion from "motion/react-client";
import CoursesPage from "./page";
import Footer from "./page";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="flex flex-wrap  justify-around items-center bg-[url('/images/table-bg.svg')] bg-cover bg-center bg-no-repeat w-full h-[50vh]">
        <div className="md:flex md:flex-col md:items-start items-center md:text-left text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-[5rem] leading-[1.1] font-bold sm:w">
              PoC Development
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white min-h-screen  flex flex-wrap justify-center space-x-15 items-center">
        <div>
          <h1 className="text-[4rem] leading-[1.1] font-semibold">
            About Service
          </h1>
          <p className="text-[1rem] mt-5 max-w-xl font-light text-cente md:text-balance">
                At InnovateTech Solutions, our PoC (Proof of Concept) development service is dedicated to bringing your innovative ideas to life with precision and efficiency. We specialize in validating the feasibility of your technological concepts, providing a clear path forward for successful product development.
                 </p>
              <p className="text-[1rem] mt-5 max-w-xl font-light text-cente md:text-balance">Our service begins with collaborative ideation sessions to refine and crystallize your ideas into a well-defined concept for the PoC. </p>
        </div>

        <div className="relative w-[500px] h-[300px] overflow-hidden rounded-3xl">
          <Image
            src="/images/POC-dev.jpg"
            alt="Cloud Migration"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="min-h-screen">
        <div className=" flex flex-col flex-wrap mt-10 justify-cente items-start py-10 px-30 ">
          <h1 className="text-[4rem] leading-[1.1] font-semibold text-white">
            What's Included in Our Service
          </h1>
          <p className="text-white text-[1.2rem] mt-5 max-w-4x font-light leading-[2] md:text-balanc">
           Here are the components typically included in a PoC (Proof of Concept) development service:
          </p>
          <h3 className="font-medium text-[2rem] text-white leading-[3]">
            Ideation and Conceptualization:
          </h3>
           <p className="text-white text-[1.2rem] mt-5 max-w-4x font-light leading-[2] md:text-balanc">
            Collaborative sessions to refine and crystallize innovative ideas into a defined PoC concept.
          </p>
          <h3 className="font-medium text-[2rem] text-white leading-[3]">
             Rapid Prototyping:
          </h3>
          <li className="text-white text-[1.2rem] leading-[3]">
              Swift creation of functional prototypes to demonstrate core features and validate technical feasibility.
          </li> 

          <h3 className="font-medium text-[2rem] text-white leading-[3]">
                Agile Development Approach:
          </h3>
          <li className="text-white text-[1.2rem] leading-[3]">
              Iterative development cycles allowing for continuous feedback and refinement of the PoC.
          </li>

          <h3 className="font-medium text-[2rem] text-white leading-[3]">
                Technology Evaluation:
          </h3>
          <li className="text-white text-[1.2rem] leading-[3]">
            Assessment of suitable technologies and platforms to support the PoC's requirements and scalability.
          </li>
         
          <h3 className="font-medium text-[2rem] text-white leading-[3]">
           Proof of Value Demonstration:
          </h3>
          <li className="text-white text-[1.2rem] leading-[3]">
                Presentation and demonstration of the PoC to stakeholders, highlighting its potential value and market readiness.
          </li>
          <h3 className="font-medium text-[2rem] text-white leading-[3]">
             Performance Evaluation:
          </h3>
          <li className="text-white text-[1.2rem] leading-[3]">
             Rigorous testing and analysis to assess performance metrics, scalability, and reliability of the PoC.
          </li>
        </div>
      </section>

      <section className="min-h-screen bg-white">
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

      <CoursesPage />
      <Footer />
    </>
  );
}
