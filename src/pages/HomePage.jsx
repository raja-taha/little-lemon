import Hero from "../components/Hero"
import Menu from "../components/Menu"
import Testimonials from "../components/Testimonials"
import About from "../components/About"
export default function HomePage() {
    return (
      <main>
       <Hero/>
       <Menu />
       <Testimonials />
       <About />
      </main>
    )
  }