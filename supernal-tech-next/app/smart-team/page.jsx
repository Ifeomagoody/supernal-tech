import React from "react";
import * as motion from "motion/react-client";
import CoursesPage from "./page";
import Image from "next/image";

export default function page() {
  return (
    <>

    
             <title>Smart Team</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />


      <section className="flex flex-wrap  justify-around items-center bg-[url('/images/table-bg.svg')] bg-cover bg-center bg-no-repeat w-full h-[50vh]">
        <div className="md:flex md:flex-col md:items-start items-center md:text-left text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-[5rem] leading-[1.1] font-bold sm:w">
              Smart Team
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
            Our Smart Team service revolutionizes traditional teamwork by
            leveraging advanced technology and strategic methodologies to create
            a dynamic and efficient collaboration environment. By seamlessly
            integrating cutting-edge tools and platforms, we empower teams to
            communicate effectively, streamline workflows, and achieve optimal
            productivity.
          </p>
          <p className="text-[1rem] mt-5 max-w-xl font-light text-cente md:text-balance">
            Partner with us to transform your team into a cohesive,
            high-performing Smart Team that drives innovation, efficiency, and
            success in today&lsquo competitive landscape. Experience the
            transformative power of technology-enabled teamwork with our Smart
            Team service.
          </p>
        </div>

        <div className="relative w-[500px] h-[300px] overflow-hidden rounded-3xl">
          <Image
            src="/images/smart-team.jpg"
            alt="Smart Team"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="min-h-screen">
        <div className=" flex flex-col flex-wrap mt-10 justify-cente items-start py-10 px-30 ">
          <h1 className="text-[4rem] leading-[1.1] font-semibold text-white">
            What&lsquo Included in Our Service
          </h1>
          <h3 className="font-medium text-[2rem] text-white leading-[3]">
            Customized Mobile App Development
          </h3>

          <li className="text-white text-[1.2rem] leading-[3]">
            <span className="font-semibold">Tailored Expertise: </span>We
            assemble a dedicated team of skilled developers, designers, and
            project managers based on your project requirements and technology
            stack.
          </li>
          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Scalable Resources:</span> Whether
            you need to scale up or down, our flexible engagement models ensure
            you have the right talent at every stage of your app development
            journey.
          </li>
          <h3 className="font-medium text-[2rem] text-white leading-[3]">
            Collaborative Partnership
          </h3>

          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Integrated Team:</span> Our team
            seamlessly integrates with your in-house staff or existing
            development team, fostering collaboration and knowledge sharing.
          </li>
          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Transparent Communication:</span> We
            prioritize clear communication channels and regular updates to
            ensure alignment with your project goals and timelines.
          </li>

          <h3 className="font-medium text-[2rem] text-white leading-[3]">
            Agile Project Management
          </h3>
          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Iterative Development: </span>{" "}
            Following agile methodologies, we deliver frequent, incremental
            updates and prototypes, allowing for rapid feedback and adjustments.
          </li>
          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Adaptive Planning:</span> Our
            adaptive planning approach enables us to respond quickly to changes
            in project scope, ensuring flexibility and responsiveness.
          </li>

          <h3 className="font-medium text-[2rem] text-white leading-[3]">
            Focused Expertise
          </h3>
          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Specialized Skills:</span> Benefit
            from the specialized skills and industry expertise of our team
            members, each bringing unique insights and capabilities to enhance
            your project.
          </li>
          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Continuous Learning:</span> We stay
            updated with the latest trends and technologies, applying best
            practices to drive innovation and efficiency in app development.
          </li>

          <h3 className="font-medium text-[2rem] text-white leading-[3]">
            Quality Assurance and Support
          </h3>
          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Thorough Testing:</span> Rigorous
            quality assurance processes including automated testing and manual
            reviews to ensure high performance, reliability, and security of
            your app.
          </li>
          <li className="text-white text-[1.2rem] ">
            <span className="font-semibold">Post-Deployment Support: </span>{" "}
            Comprehensive support and maintenance services post-launch,
            including updates, troubleshooting, and performance monitoring.
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
    </>
  );
}
