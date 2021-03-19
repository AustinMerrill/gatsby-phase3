import React from "react"
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <footer className="p-5 md:flex md:justify-between ">
        {/* socials */}
        <div className="flex space-x-8 mb-8 text-xl md:order-2">
          <a href="https://www.google.com/">
            <FaTwitter />
          </a>
          <a href="https://www.google.com/">
            <FaGithub />
          </a>
          <a href="https://www.google.com/">
            <FaDribbble />
          </a>
        </div>
        {/* copyright date */}
        <div className="font-bold">
          © {new Date().getFullYear()}, Austin Merrill CO
        </div>
      </footer>
    </div>
  )
}

export default Footer
