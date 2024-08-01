import React from "react";
import "./Pdetail.css";
function Pdetail({ isActive, setActive }) {
  return (
    <>
      <div className={`personal_details`}>
        <div className="crossmenubar" onClick={() => setActive(false)}>  <i class="fa-solid fa-xmark"></i></div>

        <div className="box">
          <img src="/assets/img/profile.jpeg" alt="Mithlesh" className="image-logo-menu" />
        </div>
        <h3 className="name_user">
          Ravina
          <span className="text-yellow">Duggal</span>
        </h3>
        <p>Front End Developer</p>
        {/* social Icons */}
        <div className="social-icons">

          <a
            href="https://www.linkedin.com/in/ravina-duggal-634236193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="i_tag_social linkedin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path></svg>
          </a>
          <a
            href="https://github.com/Ravina-Duggal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="i_tag_social github" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
       
        </div>
       
        <div className="border_line"></div>
        
        <div className="landmark">
          <div className="age">
            <p className="btnsame">Age</p>
            <p>22</p>
          </div>
          <div className="residence">
            <p className="btnsame">Residence</p>
            <p>Jalandhar</p>
          </div>
          <div className="address">
            <p className="btnsame">Address</p>
            <p>Punjab, India</p>
          </div>
        </div>
        
        <div className="border_line"></div>
       
        <div className="sills_details">
          <h3>Skill</h3>
          <div className="skills">
            <p>
              <span>Html</span>
            </p>
            <div className="progress">
              <div className="pro_div_in80"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Css</span>
            </p>
            <div className="progress">
              <div className="pro_div_in80"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Javascript</span>
            </p>
            <div className="progress">
              <div className="pro_div_in40"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>React js</span>
            </p>
            <div className="progress">
              <div className="pro_div_in80"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Bootstrap</span>
            </p>
            <div className="progress">
              <div className="pro_div_in80"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Express js</span>
            </p>
            <div className="progress">
              <div className="pro_div_in80"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Node js</span>
            </p>
            <div className="progress">
              <div className="pro_div_in60"></div>
            </div>
          </div>
        </div>

       
        <div className="border_line"></div>
    
        <div className="extra_know">
          <h3>Current Learning </h3>
          <p>
            <i className="fa-solid fa-chevron-right"></i> Wordpress
          </p>
          <p>
            <i className="fa-solid fa-chevron-right"></i> React Native
          </p>
          <p>
            <i className="fa-solid fa-chevron-right"></i> Next js
          </p>

        </div>
        {/* border line */}
        <div className="border_line"></div>
        {/* language Details */}
        <div className="language_detail">
          <h3>Languages</h3>
          <div className="lg_inside">
            <p>
              <span>Hindi</span>
              
            </p>
           
          </div>
          <div className="lg_inside">
            <p>
              <span>Punjabi</span>

            
            </p>
           
          </div>
          <div className="lg_inside">
            <p>
              <span>English</span>
              
            </p>
            
          </div>
        </div>
        <div className="button_resume">
          <a className="btnsame"
            href="assets/img/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              Download Resume
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="hioutlinedown" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Pdetail;
