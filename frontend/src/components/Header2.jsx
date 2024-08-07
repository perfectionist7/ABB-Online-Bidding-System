import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  const navigate = useNavigate();

 
  return (
    <header className={`header59 ${className}`}>
      <div className="navigation-parent">
        <div className="menu-item">
          <img
            className="brand-logo-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="brand-container">
            <h2 className="logo13">Genix Auctions</h2>
          </div>
        </div>
        <div className="navigation-menu">
          <div className="menu-categories">
            <div className="categories-container">
              <img
                className="categories-icon3"
                loading="lazy"
                alt=""
                src="/categories2@2x.png"
              />
            </div>
            <div className="menu-items">
              <div className="menu-item">
                <img className="icon21" alt="" src="/icon.svg" />
                <div className="item-label-wrapper">
                  <a className="item-label">English</a>
                </div>
                <div className="chevron">
                  <img className="chevron-icon3" alt="" src="/chevron.svg" />
                </div>
              </div>
            </div>
            <div
              className="dropdown-menu-group"
            >
              
              <img
                className="avatar-icon1"
                loading="lazy"
                alt=""
                src="/avatar1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="seperator5" />
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
