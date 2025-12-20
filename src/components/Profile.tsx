import { motion } from 'motion/react';
import { socialLinks } from '@/constants';
import { Button } from './ui/button';
import { MapPin, Briefcase, Mail, CheckCircle2 } from 'lucide-react';

const Profile = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-3xl m-6 lg:sticky lg:left-0 lg:top-6 lg:w-96'
    >
      {/* Main Profile Card */}
      <div className='bg-card border border-border rounded-2xl overflow-hidden shadow-xl'>
        {/* Header with Pattern */}
        <div className='relative h-24 bg-primary/5 border-b border-border'>
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute inset-0' style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
          </div>
        </div>

        {/* Profile Content */}
        <div className='relative px-6 pb-6'>
          {/* Profile Image */}
          <div className='flex justify-center -mt-16 mb-4'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='relative'
            >
              <div className='w-32 h-32 rounded-2xl bg-card border-4 border-background shadow-2xl overflow-hidden'>
                <img
                  src='/avatar.png'
                  alt='Abhishek Borana'
                  className='w-full h-full object-cover'
                />
              </div>
              {/* Online Status */}
              <div className='absolute bottom-2 right-2 flex items-center gap-1 bg-background px-2 py-1 rounded-full border border-border shadow-lg'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                <span className='text-xs font-medium'>Available</span>
              </div>
            </motion.div>
          </div>

          {/* Name & Title */}
          <div className='text-center mb-6'>
            <h1 className='text-2xl font-bold mb-1'>Abhishek Borana</h1>
            <p className='text-sm text-muted-foreground font-medium'>
              MERN & Next.js Developer
            </p>
          </div>

          {/* Info Grid */}
          <div className='space-y-2 mb-6'>
            <motion.div
              whileHover={{ x: 3 }}
              className='flex items-center gap-3 p-3 rounded-xl border border-border bg-accent/30 hover:bg-accent/50 transition-colors'
            >
              <div className='p-2 rounded-lg bg-primary/10 shrink-0'>
                <Briefcase className='size-4 text-primary' />
              </div>
              <div className='min-w-0 flex-1'>
                <p className='text-xs text-muted-foreground font-medium'>Role</p>
                <p className='text-sm font-semibold truncate'>Full-Stack Developer</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              className='flex items-center gap-3 p-3 rounded-xl border border-border bg-accent/30 hover:bg-accent/50 transition-colors'
            >
              <div className='p-2 rounded-lg bg-primary/10 shrink-0'>
                <MapPin className='size-4 text-primary' />
              </div>
              <div className='min-w-0 flex-1'>
                <p className='text-xs text-muted-foreground font-medium'>Location</p>
                <p className='text-sm font-semibold truncate'>Indore, MP</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              className='flex items-center gap-3 p-3 rounded-xl border border-border bg-accent/30 hover:bg-accent/50 transition-colors'
            >
              <div className='p-2 rounded-lg bg-primary/10 shrink-0'>
                <Mail className='size-4 text-primary' />
              </div>
              <div className='min-w-0 flex-1'>
                <p className='text-xs text-muted-foreground font-medium'>Email</p>
                <a
                  href='mailto:abhishek@example.com'
                  className='text-sm font-semibold hover:text-primary transition-colors truncate block'
                >
                  abhishek@example.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className='h-px bg-border mb-4' />

          {/* Social Links */}
          <div className='mb-4'>
            <p className='text-xs text-muted-foreground font-medium mb-3'>Connect</p>
            <div className='grid grid-cols-3 gap-2'>
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center justify-center p-3 rounded-xl border border-border bg-accent/30 hover:border-primary hover:bg-primary/5 transition-all'
                  >
                    <Icon className='size-5' />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <Button className='w-full' size='lg' asChild>
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Work Together
            </motion.a>
          </Button>
        </div>
      </div>

      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mt-4 bg-card border border-border rounded-2xl p-4 shadow-lg'
      >
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-lg bg-green-500/10'>
            <CheckCircle2 className='size-5 text-green-500' />
          </div>
          <div className='flex-1'>
            <p className='text-sm font-semibold'>Available for Work</p>
            <p className='text-xs text-muted-foreground'>Open to new opportunities</p>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default Profile;
