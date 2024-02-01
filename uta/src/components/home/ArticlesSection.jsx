import React from "react"
import { Link } from "react-router-dom"

import classes from "../../styles/components/home/ArticlesSection.module.scss"

function ArticlesSection() {
  return (
    <div className="mt-5 mb-5">
      <div>
        <h1 className="text-center">Read Our Articles</h1>
      </div>

      <div className={classes.infoBox}>
        <p className="mt-4">
          Explore a wealth of knowledge on futures trading, patterns,
          candlesticks, and more in our comprehensive articles section. Whether
          you're a novice trader seeking foundational insights or an experienced
          professional looking for advanced strategies, our curated collection
          covers a spectrum of topics to enhance your understanding and
          proficiency in the dynamic world of futures trading. Dive into our
          articles and empower yourself with valuable insights to navigate the
          complexities of financial markets.
        </p>
      </div>
      <div className={classes.articlesBtnContainer}>
        <Link className={classes.articlesBtn} to="/Articles">
          Articles
        </Link>
      </div>
    </div>
  )
}

export default ArticlesSection
