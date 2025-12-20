import { motion } from 'motion/react';
import { useState } from 'react';
import { fadeUp } from '@/lib/animation';
import { ExternalLink, LucideGithub } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';

import type { ProjectType } from '@/types';



const ProjectCard = ({ imgSrc, projectLink, tags, title, githubLink, description, features, howItWorks, images }: ProjectType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project: ProjectType = {
    imgSrc,
    projectLink,
    tags,
    title,
    githubLink,
    description,
    features,
    howItWorks,
    images,
  };

  return (
    <>
      <div className='relative group block h-full'>
          <motion.div
            onClick={() => setIsModalOpen(true)}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className='block cursor-pointer'
            aria-label={`View ${title} project details`}
          >
            <figure className='overflow-hidden rounded-md relative shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500'>
              {/* Project Image */}
              <img
                src={imgSrc}
                alt={title}
                loading='lazy'
                className='rounded-md transition duration-700 group-hover:scale-110 w-full h-full object-cover aspect-video'
              />

              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10'>
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ExternalLink className='size-10 text-white' />
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
                  <LucideGithub className='size-4' />
                </motion.a>
              )}
            </div>
          </div>
      </div>

      <ProjectDetailModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
