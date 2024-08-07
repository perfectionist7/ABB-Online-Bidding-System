import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header41 ${className}`}>
      <div className="container39">
        <div className="logo3">
          <img
            className="vector-icon4"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="logo4">
            <h1 className="logo5">Genix Auctions</h1>
          </div>
        </div>
      </div>
      <div className="seperator2" />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
