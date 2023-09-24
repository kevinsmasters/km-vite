import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import tikiLogo from "../assets/images/tiki-rev.png";
export const MainNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div id="mainNav">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark-nu">
        <div className="container">
          <Link to="/#">
            <span className="navbar-brand pt-1 pb-0">
              <img
                src={tikiLogo} // Route of the image file
                height={50} // Desired size with correct aspect ratio
                width={43} // Desired size with correct aspect ratio
                alt="Kevin Masters Web Developer"
              />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggleMenu(toggleMenu ? false : true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${toggleMenu ? "show" : ""}`}
            id="navbarColor02"
          >
            <ul
              className="navbar-nav me-auto"
              onClick={() => setToggleMenu(toggleMenu ? false : true)}
            >
              <li className="nav-item">
                <Link to="#top">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#mission">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#projects">
                  <a className="nav-link">Projects</a>
                </Link>
              </li>
              {/* 
                        <li className="nav-item">
                            <Link href="#stories">
                                <a className="nav-link">Stories
                                </a>
                            </Link>
                        </li>*/}
              <li className="nav-item">
                <Link to="#contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-md-auto social-nav">
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noopener"
                  className="nav-link"
                  href="https://github.com/kevinsmasters"
                >
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noopener"
                  className="nav-link"
                  href="https://www.linkedin.com/in/kevinsmasters/"
                >
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
