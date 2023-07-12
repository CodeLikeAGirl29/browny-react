import React from 'react';
import { ProgressBar } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import './Skills.css'

function Bar() {
  return (
    <>
      <div id="skills" className="skills">
        <div className="skill-content">
          <div className="section-heading text-center">
            <h2>skills</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="single-skill-content">
                  <span className="progressText">HTML</span>
                  <div className="skill-bar">
                    <span className="skill-per html">
                      <span className="tooltip">95%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <span className="progressText">CSS</span>
                <div className="skill-bar">
                  <span className="skill-per css">
                    <span className="tooltip">80%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="single-skill-content">
              <span className="progressText">JavaScript</span>
              <div className="skill-bar">
                <span className="skill-per javascript">
                  <span className="tooltip">60%</span>
                </span>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <span className="progressText">NodeJS</span>
                    <div className="skill-bar">
                      <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="single-skill-content">
                  <span className="progressText">ReactJS</span>
                  <div className="skill-bar">
                    <span className="skill-per reactjs">
                      <span className="tooltip">70%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <span className="progressText">ExpressJS</span>
                <div className="skill-bar">
                  <span className="skill-per expressjs">
                    <span className="tooltip">75%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bar;