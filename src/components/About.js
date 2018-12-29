import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <p className="about-welcome-text">
          Hi! My name is{" "}
          <span className="about-full-name">Henrique Nascimento</span>. I’m a 24
          year-old web developer.
        </p>
        <p />

        <div className="content-description">
          <p className="about-description-text">
            Computer enthusiast, passionate about new technologies and people. I
            like communities like (open source, makers, developers and others).
            <br />
            <br />
            Currently studying things like javascript e php. You can follow my
            projects in my github.
          </p>
          <div className="overlay-image">
            <img
              className="img-profile"
              src={require("../imgs/perfil.jpg")}
              alt="profile image"
            />
          </div>
        </div>

        <div className="content-icons-socials">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/henrique-nascimento-021901117/">
                <img
                  className="icon-social"
                  src={require("../imgs/icons/linkedin.svg")}
                  alt="svg linkedin"
                />
              </a>
            </li>

            <li>
              <a href="mailto:henriquenascandrade@gmail.com">
                <img
                  className="icon-social"
                  src={require("../imgs/icons/gmail.svg")}
                  alt="svg gmail"
                />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/henriquenrc/?hl=pt-br">
                <img
                  className="icon-social"
                  src={require("../imgs/icons/instagram.svg")}
                  alt="svg instagram"
                />
              </a>
            </li>

            <li>
              <a href="https://medium.com/@henriquenascimento">
                <img
                  className="icon-social"
                  src={require("../imgs/icons/medium.svg")}
                  alt="svg mediium"
                />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/He_Nasc">
                <img
                  className="icon-social"
                  src={require("../imgs/icons/twitter.svg")}
                  alt="svg twitter"
                />
              </a>
            </li>

            <li>
              <a href="https://github.com/henriquenasc">
                <img
                  className="icon-social"
                  src={require("../imgs/icons/github.svg")}
                  alt="svg github"
                />
              </a>
            </li>

            <li>
              <a href="https://pt.stackoverflow.com/users/62960/henrique-nascimento">
                <img
                  className="icon-social"
                  src={require("../imgs/icons/stackoverflow.svg")}
                  alt="svg stackoverflow"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.dropbox.com/s/3bli0oayyyr7h8n/curriculo.pdf?dl=0"
                target="_blank"
              >
                <img
                  className="icon-social"
                  src={"https://png.icons8.com/metro/1600/document.png"}
                  alt="svg stackoverflow"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* <footer>
          <span>created with reactjs and</span>
          <img className='icon-heart' src={require('../imgs/icons/coracao.png')} alt="image heart" />
        </footer> */}
      </div>
    );
  }
}
