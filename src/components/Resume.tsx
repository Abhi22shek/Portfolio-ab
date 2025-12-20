import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animation';

import SectionHeader from './SectionHeader';
import ExpCard from './ExpCard';
import ToolsCard from './ToolsCard';

import { education, experience, tools } from '@/constants';

const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        title='Education and practical experience'
        subtitle='resume'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-muted-foreground'
      >
        I’m a Computer Science graduate with a strong interest in full-stack web
        development. During my studies, I built several small projects and
        gained hands-on experience with the MERN Stack — focusing on React,
        Node.js, and MongoDB. I continue to practice and improve my skills
        through personal projects and online learning.
      </motion.p>

      <div className=" grid gap-x-10 my-16 md:grid-cols-2">
        <motion.div variants={fadeUp}
        className='mb-16 md:mb-0'>
            <h2 className='text-3xl font-semibold mb-8'>Education</h2>
            <div className='space-y-8 border-l border-border pl-6'>
                {education.map((item,i)=>(
                    <ExpCard key={i} item={item}/>
                ))}
            </div>
        </motion.div> 

        <motion.div variants={fadeUp}>
            <h2 className='text-3xl font-semibold mb-8'>Work Experince</h2>
            <div className='space-y-8 border-l border-border pl-6'>
                {experience.map((item,i)=>(
                    <ExpCard key={i} item={item}/>
                ))}
            </div>
        </motion.div> 

      </div>

      <div className="my-16">
        <motion.h2 variants={fadeUp} className='text-3xl font-semibold mb-8 capitalize'>My favourite tools</motion.h2>
        <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.5)}
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5
            '
        >
            {tools.map((tool,i)=>(
                <ToolsCard key={i} tool={tool}/>
            ))}
        </motion.div>
    </div>
    </motion.section>
  );
};

export default Resume;
