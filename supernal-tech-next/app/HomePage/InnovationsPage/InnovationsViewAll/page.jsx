
import React from 'react'

export default function page() {
  return (
    <>

             <title>Blog</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />
      
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
              <h1 className="text-6xl font-bold">Blog</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <p className="text-[1.5rem] text-center">
                Explore insightful articles, expert tips, and the latest industry trends on tech, designed to inform and inspire our readers.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section> 

      
        <section className="min-h-screen bg-white p-10">
          <div className="flex flex-wrap justify-center">
            <div className="">
              <div className=" md:gap-10 md:justify-center md:items-center ">
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
                    src="/images/cloud-computing.png"
                    alt="Girl Hand"
                    width={500}
                    height={400}
                    className=" mt-3 rounded-3xl w-[700px] h-[300px] object-cover"
                  />
                </motion.div>

                <div>
                  <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem] mt-5 rounded-full text-[1rem]  items-center gap-2 text-white">
                    News
                  </button>

                  <h1 className="text-[2.5rem] hover:text-[#C28D01] font-semibold  mt-5 max-w-4xl  text-cente md:text-balance">
                    The Evolution of Cloud Computing: Trends and Innovations in
                    2024
                  </h1>
                  <p className="text-[1rem] leading-[3] font-light">
                    You might have heard about our office in LA (or not, which
                    is okay too, but not really, so read about it).
                  </p>
                  <h3 className="text-[1.125rem]  hover:text-[#C28D01] font-semibold">
                    Look more
                  </h3>
                </div>
              </div>
              <div className="md:w-[45rem] w-[4.15rem] my-[2rem] border  border-[#919191] "></div>

              <div className=" md:gap-10 md:justify-center pt-10 md:items-center ">
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
                    width={300}
                    height={200}
                    className=" mt-3 rounded-3xl w-[700px] h-[300px] object-cover"
                  />
                </motion.div>

                <div>
                  <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem] mt-5 rounded-full text-[1rem]  items-center gap-2 text-white">
                    News
                  </button>

                  <h1 className="text-[2.5rem] hover:text-[#C28D01] font-semibold  mt-5 max-w-4xl  text-cente md:text-balance">
                    Augmented Reality un Retail: Enhancing Customer Experiences
                    and Sales
                  </h1>
                  <p className="text-[1rem] leading-[3] font-light max-w-2xl ">
                    Discover how augmented reality is reshaping the retail
                    industry, from virtual try-ons to interactive shopping
                    experiences.
                  </p>
                  <h3 className="text-[1.125rem]  hover:text-[#C28D01] font-semibold">
                    Look more
                  </h3>
                </div>
              </div>
              <div className="md:w-[45rem] w-[4.15rem] my-[2rem] border  border-[#919191] "></div>

              <div className=" md:gap-10 md:justify-center md:items-center ">
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
                    src="/images/revolution-picture.jpg"
                    alt="Girl Hand"
                    width={500}
                    height={400}
                    className=" mt-3 rounded-3xl w-[700px] h-[300px] object-cover"
                  />
                </motion.div>

                <div>
                  <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem] mt-5 rounded-full text-[1rem]  items-center gap-2 text-white">
                    Artificial Intelligence
                  </button>

                  <h1 className="text-[2.5rem] hover:text-[#C28D01] font-semibold  mt-5 max-w-4xl  text-cente md:text-balance">
                    Embracing the Future How AI is Revolutionizing Everyday
                    Technology
                  </h1>
                  <p className="text-[1rem] leading-[3] font-light">
                    But the team has been super welcoming and I couldn’t be
                    happier with my decision to join.
                  </p>
                  <h3 className="text-[1.125rem]  hover:text-[#C28D01] font-semibold">
                    Look more
                  </h3>
                </div>
              </div>
              <div className="md:w-[45rem] w-[4.15rem] my-[2rem] border  border-[#919191] "></div>

              <div className=" md:gap-10 md:justify-center pt-10 md:items-center ">
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
                    src="/images/5g-picture.jpg"
                    alt="5g Picture"
                    width={100}
                    height={20}
                    className=" mt-3 rounded-3xl w-[700px] h-[300px] object-cover"
                  />
                </motion.div>

                <div>
                  <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem] mt-5 rounded-full text-[1rem]  items-center gap-2 text-white">
                    Artificial Intelligence
                  </button>

                  <h1 className="text-[2.5rem] text-black hover:text-[#C28D01] font-semibold  mt-5 max-w-4xl  text-cente md:text-balance">
                    Embracing the Future How AI is Revolutionizing Everyday
                    Technology
                  </h1>
                  <p className="text-[1rem] leading-[3] font-light">
                    But the team has been super welcoming and I couldn’t be
                    happier with my decision to join.
                  </p>
                  <h3 className="text-[1.125rem]  hover:text-[#C28D01] font-semibold">
                    Look more
                  </h3>
                </div>
              </div>
              <div className="md:w-[45rem] w-[4.15rem] my-[2rem] border  border-[#919191] "></div>

              <div className=" md:gap-10 md:justify-center pt-10 md:items-center ">
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
                    alt="Girl Hand"
                    width={100}
                    height={20}
                    className=" mt-3 rounded-3xl w-[700px] h-[300px] object-cover"
                  />
                </motion.div>

                <div>
                  <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem] mt-5 rounded-full text-[1rem]  items-center gap-2 text-white">
                    Artificial Intelligence
                  </button>

                  <h1 className="text-[2.5rem] text-black hover:text-[#C28D01] font-semibold  mt-5 max-w-4xl  text-cente md:text-balance">
                    Blockchain Beyond Cryptocurrency: Applications and
                    Innovations
                  </h1>
                  <p className="text-[1rem] leading-[3] font-light max-w-2xl ">
                    Learn about the diverse applications of blockchain
                    technology beyond cryptocurrencies, including supply chain
                    management and smart contracts.
                  </p>
                  <h3 className="text-[1.125rem]  hover:text-[#C28D01] font-semibold">
                    Look more
                  </h3>
                </div>
              </div>
              <div className="md:w-[45rem] w-[4.15rem] my-[2rem] border  border-[#919191] "></div>
            </div>

              <div className="relative">
              <div className="h-100 w-110 rounded-xl border p-10 mb-5 sticky top-0 left-0  bottom-0 md:w-[450px] bg-white shadow-lg">

              <h1 className="text-black font-semibold text-[2rem] ">Recent Posts</h1>
              <div className="flex">

              </div>
              <div className="flex justify-center space-x-5 p-2">
                       <motion.div
                       className=""
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
                    width={150}
                    height={100}
                    className="mt-1 rounded-xl w-[300px] h-[120px] object-cover "
                  />
                </motion.div>
                <div>
                     <h1 className="text-[1rem] hover:text-[#C28D01] font-semibold">
                    Augmented Reality in Retail: Enhancing Customer Experiences
                    and Sales
                  </h1>
                   <p>May 25, 2022</p>
                   </div>
              </div>
              <div className="flex justify-center p-2 gap-5">
                       <motion.div
                       className=""
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
                    width={150}
                    height={100}
                    className=" mt-1 rounded-xl w-[300px] h-[120px] object-cover "
                  />
                </motion.div>

                <div>       
                     <h1 className="text-[1rem] hover:text-[#C28D01] font-semibold  max-w-  text-cente md:text-balanc">
                    Augmented Reality in Retail: Enhancing Customer Experiences
                    and Sales
                  </h1>
                   <p>April 1, 2022</p>
                   </div>
              </div>

              <div className="mt-10">
            <h2 className="text-black font-semibold text-[2.5rem]">Categories</h2>
            <div className="flex flex-wrap  w-[370px] mx-auto space-x-3">
              <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem] mt-5 rounded-full text-[1rem]  items-center text-white">
                    Fintech
                  </button> 
              <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem] mt-5 rounded-full text-[1rem]  items-center text-white">
                    News
                  </button> 
              <button className="bg-[#C28D01] hover:text-black flex justify-center  border border-[#C28D01]  px-[1rem] py-[0.2rem] mt-5 rounded-full text-[1rem]  items-center text-white">
                    Artificial Intelligence
                  </button> 
            </div>

              </div>
              </div>
            </div>  


           
          </div>
        </section>

         <Footer />
    </>
  )
}
