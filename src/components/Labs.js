import React, { Component } from "react"

export default class Labs extends Component {
  render() {
    return (
      <div className='container'>
        <p className='about-welcome-text'>Here are some experiments and tests I do</p>

        <div className='container-projects-labs'>
          
          <div className='div-content'>
            <a href='https://github.com/henriquenasc/guide-ouricuri' className='default-link-style' target='_blank'>
            {/* <img src={require('../imgs/projetcs/guide-ouricuri.png')} /> */}
            <div className='div-content-project-description'>
              <p className='title'>Guide Ouricuri</p>
              <p>Guide with the list of companies, information and contact of the city of Ouricuri.</p>
              <span>reactjs, react-router-dom, bootstrap</span>
            </div>
            </a>
          </div>

        </div>
      </div>
    )
  }
}