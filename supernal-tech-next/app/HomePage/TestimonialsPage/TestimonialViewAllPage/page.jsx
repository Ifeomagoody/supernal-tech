import React from "react";
import Footer from "./page";

export default function page() {
  const testimonials = [
    {
      id: 1,
      text: `"Partnering with Tech Hub has been a game-changer for us. Their real-time data tracking and performance dashboards have provided us with unparalleled insights into our software performance."`,
      name: "Emily S.",
      role: "CEO of NextGen Solutions",
      image: "/images/blonde-hair-color.webp",
    },
    {
      id: 2,
      text: `"Working with Tech Hub streamlined our development process. Their automation tools saved us countless hours every week!"`,
      name: "Rebecca",
      role: "CTO of NextGen Solutions",
      image: "/images/checkers-shirt.webp",
    },
    {
      id: 3,
      text: `"Tech Hub helped us scale our infrastructure seamlessly. Their support team is always reliable and proactive."`,
      name: "Rachel",
      role: "CEO of Supernal",
      image: "/images/blonde-hair-color.webp",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const active = testimonials[current];

  return (
    <>
      <title>Testimonials</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />

      <section className="flex flex-wrap justify-around items-center bg-[url('/images/table-bg.svg')] bg-cover bg-center bg-no-repeat w-full min-h-scree">
        <div className=" flex flex-col space-y-4 w-[60vw] h-[50vh] rounded-3xl m-10 flex-wrap space-x-20  justify-center items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <h1 className="text-7xl font-bold  leading-[1.1] max-w-2xl md:text-balance text-center">
              Reviews of Our Services
            </h1>
          </motion.div>
        </div>
      </section>

      <section className=" min-h-screen p-10 w-full">
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-wrap justify-center items-center  p-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="md:w-[35rem] md:h-[25rem] w-[25rem] h-[20rem] rounded-2xl p-5  space-y-2 shadow-md bg-white">
                <div className="flex space-x-5">
                  <Image
                    src="/images/quote-left-solid-full.svg"
                    alt="Quotes"
                    width={50}
                    height={50}
                    className="w-15 h-15 rounded-full"
                  />
                </div>

                <h1 className="md:text-[1.5rem] text-[1rem] font-semibold  text-center">
                  "Partnering with Tech Hub has been a<br /> game-changer for
                  us. Their real-time
                  <br /> data tracking and performance
                  <br /> dashboards have provided us with
                  <br /> unparalleled insights into our software
                  <br /> performance. "
                </h1>

                <div className="flex space-x-5 m">
                  <Image
                    src="/images/testimonial-man.webp"
                    alt="Testifier Man"
                    width={50}
                    height={50}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h2 className="font-semibold mt-3">John D.</h2>
                    <p className="text-[1rem] font-light ">
                      CTO of TechInnovate
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center items-center  p-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="md:w-[35rem] md:h-[25rem] w-[25rem] h-[20rem] rounded-2xl p-5  space-y-2 shadow-md bg-white">
                <div className="flex space-x-5">
                  <Image
                    src="/images/quote-left-solid-full.svg"
                    alt="Quotes"
                    width={50}
                    height={50}
                    className="w-15 h-15 rounded-full"
                  />
                </div>

                <h1 className="md:text-[1.5rem] text-[1rem] font-semibold  text-center">
                  "We can now anticipate market shifts and drive innovation with
                  confidence. Their benchmarking and goal tracking services
                  ensure we stay ahead of the competition and meet our digital
                  transformation goals."
                </h1>

                <div className="flex space-x-5 mt-5">
                  <Image
                    src="/images/blonde-hair-color.webp"
                    alt="Testifier Man"
                    width={50}
                    height={50}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h2 className="font-semibold mt-3">Emily S..</h2>
                    <p className="text-[1rem] font-light ">
                      CEO of NextGen Solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center items-center  p-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="md:w-[35rem] md:h-[25rem] w-[25rem] h-[20rem] rounded-2xl p-5  space-y-2 shadow-md bg-white">
                <div className="flex space-x-5">
                  <Image
                    src="/images/quote-left-solid-full.svg"
                    alt="Quotes"
                    width={50}
                    height={50}
                    className="w-15 h-15 rounded-full"
                  />
                </div>

                <h1 className="md:text-[1.5rem] text-[1rem] font-semibold  text-center">
                  "The data visualization and customer insights services offered
                  by Tech Hub are simply outstanding. Their interactive tools
                  have made interpreting complex tech data"
                </h1>

                <div className="flex space-x-5 mt-7">
                  <Image
                    src="/images/ah-smiling-man.webp"
                    alt="Testifier Man"
                    width={50}
                    height={50}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h2 className="font-semibold mt-3">Emily S..</h2>
                    <p className="text-[1rem] font-light ">
                      CEO of NextGen Solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center items-center  p-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="md:w-[35rem] md:h-[25rem] w-[25rem] h-[20rem] rounded-2xl p-5  space-y-2 shadow-md bg-white">
                <div className="flex space-x-5">
                  <Image
                    src="/images/quote-left-solid-full.svg"
                    alt="Quotes"
                    width={50}
                    height={50}
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <h1 className="md:text-[1.5rem] text-[1rem] font-semibold  text-center">
                  "The data visualization and customer insights services offered
                  by Tech Hub are simply outstanding. Their interactive tools
                  have made interpreting complex tech data not only manageable
                  but also insightful and actionable."
                </h1>
                <div className="flex space-x-5">
                  <Image
                    src="/images/checkers-shirt.webp"
                    alt="Checkers Shirt"
                    width={50}
                    height={50}
                    className="w-20 h-20 rounded-full "
                  />
                  <div>
                    <h2 className="font-semibold mt-3 ">Emily S..</h2>
                    <p className="text-[1rem] font-light ">
                      CEO of NextGen Solutions
                    </p>
                  </div>
                </div>
                Hello
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white  min-h-screen flex flex-wrap justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.5, 0.71, 0.2, 1.01],
          }}
        >
          <div className="w-[80vw] h-[50vh] rounded-3xl m-10  space-x-20 bg-black  text-white">
            <div className="flex flex-col space-y-10 justify-center p-8 items-center">
              <div>
                <Image
                  src="/images/quotes-img.svg"
                  alt="Quote with background"
                  width={50}
                  height={50}
                />
              </div>

              <h2 className="text-[2rem] text-center">
                "It is really refreshing to create the best solutions for
                clients who are truly interested in their client’s needs and
                preferences.
              </h2>

              <div className="flex space-x-5 m">
                <Image
                  src="/images/girl-in-pink-top.webp"
                  alt="Testifier Man"
                  width={50}
                  height={50}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h2 className="font-semibold mt">Jessica Robinson</h2>
                  <p className="text-[1rem] font-light ">CEO, Apple</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap border p-15">
            <div>
              <h3 className="text-[2rem] font-semibold max-w-sm space-y-5 text-balance">
                What People Say About Us
              </h3>
              <div>
                <Image
                  src="/images/ninety-nine.svg"
                  alt="Ninety-nine"
                  width={150}
                  height={150}
                  className=" mt-5"
                />
              </div>
            </div>

            <div className="flex flex-wrap  items-center  p-">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div>
                  <h1 className="md:text-[2rem] text-[1rem] leading-[1.1] font-semibold  text-balance max-w-4xl">
                    {active.text}
                  </h1>

                  <div className="flex justify-between pt-5 items-center">
                    <div className="flex space-x-5">
                      <Image
                        src={active.image}
                        alt={active.name}
                        width={50}
                        height={50}
                        className="w-20 h-20 rounded-full"
                      />

                      <div>
                        <h2 className="font-semibold mt-3">{active.name}</h2>
                        <p className="text-[1rem] font-light ">{active.role}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex  items-center space-x-4 ">
                        <Image
                          src="/images/chevron-left-solid-full.svg"
                          alt="Next"
                          width={20}
                          height={20}
                          onClick={handlePrev}
                        />

                        <span className="text-lg font-semibold text-gray-700">
                          {current + 1} / {testimonialsViewAllPage.length}
                        </span>

                        <Image
                          src="/images/chevron-right-solid-full.svg"
                          alt="Previous Next"
                          width={20}
                          height={20}
                          onClick={handleNext}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
