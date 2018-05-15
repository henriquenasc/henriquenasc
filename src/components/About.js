import React, { Component } from "react"

export default class About extends Component {
  render() {
    return (
      <div className='container'>
        <p className='about-welcome-text'>Hi! My name is <span className='about-full-name'>Henrique Nascimento</span>. I’m a 23 year-old web developer.</p>
        <p></p>

        <div className='content-description'>
          <p className='about-description-text'>I have most of the experience writing code in high-level programming languages, with JavaScript being the best weapon. I'd describe myself more as a front-end guy, but I can do things from the front end and back end. On the server I wrote mostly in PHP and Python, but I also had some experience with Java..</p>
          <div className='overlay-image'>
            <img className='img-profile' src={require('../imgs/perfil.jpg')} alt="profile image" />
          </div>        
        </div>

        <div className='content-icons-socials'>
          <ul>
            <li>
              <a href='https://www.facebook.com/HenriqueNascimentoRC'>
                <img className='icon-social' src={require('../imgs/icons/facebook.svg')} alt="svg facebook" />
              </a>
            </li>
            
            <li>
              <a href='https://twitter.com/He_Nasc'>
                <img className='icon-social' src={require('../imgs/icons/twitter.svg')} alt="svg twitter" />
              </a>
            </li>

            <li>
              <a href='https://github.com/henriquenasc'>
                <img className='icon-social' src={require('../imgs/icons/github.svg')} alt="svg github" />
              </a>
            </li>

            <li>
              <a href='https://pt.stackoverflow.com/users/62960/henrique-nascimento'>
                <img className='icon-social' src={require('../imgs/icons/stackoverflow.svg')} alt="svg stackoverflow" />
              </a>
            </li>

            <li>
              <a href='mailto:henriquenascandrade@gmail.com'>
                <img className='icon-social' src={require('../imgs/icons/gmail.svg')} alt="svg gmail" />
              </a>
            </li>

            <li>
              <a href='https://www.linkedin.com/in/henrique-nascimento-021901117/'>
                <img className='icon-social' src={require('../imgs/icons/linkedin.svg')} alt="svg linkedin" />
              </a>
            </li>
          </ul>
        </div>

        {/* <footer>
          <span>created with reactjs and</span>
          <img className='icon-heart' src={require('../imgs/icons/coracao.png')} alt="image heart" />
        </footer> */}
      </div>
    )
  }
}