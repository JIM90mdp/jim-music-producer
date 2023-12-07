import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute top-0 left-9 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
          <Details
            position='Sound Designer '
            company='Freelance'
            companyLink='https://www.linkedin.com/company/h2h-agrifood/'
            time='2021 – Present'
            address='Buenos Aires'
            work=" •	Specialized in: Ambient Sound Design, Foley Effects.
            •	Experience in field recording and sound synthesis.
            •	Additional skills in Audio Restoration and Noise Reduction.
            •	Participated in international sound design conferences and workshops.
            "
          />
          <Details
            position='WordPress'
            company='Freelance'
            companyLink='https://www.linkedin.com/in/marian-damiani/'
            time='2023-Present'
            address='Mar del Plata, Buenos Aires'
            work='Collaborated with a web designer to implement and customize website templates using WordPress, ensuring seamless functionality and a user-friendly design. Conducted site maintenance and updates to optimize performance and enhance user experience.'
          />
          <Details
            position='HTML and CSS Markup'
            company='Freelance'
            companyLink='https://www.linkedin.com/in/marian-damiani/'
            time='2023-Present'
            address='Mar del Plata, Buenos Aires'
            work='Collaborated as a freelancer to transform web designer-provided templates into Single Page Applications, as well as creating Admin & Dashboard interfaces. Employed HTML and CSS skills to ensure responsive and visually appealing web designs.'
          />
         
        </ul>
      </div>
    </div>
  );
};
export default Experience;