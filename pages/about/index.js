import React, { useState } from 'react';

// icons

//  about data
export const aboutData = [
  {
    title: 'условия',
    info: [
      {
        title: 'Ставка вознаграждения утверждена решением единственного участника №9 от 03 сентября 2024 года.',
        icons: [
        ],
      },
      {
        title: 'от 200 тыс.тенге до 29,5 млн. тенге.',
        icons: [],
      },
      {
        title: '3,15% в месяц. Годовая ставка не превышает 37,8%.',
        icons: [],
      },
      {
        title: 'без скрытых комиссии и платежей.',
        icons: [],
      },
      {
        title: 'рассмотрение с любой кредитной историей.',
        icons: [],
      },
    ],
  },
  {
    title: 'Требования',
    info: [
      {
        title: 'Удостоверение личности и тех.паспорт.',
        stage: '',
      },
      {
        title: 'Технически исправлен. Любой год выпуска. Без юридических проблем. На учёте в любом регионе Республики Казахстан.',
        stage: '',
      },
      {
        title: 'Вы - законный владец автомобиля или имеете нотариально заверенную доверенность на право им распоряжаться и Вам 18 лет.',
        stage: '',
      },
    ],
  },
  {
    title: 'реквизиты',
    info: [
      {
        title: '',
        stage: 'Республика Казахстан, A10X2H7, г.Алматы, Ауэзовский район, ул. Толе би 302, 39. ТОО Ломбард Прогресс.',
      },
      {
        title: '',
        stage: 'KZ748562203134585173',
      },
      {
        title: '',
        stage: 'АО Банк ЦентрКредит, КБе: 15,',
      },
      {
        title: '',
        stage: '110640022708',
      },
      {
        title: '',
        stage: 'KCJBKZKX',
      },
      {
        title: '',
        stage: 'KZT',
      },
    ],
  },
];

// components

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Мы <span className='text-[#13d648]'>готовы</span> обсудить
            ваши вопросы.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Следуйте инструкциям.
            Все получится легко.
            Постоянным клиентам и партнерам 
            мы предусматриваем преимущества - 
            в оформлении и сопровождении кредита. 
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-2xl font-extrabold text-[#13d648] mb-2'>
                  <CountUp start={0} end={14} duration={5} /> лет
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  на рынке
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-2xl font-extrabold text-[#13d648] mb-2'>
                  <CountUp start={0} end={2500} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  клиентов
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-2xl font-extrabold text-[#13d648] mb-2'>
                  <CountUp start={0} end={200} duration={5} /> тыс.
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  тенге мин.сумма
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-2xl font-extrabold text-[#13d648] mb-2'>
                  <CountUp start={0} end={29} duration={5} /> млн.
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  тенге макс.сумма
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[370px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-[#13d648] after:w-[100%] after:bg-[]#13d648 after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'></div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
