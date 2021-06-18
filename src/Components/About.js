import React from "react";
import profilePNG from "../img/profile.png";
export default function About() {
  return (
    <div className="docs-section about-me">
      <div className="container">
        <div className="row">
          <div className="five columns">
            <div className="profile-img">
              <img alt="Profile" src={profilePNG} />
            </div>
          </div>
          <div className="seven columns">
            <p>
              Hello, My name is Misael Paul Mamangun. I'm a front-end developer
              for almost 3 years. I started to work as a freelance web developer
              when I'm 3rd year in college as a Bachelor of Science in
              Information Technology student. I have developed company websites
              using Joomla, WordPress (PSD into a responsive website), ReactJS,
              and VueJS. Now, I am currently working as a front-end developer in
              SimpleApps.
            </p>
            <button className="button-primary">My Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
