import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animation';

import SectionHeader from './SectionHeader';
import { Button } from './ui/button';

const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        title='Transforming complexity into effortless design'
        subtitle='about'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 dark:text-neutral-300 text-neutral-500'
      >
        👋 Hi, I’m Abhishek, a web developer specializing in the MERN Stack. I
        design and develop interactive, fast, and accessible web apps that make
        an impact. I love exploring new technologies, contributing to projects,
        and solving real-world problems through clean and efficient code.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 dark:text-neutral-300 text-neutral-500'
      >
        Though I’m at the beginning of my professional journey, I’ve gained
        practical experience by building multiple projects using React, Node.js,
        Express, and MongoDB. Working on these projects taught me how to design
        user interfaces, handle authentication, and deploy full-stack
        applications. I’m now confident in taking on real-world development
        challenges and contributing effectively to a team.
      </motion.p>
      <Button className='mt-5 cursor-pointer' size='lg' asChild>
        <a href="#contact">Contact Me</a>
      </Button>
    </motion.section>
  );
};

export default About;
