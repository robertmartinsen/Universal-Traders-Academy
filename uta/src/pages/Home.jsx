import React from "react"

import Hero from "../components/home/Hero"
import AboutSection from "../components/home/AboutSection"
import YouTubeSection from "../components/home/YouTubeSection"

function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <YouTubeSection />
      </section>
    </div>
  )
}

export default Home
