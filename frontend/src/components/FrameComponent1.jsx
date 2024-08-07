import NumericInput from "./NumericInput";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`connections-header-parent ${className}`}>
      <header className="connections-header">
        <div className="connections-content">
          <a className="established-connections">Submit Bid</a>
          <div className="connections-content-inner">
            <div className="frame-inner" />
          </div>
          <div className="add-subtitle-container">
            <div className="add-subtitle">Sony Black Headphones</div>
          </div>
        </div>
        <div className="icon24">
          <img
            className="abb-close-icon"
            loading="lazy"
            alt=""
            src="/abb-close.svg"
          />
        </div>
      </header>
      <div className="input-divider-parent">
        <div className="input-divider" />
        <div className="numeric-input1">
          <NumericInput />
          <NumericInput />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
