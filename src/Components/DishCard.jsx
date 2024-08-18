import React from 'react'
import { star } from "../assets";

const DishCard = ({project}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
    <img className = " border-b-4 rounded-3xl p-2" src={project.imgURL} alt={project.name} />
<div className='p-4'>
    <h3 className='mb-2 text-2xl font-bold tracking-tighter'>{project.name}</h3>
   <div className='flex'>
  <img  src={star} alt='rating icon' width={24} height={24}/><p>(4.5)</p></div>
    <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
  {project.price}
</p>
<p className='text-sm'>{project.description}</p>
</div>
    </div>


  )
}

export default DishCard