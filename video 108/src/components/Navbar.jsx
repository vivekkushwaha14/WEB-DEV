import { useEffect } from "react"
import React from 'react'

const Navbar = ({ color }) => {
  // case:1 Run on every render
  useEffect(() => {
    alert("this run in every render")
  }, )

  // case:2 Run only on first render
  useEffect(() => {
    alert("This is first render")
  }, [])

  // case:3 Run only when certain values changes
  useEffect(() => {
    alert("this is running because color was changed")
  }, [color])

  // Example of cleanup function
  useEffect(() => {
    alert("this is the first render of app.jsx")

    return ()=>{
      alert("component was unmounted")
    }
  }, [])

  return (
    <div>
      this is Navbar of {color}
    </div>
  )
}

export default Navbar
