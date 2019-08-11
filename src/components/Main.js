import React from "react";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="section">
      <div className="description">
        <p className="text-header">
          Hi! My name is <span className="text-name">Henrique Nascimento</span>.
          I’m a 25 year-old.
        </p>

        <p className="sub-text">
          Computer enthusiast, passionate about new technologies and people. I
          like communities like (open source, makers, developers and others).
        </p>
        <p className="sub-text">
          Currently studying things like{" "}
          <span className="span-js">javascript</span> and{" "}
          <span className="span-php">PHP</span>. You can follow my projects in
          my github.
        </p>
      </div>
      <Footer />
    </div>
  );
}
