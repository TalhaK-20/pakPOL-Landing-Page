import { Person } from "react-bootstrap-icons";
import codeSnippet from "../../assets/code-snippet.svg";
import myImage from '../../assets/logo.png'
import { motion, useInView } from "framer-motion"
import NavTitle from "../animated/NavTitle";
import { useRef } from "react";

export const AboutMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="xl:h-full lg:h-full exactly-1024:h-fit pt-9 xl:mt-16 exactly-1024:mt-24 mb-16 flex flex-col relative z-0" id="about-me-section">
      <NavTitle>
        <div className="border-1 border-fourth-color  items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm   md:w-md lg:w-lg xl:w-xl exactly-1024:w-sm flex justify-between">
          <Person size={19} />
          ABOUT US
        </div>
      </NavTitle>
      <div ref={ref} className="lg:w-[84%] md:h-[40rem] sm:h-[30rem] flex lg:justify-center md:justify-center sm:justify-start relative items-start md:mb-8 sm:mb-4">
        <div className="about-blobs sm:left-24 md:left-56 lg:left-80"></div>
        <div className="relative w-[78%] h-full grid grid-cols-2 gap-10 lg:left-36">
          <motion.div
            initial={{ left: '-8rem' }}
            animate={{ left: isInView ? '1rem' : '-8rem' }}
            transition={{ duration: 1 }}
            className="absolute lg:w-[49%] md:w-[59%] sm:w-[86%] lg:h-[73%] bottom-32 font-second-font text-[black] card bg-[#fff] p-6 rounded-3xl -rotate-6 z-10 ">
            <div className="flex">
              <h1 className="text-[red] font-bold md:text-lg">pakPOL</h1>
              <img
                className="inline-block h-20 w-20 rounded-full ring-2 ring-white- absolute -right-8 rotate-6 z-10"
                src={myImage}
                alt=""
              />
            </div>
            <h2 className="font-bold md:text-base sm:text-sm">Manages Crime,</h2>
            <h2 className="font-bold md:text-base sm:text-sm">So You Don't Have To</h2>
            <div className="mt-6 mb-8 text-[#727171] md:text-lg sm:text-base sm:line-clamp-6 md:line-clamp-none">
            pakPOL falls within the domain of law enforcement technology. It is a digital platform to manage prisoner records, tracking, and monitoring. It aims to revolutionize the way criminal records and related information are managed and organized by leveraging advanced software solutions
            </div>
            <a
              href="mailto:pakpol.pakistan@gmail.com" target="_blank" rel="noreferrer"
              className="z-40 relative text-[#727171] underline md:text-base sm:text-sm"
            >
              pakpol.pakistan@gmail.com
            </a>
          </motion.div>
          <motion.div
            transition={{ duration: 1 }}
            className={`absolute lg:w-[45%] lg:h-[73%] md:h-[69%] sm:h-[70%] bottom-16 ${isInView ? 'lg:right-44 md:right-[36px] sm:-right-8' : 'right-44'}  md:top-24 sm:top-12 bg-[#0b0b0e]  p-6 rounded-3xl lg:rotate-12 sm:rotate-6  code-snippet`}>
            <img src={codeSnippet} alt="code snippet" width={250} height={200} className="sm:w-[170px] md:w-[250px]" />
          </motion.div>
        </div>
      </div>
      <motion.a
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 32 }}
        transition={{ duration: 1 }}
        href="https://pakpol.onrender.com/criminal" target="_blank" className="max-w-fit font-second-font self-center" rel="noreferrer">
        <button className="relative group p-3 px-12 bg-main-color transition-colors duration-300 rounded-full border-2 border-main-color">
          <div className="absolute top-3.5 left-3 h-5 w-5 bg-bg-color rounded-full group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:left-0 transition-all duration-300 z-10"></div>
          <span className="z-20 relative text-bg-color group-hover:text-main-color font-bold"><a href="https://pakpol.onrender.com/criminal">View Criminals</a></span>
        </button>
      </motion.a>
    </section>
  );
};
