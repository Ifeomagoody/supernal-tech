
import React from 'react'
import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";


export default function page() {
  return (
    <>
        <section className="min-h-screen p-10">
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
            <h1 className="text-white text-[3rem]">Let's Work With You</h1>
                </div>
                  
                    <button className="text-white bg-black flex mt-10 justify-center  border border-[#C28D01] hover:bg-[#C28D01] hover:text-white px-[2rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2">
                Book a Call
                <Image
                  src="/arrow-up-solid-full.svg"
                  alt="navigation"
                  width={15}
                  height={15}
                  className="rotate-45 text-black transition-all duration-300"
                />
              </button>
              <div className="md:w-[88rem] w-[4.15rem] my-[2rem] border border-[#919191] mx-auto"></div>
               </div>

               <div className="flex flex-wrap p-10 justify-between">
           
                        <motion.div
initial={{ opacity: 0, x: -100}}
animate={{ opacity: 1, x: 0}}
transition={{ duration: 4, ease: 'easeInOut' }}

>

               <div className="Newsletter space-y-3">
                     <h3 className="text-[2rem] text-white">Newsletter</h3>
                     <p className="text-white">Sign up for the Tech Hub weekly<br/> newsletter to get the latest updates.</p>
                 
<div className="relative mt-15 flex flex-wrap justify-between items-center">
  <div className="flex justify-between gap-5 items-center">
             <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
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
initial={{ opacity: 0, x: -100}}
animate={{ opacity: 1, x: 0}}
transition={{ duration: 3, ease: 'easeInOut' }}
 className="space-y-3" 
>
   <h2 className="text-[1.3rem] text-white font-semibold">Services</h2>
                <p className="text-white">About Us</p>
                <p className="text-white">Why Choose Us</p>
                <p className="text-white">Testimonials</p>
                <p className="text-white">Pricing</p>
              
                </motion.div>
               </div>

               <div className="Services">
                                    <motion.div
initial={{ opacity: 0, x: -100}}
animate={{ opacity: 1, x: 0}}
transition={{ duration: 2, ease: 'easeInOut' }}
 className="space-y-3" 
>


                  <h2 className="text-[1.3rem] text-white font-semibold">Information</h2>
                <p className="text-white">Cyber Security</p>
                <p className="text-white">App Development</p>
                <p className="text-white">IT Consultancy</p>
                <p className="text-white">Cloud Migration</p>

</motion.div>
               </div>

               <div className="Useful Links">
                                    <motion.div
initial={{ opacity: 0, x: -100}}
animate={{ opacity: 1, x: 0}}
transition={{ duration: 1, ease: 'easeInOut' }}
 className="space-y-3" 
>
 <h2 className="text-[1.3rem] text-white font-semibold">Useful Links</h2>
                <p className="text-white">Case Studies</p>
                <p className="text-white">Careers</p>
                <p className="text-white">Blog</p>
                <p className="text-white">FAQ</p>
</motion.div>
               </div>
               </div>


<div className="flex flex-wrap justify-between p-20 items-center">
<h3 className="text-white">© Tech Hub. All Rights Reserved .Licensing Template by wCopilot Powered by <span className="hover:text-[#C28D01]">Ifeoma</span></h3>

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
  )
}
