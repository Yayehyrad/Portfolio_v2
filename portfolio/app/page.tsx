"use client"
import Image from 'next/image'
import ParticlesContainer from "@/components/ParticlesContainer"
import ProjectsBtn from "@/components/ProjectsBtn"
import Avatar from "@/components/Avatar"
import {motion} from "framer-motion"

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export default function Home() {
  return (
    <main className="">
      <div className=' h-screen bg-primary/60'>
        <div className=' w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className=' text-center flex  flex-col justify-center xl:text-left xl:p-40  h-full container mx-auto'>
            <motion.h1 variants={fadeIn("down" ,0.2)} initial="hidden" animate="show" exit={"hidden"} className='h1'>
              Transforming Ideas 
              <br /> 
              In To 
              <span className=' text-red-800 animate-pulse ml-2'>Digital reality</span>
            </motion.h1>
            <motion.p variants={fadeIn("down" ,0.2)} initial="hidden" animate="show" exit={"hidden"} className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati iste repellat assumenda eius molestiae autem omnis 
              fugit pariatur voluptate velit?
            </motion.p>
            <motion.div variants={fadeIn("down" ,0.6)} initial="hidden" animate="show" exit={"hidden"}
              className='flex justify-center xl:hidden relative'>
              <ProjectsBtn /> 
            </motion.div>
            <motion.div variants={fadeIn("down" ,0.6)} initial="hidden" animate="show" exit={"hidden"} 
              className='hidden xl:block'>
              <ProjectsBtn /> 
            </motion.div>
          </div>
        </div>

      </div>
       <h1 className=' text-red-700'>Portfolio</h1>  
    </main>
  )
}
