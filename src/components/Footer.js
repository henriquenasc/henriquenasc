import React from "react";

const Footer = () => (
  <div className="content-icons-socials">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/henrique-nascimento-021901117/">
          <img
            className="icon-social"
            src={require("../components/imgs/icons/linkedin.svg")}
            alt="svg linkedin"
          />
        </a>
      </li>

      <li>
        <a href="mailto:henriquenascandrade@gmail.com">
          <img
            className="icon-social"
            src={require("../components/imgs/icons/gmail.svg")}
            alt="svg gmail"
          />
        </a>
      </li>

      <li>
        <a href="https://twitter.com/He_Nasc">
          <img
            className="icon-social"
            src={require("../components/imgs/icons/twitter.svg")}
            alt="svg twitter"
          />
        </a>
      </li>

      <li>
        <a href="https://github.com/henriquenasc">
          <img
            className="icon-social"
            src={require("../components/imgs/icons/github.svg")}
            alt="svg github"
          />
        </a>
      </li>

      <li>
        <a href="https://pt.stackoverflow.com/users/62960/henrique-nascimento">
          <img
            className="icon-social"
            src={require("../components/imgs/icons/stackoverflow.svg")}
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
);

export default Footer;
