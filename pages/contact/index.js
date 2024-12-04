"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: '+7 (775) 007 3395',
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "progressautolombard@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Республика Казахстан, A10X2H7, г.Алматы, Ауэзовский район, ул. Толе би 302, офис 39. ТОО Ломбард Прогресс.",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-40 gap-0"
    >
      <div className="container mx-auto gap-0">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-none rounded-xl">
              <h3 className="text-4xl text-[]#13d648">Наши контакты</h3>
              <p className="text-white/60">
              
              </p>
              {/* input */}
            
              {/* select */}
           
              {/* textarea */}
              {/* btn */}
            </form>
          </div>
          {/* info */}
          <div className="flex-9 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-white/5 text-[#13d648] rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
