import Navbar from '/components/NavBar'
import FanClub from '/components/FanClub'
import JohnnyBravoComponent from '/components/JohnnyBravoComponent';  
import About from '/components/About';  
import Footer from '/components/Footer';  

export default function Home() {
  return (
    <>
      <Navbar/> 
       {/* <FanClub/>  */}
        <JohnnyBravoComponent />
         <About />
         <Footer />
    </>
  )
}
