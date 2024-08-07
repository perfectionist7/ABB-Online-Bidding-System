import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLightButtonContainerClick = useCallback(() => {
    navigate("/home2");
  }, [navigate]);

  const onLightButtonClick = useCallback(() => {
    navigate("/get-started");
  }, [navigate]);

  return (
    <header className={`header42 ${className}`}>
      <div className="container40">
        <div className="logo6">
          <img
            className="vector-icon5"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="logo7">
            <h2 className="logo8">Genix Auctions</h2>
          </div>
        </div>
        <img
          className="categories-icon1"
          loading="lazy"
          alt=""
          src="/categories1@2x.png"
        />
        <div className="language">
          <img className="icon14" alt="" src="/icon.svg" />
          <div className="label23">
            <a className="text51">English</a>
          </div>
          <img className="chevron-icon1" alt="" src="/chevron.svg" />
        </div>
        <div className="buttons13">
          <div className="lightbutton" onClick={onLightButtonContainerClick}>
            <a className="login">Login</a>
          </div>
          <button className="lightbutton1" onClick={onLightButtonClick}>
            <a className="get-started1">Get Started</a>
          </button>
        </div>
      </div>
      <div className="seperator3" />
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
