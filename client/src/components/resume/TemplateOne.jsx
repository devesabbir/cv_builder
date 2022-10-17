import React from 'react'
import './TemplateOne.scss'

function TemplateOne() {
  return ( 
    <div className="resume_wrapper">
    <div className="top">
      <div className="left">
        <h2>left</h2>
      </div>
      <div className="right">
        <h2>Olivia wilson</h2>
        <p>Student</p>
      </div>
    </div>
    <div className="bottom">
      <div className="left">
        <div className="profile_wrapper">
          <div className="dp">
            <figure>
              <img src="https://media-public.canva.com/Mku9Q/MAD7ZSMku9Q/1/s.jpg" alt="" />
            </figure>
          </div>
          <div className="about">
            <h3>Profile</h3>
            <p>Business Administration student.
              I consider my self a responsible and orderly person.
              I am looking foward for my first work experience.</p>
          </div>
          <div className="contact_info">
            <h3>Contact me</h3>
            <ul>
              <li>
                <span>Icon</span>
                <span>(123) 456-7890</span>
              </li>
              <li>
                <span>Icon</span>
                <span>hello@reallygreatsite.com</span>
              </li>
              <li>
                <span>Icon</span>
                <span>123 Anywhere St., Any city, State, Country 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="education">
          <div className="title">
            <h4>Education</h4>
          </div>
          <article>        
            <h5>Milemora University</h5>
            <p>Business Administration career, in progress.</p> 
            <h5>Brayershire College</h5>
            <p>2017-2021</p>
          </article>
        </div>
        <div className="university">
          <div className="title">
            <h4>University</h4>
          </div>
          <article>        
            <p>Business Administration career, in progress.</p> 
            <h5>Brayershire College</h5>
            <p>2017-2021</p>
          </article>
        </div>
        <div className="language">
          <div className="title">
            <h4>Language</h4>
          </div>
          <article> 
            <ul>
              <li>Native English.</li>
              <li>Advanced spanish.</li>
            </ul>
          </article>
        </div>
        <div className="skills">
          <div className="title">
            <h4>Computer skills</h4>
          </div>
          <article>
            <ul>
              <li>Text processor.</li>
              <li>Spreadsheet.</li>
              <li>Slide presentation.</li>
            </ul>
          </article> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default TemplateOne