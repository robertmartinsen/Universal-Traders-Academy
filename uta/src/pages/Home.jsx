import React from "react"

import Hero from "../components/home/Hero"
import AboutSection from "../components/home/AboutSection"
import YouTubeSection from "../components/home/YouTubeSection"
import TestimonialSection from "../components/home/TestimonialSection"
import ArticlesSection from "../components/home/ArticlesSection"

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
      <section>
        <TestimonialSection />
      </section>
      <section>
        <ArticlesSection />
      </section>
    </div>
  )
}

export default Home
