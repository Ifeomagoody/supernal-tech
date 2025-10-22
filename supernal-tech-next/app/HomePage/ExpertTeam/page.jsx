
import React from 'react'
import * as motion from "motion/react-client";
import Image from "next/image";


export default function page() {
  return (
    <>
       <section className="w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
                  <div className="flex flex-wrap gap-10 bg-white justify-center">
                   <div className="">
                    
                         <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0.5, 0.71, 0.2, 1.01],
                    }}
                  >
                    
                      <h1 className=" md:text-[3rem] text-[2.5rem] font-semibold">Our Expert<br/> Team</h1>
                      <p className=" font-light md:text-[1.02rem] text-[1.2rem] ">Meet the talented and passionate individuals<br/> driving our innovation and success. Our expert<br/> team combines years of experience, deep industry<br/> knowledge, and a commitment to excellence to<br/> deliver cutting-edge solutions and insights.</p>
                     
                      <button className="text-white bg-black flex mt-10 justify-center  border border-[#C28D01] hover:bg-[#C28D01] hover:text-white px-[2rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2">
                  Get to Know Us
                      <Image
                        src="/arrow-up-solid-full.svg"
                        alt="navigation"
                        width={15}
                        height={15}
                        className="rotate-45 text-black transition-all duration-300"
                      />
                    </button>
                   
      </motion.div>
                   </div>
      
      
                 
                   <div>
                        <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1, ease: 'easeInOut' }}
      >
                    <div className="relative">
                    <Image
                      src="/images/girl-laptop.webp"
                      alt="A girl with a laptop"
                      width={80}
                      height={50}
                      className=" w-45 h-45 z-10 object-cover rounded-2xl"
                    />
                     <div className="w-35 flex items-center h-15 shadow-md bg-white absolute md:top-32 left-5 rounded-2xl">
                     <span className="px-3  font-semibold text-[0.9rem] text-center">Ifechukwu Benedict</span>
                     </div>
                    </div>
      
                    <div className="relative">
      
                    <Image
                      src="/images/man-smiling.webp"
                      alt="A girl with a laptop"
                      width={80}
                      height={50}
                      className=" w-45 h-45 object-cover rounded-2xl mt-5"
                    />
                        <div className="w-35 flex items-center h-15 shadow-md bg-white absolute md:top-30 left-5 rounded-2xl">
                     <span className="px-3  font-semibold text-[0.9rem] text-center">Ifechukwu Benedict</span>
                     </div>
                    </div>
                    </motion.div>
                   </div>
      
      
                   <div>
                                      <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 2, ease: 'easeInOut' }}
      >
                    <div className="relative">
                    <Image
                      src="/images/668bc631552245e0b1f1f6ac_667d0d3673903a7f735aa1cc_Screenshot 2024-06-27 at 10.56.39-p-500.webp"
                      alt="A girl with a laptop"
                      width={80}
                      height={50}
                      className=" w-80 h-90 z-10 object-cover rounded-4xl"
                    />
                     <div className="w-40 flex items-center h-15 shadow-md bg-white absolute md:bottom-0 right-20 rounded-2xl">
                     <span className="px-3  font-semibold text-[0.9rem]">Ifechukwu Benedict</span>
                     </div>
      
                    </div> 
                    </motion.div>           
                   </div>
      
      
                     <div>
                                                     <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 3, ease: 'easeInOut' }}
      >
                    <div className="relative">
                    <Image
                      src="/images/man_VR.webp"
                      alt="A girl with a laptop"
                      width={80}
                      height={50}
                      className=" w-45 h-45 z-10 object-cover rounded-2xl"
                    />
                     <div className="w-35 flex items-center h-15 shadow-md bg-white absolute md:top-32 left-5 rounded-2xl">
                     <span className="px-3  font-semibold text-[0.9rem] text-center">Ifechukwu Benedict</span>
                     </div>
                    </div>
      </motion.div>
                    <div className="relative">
                                      <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 3, ease: 'easeInOut' }}
      >
                    <Image
                      src="/images/pink-girl.webp"
                      alt="A girl with a laptop"
                      width={80}
                      height={50}
                      className=" w-45 h-45 object-cover rounded-2xl mt-5"
                    />
                        <div className="w-35 flex items-center h-15 shadow-md bg-white absolute md:top-30 left-5 rounded-2xl">
                     <span className="px-3  font-semibold text-[0.9rem] text-center">Ifechukwu Benedict</span>
                     </div>
                    </motion.div>
                    </div>
      
                   </div>
                   
                    
                  </div>
                </section>
    </>
  )
}
