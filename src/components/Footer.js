import React from 'react'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
    <div className='icons-container'>
      <a className="icon" href="https://github.com/gtcssa/" target="_blank" rel="noreferrer" aria-label="github"><FaGithub /></a>
      <a className="icon" href="https://www.facebook.com/gtcssa/" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebook /></a>
      <a className="icon" href="https://www.instagram.com/gtcssa/?hl=en" target="_blank" rel="noreferrer" aria-label="instagram"><FaInstagram /></a>
    </div>
    <div className='email-container'>
      <a className="email">@ 2023 GTCSSA</a>
    </div>
</div>
  )
}

export default Footer
