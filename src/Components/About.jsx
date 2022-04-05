import React from 'react'
import profilePNG from '../assets/img/profile.jpg'
import Resume from '../assets/docs/Resume.pdf'
export default function About() {
  return (
    <div className='docs-section about-me pb-2'>
      <div className='container'>
        <div className='row'>
          <div className='five columns'>
            <div className='profile-img'>
              <img alt='Profile' src={profilePNG} />
            </div>
          </div>
          <div className='seven columns'>
            <p>
              Hello, My name is Misael Paul Mamangun. I am a front-end developer
              for almost three years. I started to work as a freelance web
              developer when I'm 3rd year in college as a Bachelor of Science in
              Information Technology student. I have developed company websites
              using Joomla, HTML/CSS, and ReactJS.
            </p>
            <a href={Resume} download='Resume' className='button-primary'>
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
