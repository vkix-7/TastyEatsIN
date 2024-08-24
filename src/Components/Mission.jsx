import React from 'react'
import missionImg from "../assets/mission.jpeg"
import {MISSION} from "../constants"
import mission from "../assets/mission.mp4"
import {motion} from "framer-motion"
const Mission = () => {

return (

<section id="mission">

<div className="container mx-auto text-center">

<h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>

<div className="relative flex items-center justify-center">

<motion.video 

whileInView={{opacity:1}} 
viewport={{once: true}} 
transition={{duration:1}}
className="w-full rounded-3xl " autoPlay muted loop playsInline poster ={missionImg}>

<source src= {mission} type="video/mp4"/>

</motion.video>
<motion.div 
initial={{opacity:0}}
whileInView={{opacity:1}} 
viewport={{once: true}} 
transition={{duration:1,delay:0.5}}
className=' absolute h-full w-full font-extrabold
    max-w-lg tracking-wider lg:text-4xl flex items-center justify-center text-gray-400'> {MISSION}</motion.div>
</div>
</div>

</section>
  )
}

export default Mission