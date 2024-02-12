import React, { useState, useEffect } from "react"
import Cookies from "js-cookie"
import classes from "../styles/components/CookieBanner.module.scss"

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(!Cookies.get("acceptCookies"))
  const [isActive, setIsActive] = useState(false)

  const handleAcceptCookies = () => {
    Cookies.set("acceptCookies", true, { expires: 365 })
    setShowBanner(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  if (!showBanner) {
    return null
  }

  return (
    <div
      className={`${classes.cookieBanner} ${isActive ? classes.active : ""}`}
    >
      <div className={classes.textBox}>
        <p>
          This website uses cookies. Read more about our privacy & policy{" "}
          <a
            href="https://www.termsfeed.com/live/3923072f-c700-4ea6-8256-8ffd9c5cc0e9"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className={classes.btnBox}>
        <button onClick={handleAcceptCookies}>Alright</button>
      </div>
    </div>
  )
}

export default CookieBanner
