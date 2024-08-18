import React from 'react'
import { DISHES } from '../constants'
import DishCard from './DishCard' 
const Dishes = () => {
  return (
//     <section className='container  py-16' id="dishes">
//         <h2 className='mb-8 text-center text-3xl lg:text-4xl'>Discover Your Favourite Dishes</h2>
//         <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
//             {DISHES.map((project,index)=>(
// <DishCard Key={index} project={project}/>
//             ))}
//             </div>
//     </section>
<section id='dishes' className='max-container max-sm:mt-12 mx-20'>
<div className='flex flex-col justify-start gap-5'>
  <h2 className='text-4xl font-palanquin font-bold text-center'>
  Discover<span className='text-coral-red items-center justify-center'> Your Favourite Dishes</span>
  </h2>
  <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
    Experience top quality and delicious food from our masterpiece Chiefs.<br></br> Discover a world of flavours, spices and thoughtfullness.
  </p>
</div>

<div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
  {DISHES.map((project,index) => (
    <DishCard key={index} project={project}/>
  ))}
</div>
</section>



  )
}

export default Dishes