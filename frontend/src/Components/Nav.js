import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVirus,
  faFileAlt,
  faMapMarkerAlt,
  faInfoCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Components/css/styles.css";
import Position from "./Position";
import Modal from "./Modal";

function Nav() {
  const [dateTime, setDateTime] = useState(new Date());
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="home__nav">
      <div className="nav__title">
        <Router>
          <Link to="/" className="text-link">
            <div className="nav__icon">
              <FontAwesomeIcon icon={faVirus} className="nav-icon" />
            </div>
            <div className="nav__listTitle">코로나오늘</div>
          </Link>
        </Router>
      </div>
      <div className="nav__date">{`${dateTime.toLocaleDateString()}`}</div>
      <div className="nav__city">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="nav-icon-map" />
        <Position />
      </div>

      <ul className="nav__lists">
        <li className="nav__list">
          <Router>
            <Link to="/" className="text-link">
              <div className="nav__icon">
                <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
              </div>
              <div className="nav__listTitle">코로나 현황</div>
            </Link>
          </Router>
        </li>
        <li className="nav__list">
          <Router>
            <Link to="/info" className="text-link">
              <div className="nav__icon">
                <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
              </div>
              <div className="nav__listTitle">코로나 인포</div>
            </Link>
          </Router>
        </li>
      </ul>
      <div className="nav__footer">
        <p>Copyright © 2020 코로나오늘</p>
        <span
          className="nav__github"
          onClick={() =>
            window.open("https://github.com/LeeHyeSu/coronaonul", "_blank")
          }
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </span>
      </div>

      <button
        className="btnModal"
        onClick={() => setDisplayModal(!displayModal)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <Modal />
    </div>
  );
}

export default Nav;
