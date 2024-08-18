import React from 'react'
import missionImg from "../assets/mission.jpeg"
import {MISSION} from "../constants"
import mission from "../assets/mission.mp4"

const Mission = () => {

return (

<section id="mission">

<div className="container mx-auto text-center">

<h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>

<div className="relative flex items-center justify-center">

<video className="w-full rounded-3xl " autoPlay muted loop playsInline poster ={missionImg}>

<source src= {mission} type="video/mp4"/>

</video>
<div className=' absolute h-full w-full font-extrabold
    max-w-lg tracking-wider lg:text-4xl flex items-center justify-center text-gray-400'> {MISSION}</div>
</div>
</div>

</section>
  )
}

export default Mission