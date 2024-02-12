import React, { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"

import logo from "../../assets/logo.svg"
import classes from "../../styles/components/layout/Navbar.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  const closeSidebar = () => setShowSidebar(false)

  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <section className={`fixed-top bg-white ${classes.navContainer}`}>
      <nav
        className={`container col-lg-10 col-xl-8 col-md-12 col-11 col-sm-8 ${classes.navbar}`}
      >
        <a className="navbar-brand fs-4" href="/">
          <img
            src={logo}
            className={classes.logo}
            alt="universal traders academy Logo"
          />
        </a>

        <button className={classes.toggleButton} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="text-dark" />
        </button>

        <div
          className={`${classes.sidebar} ${showSidebar ? classes.show : ""}`}
          ref={sidebarRef}
        >
          <button className={classes.closeButton} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faTimes} className="text-dark" />
          </button>
          <ul className={classes.sidebarLinks}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${classes.navLink} ${isActive ? classes.activeNavLink : ""}`
                }
                onClick={toggleSidebar}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="FreeLessons"
                className={({ isActive }) =>
                  `${classes.navLink} ${isActive ? classes.activeNavLink : ""}`
                }
                onClick={toggleSidebar}
                end
              >
                Free Lessons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Courses"
                className={({ isActive }) =>
                  `${classes.navLink} ${isActive ? classes.activeNavLink : ""}`
                }
                onClick={toggleSidebar}
                end
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Articles"
                className={({ isActive }) =>
                  `${classes.navLink} ${isActive ? classes.activeNavLink : ""}`
                }
                onClick={toggleSidebar}
                end
              >
                Articles
              </NavLink>
            </li>
          </ul>

          <div className="d-flex flex-column justify-content-center align-items-center gap-3 flex-lg mx-4">
            <NavLink>
              <FontAwesomeIcon
                icon={faUser}
                className={`fs-4 ${classes.user}`}
              />
            </NavLink>
          </div>
        </div>
        <div className={`offcanvas-body flex-lg-row p-4 ${classes.navLinks}`}>
          <div className="d-flex">
            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${classes.navLink} ${
                      isActive ? classes.activeNavLink : ""
                    }`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="FreeLessons"
                  className={({ isActive }) =>
                    `${classes.navLink} ${
                      isActive ? classes.activeNavLink : ""
                    }`
                  }
                  end
                >
                  Free Lessons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Courses"
                  className={({ isActive }) =>
                    `${classes.navLink} ${
                      isActive ? classes.activeNavLink : ""
                    }`
                  }
                  end
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Articles"
                  className={({ isActive }) =>
                    `${classes.navLink} ${
                      isActive ? classes.activeNavLink : ""
                    }`
                  }
                  end
                >
                  Articles
                </NavLink>
              </li>
            </ul>
            <div
              className={`d-flex flex-column justify-content-end align-items-center ${classes.userContainer}`}
            >
              <NavLink>
                <FontAwesomeIcon
                  icon={faUser}
                  className={`fs-4 ${classes.user}`}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
