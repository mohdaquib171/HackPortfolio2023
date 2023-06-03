import React from 'react'
import './Footer.css'

const date = new Date()
const year = date.getFullYear()

const Footer = () => {

  return (
    <footer className="footer">
    <p>
      &copy; {year} All Rights Reserved HackPortfolio Hackathon.
    </p>
    </footer>
  )
}

export default Footer