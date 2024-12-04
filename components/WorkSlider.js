"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Лицензия 02.21 0058.L",
    href: "https://drive.google.com/file/d/1A9PhALfMJ0OygBaEpAMbxueFaydltKjI/view?usp=drive_link",
  },
  {
    num: "02",
    title: "Правила предоставления микрокредитов",
    href: "https://drive.google.com/file/d/1b-TLEzSO3lWN0M2EY66QRWyEhbzf0Ssm/view?usp=drive_link",
  },
  {
    num: "03",
    title: "Финансовая отчетность за 2023 год",
    href: "https://drive.google.com/file/d/1zOPpua_eQXJzFo1u0P8C57V_wyfTrFoD/view?usp=drive_link",
  },
  {
    num: "04",
    title: "Финансовая отчетность за 2022 год",
    href: "",
  },
  {
    num: "05",
    title: "Микрокредиттерді беру қағидалары",
    href: "https://drive.google.com/file/d/1XeL4PfUnDRnPdSVS6u09akt1_Gan11m_/view?usp=drive_link",
  },
  {
    num: "06",
    title: "Типовая форма Залогового билета",
    href: "https://drive.google.com/file/d/16lLrGZFW9SAnal_W5LnJxGs-Qvgphaby/view?usp=drive_link",
  },
  {
    num: "07",
    title: "Политика конфиденциальности",
    href: "https://drive.google.com/file/d/1g4MFT6IUKFwsHBh15ic-bHxuJXfeY7XR/view?usp=drive_link",
  },
  {
    num: "08",
    title: "Договор присоеденения",
    href: "https://drive.google.com/file/d/16lLrGZFW9SAnal_W5LnJxGs-Qvgphaby/view?usp=drive_link",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[0vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-1 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-1xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[30px] h-[30px] rounded-full bg-white group-hover:bg-[#13d648] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[15px] font-bold leading-none text-white group-hover:text-[#13d648] transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
