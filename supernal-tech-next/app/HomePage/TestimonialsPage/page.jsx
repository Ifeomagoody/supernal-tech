
import React from 'react'
import Image from "next/image";
import * as motion from "motion/react-client";



export default function page() {
  return (
    <>
       <section className="bg-black min-h-screen p-10 w-full">
            
                  
                        <div className="flex flex-wrap justify-around items-center">
                                                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            >  
                          <h1 className="text-[4rem] text-white">Testimonials</h1>
                        </motion.div>
                          <div>
      
                                                      <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, x: -100 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            >  
                           <button className="bg-[#C28D01] flex  justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[2rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                      View all
                      <Image
                        src="/arrow-up-solid-full.svg"
                        alt="navigation"
                        width={15}
                        height={15}
                        className="rotate-45 transition-all duration-300"
                      />
                    </button>
                    </motion.div>
                          </div>
                        </div>
      
      
                <div className="flex flex-wrap justify-around">
                        <div className="flex justify-center items-center  p-10">
      
                                                     <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            >  
                          <div className="md:w-[35rem] md:h-[25rem] w-[25rem] h-[18rem] rounded-2xl p-10 border space-y-10 border-white">
                                 <h1 className="md:text-[1.5rem] text-[1rem] font-semibold text-white text-center">"Partnering with Tech Hub has been a<br/> game-changer for us. Their real-time<br/> data tracking and performance<br/> dashboards have provided us with<br/> unparalleled insights into our software<br/> performance. "</h1>
                          
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
                            <p className="text-[1rem] font-light text-white">CTO of TechInnovate</p>
      
                           </div>
                          </div>
                          </div>
                          </motion.div>
                        </div>
                      
      
                        
                        <div className="flex justify-center items-center p-10">
                                                      <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            >  
                          <div className="md:w-[35rem] md:h-[25rem] w-[25rem] h-[18rem] rounded-2xl p-10 border space-y-10 border-white">
                                 <h1 className="md:text-[1.5rem] text-[1rem] font-semibold text-white text-center">"Partnering with Tech Hub has been a<br/> game-changer for us. Their real-time<br/> data tracking and performance<br/> dashboards have provided us with<br/> unparalleled insights into our software<br/> performance. "</h1>
                          
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
                            <p className="text-[1rem] font-light text-white">CTO of TechInnovate</p>
      
                           </div>
                          </div>
                          </div>
                         </motion.div> 
                        </div>
      
                </div>
                </section>
    </>
  )
}
