import React, { useState } from "react"
import { GiBiceps } from "react-icons/gi"
import { IoMdClose, IoMdMenu, IoIosFitness, IoMdFitness } from "react-icons/io"
import { Link } from "react-router-dom"
import "../sidebar.css"
import ArmsPage from "../pages/ArmsPage"
const Sidebar = () => {
  // sets the default of the nav sidebar to closed or false
  const [active, setActive] = useState(false)

  // when selected will change the state (open/close) the menu bar
  const activateNav = () => {
    setActive(!active)
  }

  return (
    // if functions active used sideNav class else use mobile class
    <div className={active ? "sidenav" : "sidenav-mobile"}>
      <div className='menu-icon' onClick={activateNav}>
        {!active ? (
          <IoMdMenu className='menu' />
        ) : (
          <IoMdClose className='menu' />
        )}
      </div>

      <nav>
        {/* list of all filter options */}
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          <li>
            {/* icon */}
            <IoMdFitness className='icon' />
            <Link to='/Content/arms'>Arms</Link>
            {/* Icon text */}
          </li>
          <li>
            {/* icon */}
            <IoIosFitness className='icon' />
            <Link to='/Content/chest'>Chest</Link>
            {/* Icon text */}
          </li>
          <li>
            {/* icon */}
            <IoMdFitness className='icon' />
            <Link to='/Content/shoulders'>Shoulders</Link>
            {/* Icon text */}
          </li>
          <li>
            {/* icon */}
            <IoIosFitness className='icon' />
            <Link to='/Content/abs'>Abs</Link>
            {/* Icon text */}
          </li>
          <li>
            {/* icon */}
            <IoMdFitness className='icon' />
            <Link to='/Content/back'>Back</Link>
            {/* Icon text */}
          </li>
          <li>
            {/* icon */}
            <IoIosFitness className='icon' />
            <Link to='/Content/legs'>Legs</Link>
            {/* Icon text */}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
