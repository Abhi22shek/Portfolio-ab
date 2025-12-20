import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animation';
import { Button } from './ui/button';
import { SparkleIcon } from 'lucide-react';
import DownloadMenu from './DownloadMenu';
import ShareButton from './ShareButton';
import { getPortfolioUrl } from '@/lib/shareUtils';

const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-border rounded-sm w-32'
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold
        mt-2 max-w-3xl md:leading-tight
        '
      >
        I'm{' '}
        <span className='bg-linear-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent'>
          Abhishek Borana
        </span>
        , Full-Stack Developer
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className='mt-4 text-lg text-muted-foreground max-w-2xl'
      >
        Crafting seamless web experiences with{' '}
        <span className='text-foreground font-semibold'>MERN Stack</span> and{' '}
        <span className='text-foreground font-semibold'>Next.js</span>. Turning
        ideas into scalable, high-performance applications.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className='mt-8 flex gap-3 flex-wrap items-center'
      >
        <Button
          asChild
          className='relative overflow-hidden group'
        >
          <a href='#projects'>
            <span className='relative z-10'>My Projects</span>
            <span className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </a>
        </Button>

        <DownloadMenu />

        <ShareButton
          url={getPortfolioUrl()}
          title='Abhishek Borana | MERN & Next.js Full-Stack Developer'
          text='Check out my portfolio showcasing full-stack web development projects'
          className='border-2 border-border hover:border-primary rounded-full'
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
