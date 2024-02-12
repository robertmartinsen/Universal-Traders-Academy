import React from "react"
import TelegramCard from "../components/freelessons/TelegramCard"

import classes from "../styles/FreeLessons.module.scss"
import YouTubeCards from "../components/freelessons/YouTubeCards"

function FreeLessons() {
  return (
    <div className={classes.freelessonsBody}>
      <div className="pt-5">
        <h1 className="text-center">Free Lessons</h1>
      </div>

      <section>
        <TelegramCard />
      </section>
      <section>
        <YouTubeCards />
      </section>
    </div>
  )
}

export default FreeLessons
