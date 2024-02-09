import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import FreeLessons from "./pages/FreeLessons"

function App() {
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
    </div>
  )
}

export default App
