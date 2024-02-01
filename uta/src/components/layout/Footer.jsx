import React from "react"
import { Link } from "react-router-dom"
import classes from "../../styles/components/layout/Footer.module.scss"
import logo from "../../assets/logo.svg"
import youtube from "../../assets/youtube.svg"
import telegram from "../../assets/telegram-plane.svg"
import instagram from "../../assets/instagram.svg"

function Footer() {
  return (
    <footer
      className={`${classes.footer} footer text-light text-center py-3 pb-5`}
    >
      <div className="container text-center">
        <div className={`mt-4 ${classes.footerLinks}`}>
          <ul>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <a
                href="https://www.termsfeed.com/live/3923072f-c700-4ea6-8256-8ffd9c5cc0e9"
                target="_blank"
              >
                Privacy & Policy
              </a>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={`mt-4 ${classes.iconContainer}`}>
          <div className={classes.iconBg}>
            <a href="https://m.youtube.com/@BastionUTA" target="_blank">
              <img src={youtube} className={classes.icon} />
            </a>
          </div>
          <div className={classes.iconBg}>
            <a href="https://t.me/+08SGOuV6ubNkOTY0" target="_blank">
              <img src={telegram} className={classes.icon} />
            </a>
          </div>
          <div className={classes.iconBg}>
            <a
              href="https://instagram.com/bastiontrader?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
            >
              <img src={instagram} className={classes.icon} />
            </a>
          </div>
        </div>
        <img src={logo} className={`mt-4 ${classes.logo}`} alt="footer logo" />{" "}
        <p className="pt-3">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
