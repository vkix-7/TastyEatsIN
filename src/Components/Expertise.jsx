import React from 'react'
import { CUSINES } from '../constants'
import { motion } from 'framer-motion'
const containervariants ={
  show: {

  }
}
const Itemvariants ={
  hidden: {opacity:0, y: 20},
  show:{opacity: 1, y: 0, transition : {duration:0.8}}
}
const Expertise = () => {
  return (
    <section id = "expertise">
    <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">Our Expertise</h2>
    <motion.div className="container mx-auto px-4">
       {CUSINES.map((cusine,index)=>(
<div key={index} className ='flex items-center border-b-4 border-dotted border-neutral-700/40 py-2'>
<div className='flex-shrink-0 pr-8 text-2xl'>{cusine.number}</div>
<div className='w-1/3 flex-shrink-0'> <img src={cusine.imgURL1} alt= {cusine.Name} className='h-auto rounded-3xl '/></div>
<div className='pl-8'>
    <h3 className='text-2xl uppercase tracking-tighter text-rose-300 '>{cusine.Name}</h3>
    <p className='mt-4 text-lg tracking-tighter'>{cusine.Description}</p>
</div>
</div>
        ))}
 </motion.div>   </section>
  )
}

export default Expertise