
import React from 'react'
import Image from "next/image";
import  { useState } from "react";
import * as motion from "motion/react-client";
import { ArrowLeft, ArrowRight} from "lucide-react";





export default function page() {
const [currentIndex, setCurrentIndex] = useState(0);


  
    const images = [
    { src: "/images/cyber-security.jpg", icon: "/images/cyber-icon.svg", boldText: "Cyber Security", smallText: "We believe that human-centered design are revolutionizing brand experiences." },
    { src: "/images/app-dev.jpg", icon: "/images/app-icon.svg", boldText: "App Development", smallText: "Reduce your capital and operating costs, while modernizing your IT."},
    { src: "/images/data.jpg", icon: "/images/data-icon.svg", boldText: "IT Consultancy", smallText: "We believe that technology design are revolutionizing brand experiences."},
    { src: "/images/POC-dev.jpg", icon: "/images/poc-icon.svg", boldText: "PoC Development", smallText: "Protect networks, devices and data from attacks or unauthorized access."},
    { src: "/images/cloud.jpg", icon: "/images/cloud-icon.svg", boldText: "Cloud Migration", smallText: "Process of designing, creating, deploying and maintaining software."},
  ];


    const Techlogo = [    
          { src: "/images/react.svg", name: "React" },
          { src: "/images/Nextjs-icon.png", name: "Next.js" },
          { src: "/images/Nodejs-icon.png", name: "Node.js" },
          { src: "/images/express-icon.png", name: "Express" },
          { src: "/images/mongodb-icon.png", name: "MongoDB" },
]


    const  visibleImages = images.slice(currentIndex, currentIndex + 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  };


   const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= images.length ? 0 : prev + 1
    );
  };


  return (
    <>
         <section> 
          <div className="md:flex md:justify-around bg-transparent items-center pt-10">
                       <h1 className="text-[3rem] text-white font-semibold text-balance ">Our Advanced<br/> Tech Services</h1>
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
        <div className="relative w-full min-h-screen bg-blac flex  items-center justify-center overflow-hidden">
      
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
             
             
 <section className="bg-[#C28D01] h-[20vh]  p-10 flex items-center overflow-hidden">
      <motion.div
        className="flex items-center gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {Techlogo.map((tech, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Image
              src={tech.src}
              alt={tech.name}
              width={80}
              height={80}
              className="object-contain"
            />
            <span className="font-semibold text-xl">{tech.name}</span>
          </div>
        ))}

        {Techlogo.map((tech, i) => (
          <div key={`dup-${i}`} className="flex items-center space-x-3">
            <Image
              src={tech.src}
              alt={tech.name}
              width={80}
              height={80}
              className="object-contain"
            />
            <span className="font-semibold text-xl">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>

             </section>
    </>
  )
}
