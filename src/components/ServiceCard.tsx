import type { ServiceType } from '@/types';


import { motion } from 'motion/react';

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className='flex items-start justify-between rounded-2xl border border-border bg-card p-8
     hover:bg-accent transition-all duration-300 hover:border-primary relative shadow-sm hover:shadow-xl hover:shadow-primary/10 overflow-hidden group'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      <div className='relative z-10'>
        <h3 className='text-lg font-medium group-hover:text-primary transition-colors duration-300'>
          {service.title}
        </h3>
        <p className='text-muted-foreground mb-3'>{service.desc}</p>
        <span className='text-sm lining-nums text-muted-foreground font-medium uppercase tracking-wide'>
          {service.projects}
        </span>
      </div>
      <motion.div
        className='shrink-0'
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <service.icon className='text-primary size-6' />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
