import Dishes from "./Components/Dishes";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Mission from "./Components/Mission";
import Expertise from "./Components/Expertise"
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Header/>
      <Navbar/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      // <Reviews/>
      <Contact/>
      <Footer/>
      </main>
  )
}
