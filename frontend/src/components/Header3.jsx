import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header3.css";

const Header3 = ({ className = "" }) => {
  const navigate = useNavigate();


  return (
    <header className={`header40 ${className}`}>
      <div className="frame-parent2">
        <div className="vector-group">
          <img
            className="vector-icon2"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="logo-container">
            <a className="logo1">Genix Auctions</a>
          </div>
        </div>
        <div className="navigation">
          <div className="frame-parent3">
            <div className="categories-wrapper">
              <img
                className="categories-icon"
                loading="lazy"
                alt=""
                src="/categories@2x.png"
              />
            </div>
            <div className="frame-wrapper1">
              <div className="profile-info-parent">
                <div className="profile-info">
                  <img className="icon13" alt="" src="/icon.svg" />
                  <a className="text24">English</a>
                </div>
                <div className="dropdown1">
                  <img className="chevron-icon" alt="" src="/chevron.svg" />
                </div>
              </div>
            </div>
            <div
              className="dropdown-menu-parent"
            >
              
              <img
                className="avatar-icon"
                loading="lazy"
                alt=""
                src="/avatar1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="seperator1" />
    </header>
  );
};

Header3.propTypes = {
  className: PropTypes.string,
};

export default Header3;
