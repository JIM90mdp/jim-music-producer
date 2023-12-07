import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          Musician
        </motion.div>

        <Skill name='Ableton Live' x='-25vw' y='2vw' />
        <Skill name='Sibelius' x='-5vw' y='-10vw' />
        <Skill name='Finale' x='20vw' y='6vw' />
        <Skill name='Pro Tools' x='0vw' y='12vw' />
        <Skill name='Reaper' x='-20vw' y='-15vw' />
        <Skill name='Adobe Audition' x='15vw' y='-12vw' />
        <Skill name='Active learning' x='28vw' y='-5vw' />
        <Skill name='Teamwork' x='0vw' y='-20vw' />
        <Skill name='Performance' x='-15vw' y='-3vw' />
        <Skill name='Improvisation' x='-10vw' y='18vw' />
        <Skill name='Musical Theory' x='15vw' y='15vw' />
        <Skill name='Arrangements' x='-18vw' y='10vw' />
        <Skill name='Instrumentation' x='10vw' y='-5vw' />
        <Skill name='Recording' x='-12vw' y='-9vw' />
        <Skill name='Compositon' x='-9vw' y='3vw' />
        <Skill name='Sound Design' x='12vw' y='0vw' />
        <Skill name='Problem-solving' x='5vw' y='-15vw' />
        <Skill name='Adaptability' x='25vw' y='1vw' />
        <Skill name='Teaching' x='9vw' y='9vw' />
      </div>
    </>
  );
};

export default Skills;


// import { motion } from 'framer-motion';

// const Skill = ({ name, x, y }) => {
//   return (
//     <motion.div
//       className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
//       whileHover={{ scale: 1.05 }}
//       initial={{ x: 0, y: 0 }}
//       whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} 
//       viewport={{ once: true }}
//     >
//       {name}
//     </motion.div>
//   );
// };

// const Skills = () => {
//   return (
//     <>
//       <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
//       <div className='w-full h-screen relative flex items-center justify-center lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] '>
  
//         <Skill name='HTML' x='-31vw' y='0vw' />
//         <Skill name='CSS' x='-26vw' y='0vw' />
//         <Skill name='JavaScript' x='-19vw' y='0vw' />
//         <Skill name='ReactJS' x='-12vw' y='0vw' />
//         <Skill name='NextJS' x='-6vw' y='0vw' />
//         <Skill name='Python' x='0vw' y='0vw' />
//         <Skill name='Web Design' x='8vw' y='0vw' />
//         <Skill name='Figma' x='16vw' y='0vw' />
//         <Skill name='Django' x='22vw' y='0vw' />
//         <Skill name='Tailwind CSS' x='30vw' y='0vw' />
//       </div>
//     </>
//   );
// };

// export default Skills;
