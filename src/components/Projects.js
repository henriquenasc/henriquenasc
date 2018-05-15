import React, { Component } from "react"

export default class Projects extends Component {
  render() {
    return (
      <div className='container'>
        <p className='about-welcome-text'>Some of my recent projects, for more visit my <a href='https://github.com/henriquenasc' className='default-link-style' target='_blank'>github</a></p>
        <div className='container-projects-labs'>
          
          <div className='div-content'>
            <a href='https://github.com/henriquenasc/henriquenasc.github.io' className='default-link-style' target='_blank'>
            {/* <img src={require('../imgs/projetcs/site.png')} /> */}
            <div className='div-content-project-description'>
              <p className='title'>My personal website</p>
              <p>Website with my contacts, portfolio and projects.</p>
              <span>reactjs, react-router-dom, flexbox</span>
            </div>
            </a>
          </div>

        </div>
      </div>
    )
  }
}