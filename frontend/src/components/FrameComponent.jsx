import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", propAlignSelf, propWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`loading-container-parent ${className}`}
      style={frameDivStyle}
    >

      <div className="footer3">
        <div className="bg1" />
        <div className="footer4">
          <div className="footer-container">
            <div className="footer-content">
              <img className="footer-logo-icon" alt="" src="/vector.svg" />
              <div className="footer-brand">
                <h2 className="logo9">Genix Auctions</h2>
              </div>
            </div>
            <div className="footer-help">
              <div className="help-menu2">
                <p className="products1">Products  |  Auctions  |  Bidding  |  About us  |  Contact</p>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="links">
              <img
                className="social-icon"
                alt=""
                src="/enter-mobile-number-linked-to-your-bank-account.svg"
              />
              <img className="social-icon" alt="" src="/links.svg" />
              <img className="social-icon" alt="" src="/links1.svg" />
              <img className="social-icon" alt="" src="/links2.svg" />
            </div>
          </div>
        </div>
        <div className="footer-divider-parent">
          <div className="footer-divider1" />
          <div className="copyright-container">
            <div className="copyright1">
              © Copyright 2024, All Rights Reserved by Genix
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent;
