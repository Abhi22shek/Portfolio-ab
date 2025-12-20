import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animation';

import type { ToolsType } from '@/types';

const ToolsCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <motion.div
      variants={fadeUp}
      className='border border-border bg-card rounded-md flex justify-center
    items-center flex-col py-4 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden group'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      <motion.img
        src={tool.imgSrc}
        alt={tool.label}
        className='size-12 relative z-10'
        transition={{ duration: 0.6 }}
      />
      <p className='font-bold mt-2 relative z-10'>{tool.label}</p>
    </motion.div>
  );
};

export default ToolsCard