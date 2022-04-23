import React, { useEffect } from "react"
import Nav from "../components/Nav"
import Introduction from "../components/Intro"
import Skills from "../components/Skills/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import OffCanvas from "../components/OffCanvas"

const Home = ( { siteData } ) => {

  useEffect(() => {
    document.title = 'Home'
    window.scrollTo(0, 0)
  }, [])

  return ( 
    <main>
      <Nav/>
      <Introduction/>
      <Skills/>
      <Portfolio projects={siteData} />
      <Contact/>
      <Footer/>
      <OffCanvas projects={siteData} />
    </main>
  )
}

export default Home