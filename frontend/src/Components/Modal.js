import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faMapMarkerAlt,
  faInfoCircle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Components/css/styles.css";
import Position from "./Position";

const Modal = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="modal">
      <button
        className="btnModal"
        onClick={() => setDisplayModal(!displayModal)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={`Modal ${displayModal ? "Show" : ""}`}>
        <button
          className="btnClose"
          onClick={() => setDisplayModal(!displayModal)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h3 className="modalTitle">코로나 오늘</h3>

        <div className="modalText">
          <div className="modal-nav__date">
            {`${dateTime.toLocaleDateString()}`}
          </div>
          <div className="modal-nav__city">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="nav-icon-map" />
            <Position />
          </div>

          <ul className="modal-nav__lists">
            <li className="modal-nav__list">
              <Router>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="nav__icon">
                    <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
                  </div>
                  <div className="nav__listTitle">코로나 현황</div>
                </Link>
              </Router>
            </li>
            <li className="modal-nav__list">
              <Router>
                <Link
                  to="/info"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="nav__icon">
                    <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
                  </div>
                  <div className="nav__listTitle">코로나 인포</div>
                </Link>
              </Router>
            </li>
          </ul>

          <footer className="modal-nav__footer">
            <p>Copyright © 2020 코로나오늘</p>
            <span
              className="nav__github"
              onClick={() =>
                window.open("https://github.com/LeeHyeSu/coronaonul", "_blank")
              }
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </span>
          </footer>
        </div>
      </div>
      <div
        className={`Overlay ${displayModal ? "Show" : ""}`}
        onClick={() => setDisplayModal(!displayModal)}
      />
    </div>
  );
};

export default Modal;
