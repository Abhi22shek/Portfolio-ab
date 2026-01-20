import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animation';

import type { ProjectType } from '@/types';
import { GithubIcon, Globe } from 'lucide-react';



const ProjectCard = ({ imgSrc, projectLink, tags, title, githubLink, description }: ProjectType) => {

  return (
    <>
      <div className='relative group block h-full'>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className='block'
            aria-label={`View ${title} project`}
          >
            <figure className='overflow-hidden  rounded-md relative shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500'>
              {/* Project Image */}
              <img
                src={imgSrc}
                alt={title}
                loading='lazy'
                className='rounded-md object-cover transition duration-700 group-hover:scale-110 w-full h-full object-cover aspect-video'
              />

              <div className='absolute  inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent  opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex justify-end items-end  p-4  z-10'>
                <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.25 }}>
                  <p className='text-sm text-white   max-w-lg'>{description}</p>
                </motion.div>
              </div>
            </figure>
          </motion.div>

          <div className='mt-3'>
            <h3 className='text-lg font-semibold group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300'>
              {title}
            </h3>
            <div className='flex items-center flex-wrap gap-2 mt-2'>
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className='bg-card border border-border text-foreground py-1 px-3 rounded-full text-xs hover:border-primary transition-colors duration-300'
                >
                  {tag} 
                </motion.span>
              ))}
              
              {githubLink && githubLink !== '' && (
                <motion.a
                  href={githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1 }}
                  className='bg-card border border-border text-foreground py-1 px-2 rounded-full text-xs hover:border-primary transition-colors duration-300'
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon className='size-4' />
                </motion.a>
              )}
              
              {projectLink && projectLink !== '' && (
                <motion.a
                  href={projectLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1 }}
                  className='bg-card border border-border text-foreground py-1 px-2 rounded-full text-xs hover:border-primary transition-colors duration-300'
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe className='size-4' />
                </motion.a>
              )}
              
            </div>
          </div>
      </div>

    </>
  );
};

export default ProjectCard;
