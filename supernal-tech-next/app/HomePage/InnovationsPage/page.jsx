
import React from 'react'
import * as motion from "motion/react-client";
import Image from "next/image";


export default function page() {
  return (
    <>
      <section className="bg-white min-h-screen w-full">
       <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          >
      
      
         
        <div className="md:flex md:justify-around items-center pt-10">
              <h1 className="text-[3rem] font-semibold">Insights &<br/> Innovations</h1>
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
      
        <div className="md:flex md:gap-10 md:justify-center md:items-center p-10">
           <motion.div
                    
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1], 
                    }}
                  >
      
            <Image
              src="/images/girl-hand-phone.png"
              alt="Girl Hand"
              width={450}
              height={500}
              className="rounded-xl object-fill"
            />
           </motion.div>
      
            <div>
      
      
                <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem]  rounded-full text-[1rem]  items-center gap-2 text-white">
                      News</button>
      
                      <h1 className="text-[2rem] hover:text-[#C28D01] font-semibold">Augmented Reality in Retail:<br/> Enhancing Customer<br/> Experiences and Sales</h1>
                      <p className="text-[1rem]  font-light">Discover how augmented reality is reshaping the retail industry, from virtual<br/> try-ons to interactive shopping experiences.</p>
                      <h3 className="text-[1.125rem] hover:text-[#C28D01] font-semibold">Look more</h3>
            </div>
      
        </div>
                    <div className="md:w-[68rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
      
        <div className="md:flex md:gap-10 md:justify-center md:items-center p-10">
           <motion.div
                    
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1], 
                    }}
                  >
      
            <Image
              src="/images/crypto-image.png"
              alt="Crypto"
              width={450}
              height={500}
              className="rounded-xl object-fill"
            />
           </motion.div>
      
            <div>
      
      
                <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem]  rounded-full text-[1rem]  items-center gap-2 text-white">
                      Artificial Intelligence</button>
      
                      <h1 className="text-[2rem] hover:text-[#C28D01] font-semibold">Blockchain Beyond<br/> Cryptocurrency: Applications<br/> and Innovations</h1>
                      <p className="text-[1rem]  font-light">Learn about the diverse applications of blockchain technology beyond<br/> cryptocurrencies, including supply chain management and smart contracts.</p>
                      <h3 className="text-[1.125rem] hover:text-[#C28D01] font-semibold">Look more</h3>
            </div>
      
        </div>
                    <div className="md:w-[68rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
         </motion.div>
      </section>
    </>
  )
}
