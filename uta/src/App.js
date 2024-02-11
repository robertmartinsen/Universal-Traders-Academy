import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Cookies from "js-cookie"

import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import FreeLessons from "./pages/FreeLessons"
import CookieBanner from "./components/CookieBanner"

function App() {
  useEffect(() => {
    const hasVisitedCookie = Cookies.get("hasVisited")

    if (!hasVisitedCookie) {
      Cookies.set("hasVisited", true, { expires: 1 })
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FreeLessons" element={<FreeLessons />} />
        </Route>
      </Routes>
      <CookieBanner />
    </div>
  )
}

export default App
