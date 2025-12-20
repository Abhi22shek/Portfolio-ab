import {motion} from 'motion/react'
import { fadeUp, staggerContainer } from '@/lib/animation'

import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'

import { services } from '@/constants'

const Services = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='services'
    >
        <SectionHeader title='Building with purpose & precision' subtitle='services'/>

        <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.)}
        className='grid md:grid-cols-2 gap-10 mt-10'
        >
            {services.map((service) => (
                <motion.div
                key={service.title}
                variants={fadeUp}
                className=''
                >
                    <motion.div>
                        <ServiceCard service={service} />
                    </motion.div>
                </motion.div>
             ))}
        </motion.div>

    </motion.section>
  )
}

export default Services