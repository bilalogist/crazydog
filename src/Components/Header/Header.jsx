import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "reactstrap";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    const image = new Image();
    image.src = "/img/banner-final.jpg";
    image.onload = () => {
      setSrc(image.src);
    };
  });
  return (
    <header className="header">
      <nav className="navbar navbar-style">
        <div className="container">
          <div className="navbar-header">
            <h2 className="logo">Angry Dogs Club</h2>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/angrydogsnft"
                className="btn btn-social-icon btn-twitter"
              >
                <span style={{ fontSize: "30px" }}>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href=" https://discord.gg/kenR8kPZtN"
                className="btn btn-social-icon btn-discord"
              >
                <span style={{ fontSize: "30px" }}>
                  <FontAwesomeIcon icon={faDiscord} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {src ? (
        <div
          className="p-5 text-center bg-image img-fluid"
          style={{
            backgroundImage: `url('${src}')`,
            height: " 400px",
            backgroundSize: " 100% 100%",
          }}
        ></div>
      ) : (
        <div className="d-flex justify-content-center center-block mt-5 pt-5">
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            color="primary"
            type="grow"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
