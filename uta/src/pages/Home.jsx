import React from "react"

import Hero from "../components/home/Hero"
import WelcomeSection from "../components/home/WelcomeSection"
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
        <WelcomeSection />
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
