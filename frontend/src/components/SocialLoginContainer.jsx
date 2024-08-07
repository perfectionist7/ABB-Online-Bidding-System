import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SocialLoginContainer.css";

const SocialLoginContainer = ({ className = "", propAlignSelf }) => {
  const socialButtonsContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={`social-login-container ${className}`}>
      <div className="social-login-divider">
        <div className="line-parent">
          <div className="frame-item" />
          <div className="divider-label-container">
            <div className="or-sign-up">or sign up with</div>
          </div>
        </div>
      </div>
      <div
        className="social-buttons-container"
        style={socialButtonsContainerStyle}
      >
        <button className="google-button">
          <img
            className="logo-googleg-48dp"
            alt=""
            src="/logo-googleg-48dp.svg"
          />
          <div className="google">Google</div>
        </button>
        <div className="apple-button">
          <div className="path4-wrapper">
            <img className="path4-icon" alt="" src="/path4.svg" />
          </div>
          <div className="apple">Apple</div>
        </div>
        <button className="apple-button1">
          <div className="facebook-logo">
            <img className="path14-icon" alt="" src="/path14.svg" />
          </div>
          <div className="facebook">Facebook</div>
        </button>
      </div>
    </div>
  );
};

SocialLoginContainer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default SocialLoginContainer;
