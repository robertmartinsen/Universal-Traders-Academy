import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom"
import Footer from "./Footer";

function Layout () {
    return (
        <div className="layout-container">
          <Navbar />
          <div className="layout-content">
            <Outlet />
          </div>
          <Footer />
        </div>
      )
    }
    
export default Layout