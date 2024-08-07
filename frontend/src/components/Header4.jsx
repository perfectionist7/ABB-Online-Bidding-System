import PropTypes from "prop-types";
import "./Header4.css";

const Header4 = ({ className = "" }) => {
  return (
    <header className={`header58 ${className}`}>
      <div className="container58">
        <div className="logo10">
          <img
            className="vector-icon6"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="logo11">
            <h2 className="logo12">Genix Auctions</h2>
          </div>
        </div>
        <img
          className="categories-icon2"
          loading="lazy"
          alt=""
          src="/categories2@2x.png"
        />
        <div className="language1">
          <img className="icon20" alt="" src="/icon.svg" />
          <div className="label29">
            <a className="text52">English</a>
          </div>
          <img className="chevron-icon2" alt="" src="/chevron.svg" />
        </div>
        <div className="dropdown-wrapper">
          <img
            className="dropdown-icon"
            loading="lazy"
            alt=""
            src="/avatar1@2x.png"
          />
        </div>
      </div>
      <div className="seperator4" />
    </header>
  );
};

Header4.propTypes = {
  className: PropTypes.string,
};

export default Header4;
