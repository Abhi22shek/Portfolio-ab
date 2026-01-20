import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { staggerContainer, fadeUp } from '@/lib/animation';
import { projectsData } from '@/constants';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsCount = 4; // Show 4 projects initially
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, initialProjectsCount);
  const hasMoreProjects = projectsData.length > initialProjectsCount;

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader title='My featured projects' subtitle='projects' />

      <motion.div
        className='grid md:grid-cols-2 gap-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.6)}
      >
        <AnimatePresence mode='sync'>
          {displayedProjects.map((project, i) => (
            <ProjectCard
              key={i}
              imgSrc={project.imgSrc}
              projectLink={project.projectLink}
              tags={project.tags}
              title={project.title}
              githubLink={project.githubLink}
              description={project.description}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More / Show Less Button */}
      {hasMoreProjects && (
        <motion.div
          variants={fadeUp}
          className='flex justify-center mt-10'
        >
          <Button
            disabled={true}
            onClick={() => setShowAll(!showAll)}
            variant='outline'
            size='lg'
            className='group relative overflow-hidden'
          >
            <motion.span
              className='flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>
                  Show Less
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronUp className='size-4' />
                  </motion.div>
                </>
              ) : (
                <>
                  Show More Projects ({projectsData.length - initialProjectsCount} more)
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown className='size-4' />
                  </motion.div>
                </>
              )}
            </motion.span>
          </Button>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
