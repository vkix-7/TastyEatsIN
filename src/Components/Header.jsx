import foodbg from "../assets/foodbg.avif"
import logo from "../assets/TastyEatsIn-removebg-preview.png"
import hero from "../assets/hero.jpeg"
import { motion } from "framer-motion"
const Header = () => {
  return (
    <section className="relative flex h-screen items-center justify-center ">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <img src={foodbg} className=" h-full w-full object-cover" muted autoPlay loop playsInline poster={foodbg}></img>
            </div>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
<div className="relative z-20 flex h-screen flex-col justify-end pb-20">
                                           
                                            
  <motion.img initial={{opacity: 0, y: 50}} animate={{opacity: 1, y : 0}} transition={{duration:0.5} } src={logo} alt = "tastyeats" className="w-full p-4 mb-3"/>
</div>
    </section>
  )
}

export default Header