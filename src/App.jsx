import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
