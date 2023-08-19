import React from 'react'
import {motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
    return () => {
        return <motion.section id={idName} 
        variants={staggerContainer(1,1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false,amount:0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <Component />
        </motion.section>
    }
}



export default SectionWrapper