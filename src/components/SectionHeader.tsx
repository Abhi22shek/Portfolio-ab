import {motion} from 'motion/react'
import { SparkleIcon } from 'lucide-react'
import { fadeUp } from '@/lib/animation'

function SectionHeader({title,subtitle}:{title:string,subtitle:string}) {
  return (
   <>
    <motion.p variants={fadeUp}
      className='flex items-center justify-center py-1 gap-2 border 
      border-neutral-600 rounded-sm w-32 '
    >
      <SparkleIcon size={15} />
      <span>{subtitle}</span>
    </motion.p>

    <motion.h2 variants={fadeUp} className='text-4xl font-bold capitalize
         mt-2 max-w-3xl'>
      {title}
      </motion.h2>
   </>
  )
}

export default SectionHeader