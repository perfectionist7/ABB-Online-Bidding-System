import { useMemo } from "react";
import Badge from "./Badge";
import PropTypes from "prop-types";
import "./Productlight3.css";

const Productlight3 = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  propBackgroundImage,
  image3,
}) => {
  const productlight3Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const image3Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`productlight15 ${className}`} style={productlight3Style}>
      <div className="image17" style={image3Style}>
        <img className="image-3-icon3" alt="" src={image3} />
        <div className="like17">
          <img className="icon19" alt="" src="/icon-1.svg" />
        </div>
      </div>
      <div className="content18">
        <div className="container55">
          <div className="header55">
            <Badge propHeight="15px" propMinWidth="unset" />
            <div className="title55">Tribit Bluetooth Speaker</div>
          </div>
        </div>
        <div className="container56">
          <div className="header56">
            <div className="title56">Minimum Bid</div>
          </div>
          <div className="price34">$10</div>
        </div>
        <div className="container56">
          <div className="header56">
            <div className="title56">Current Bid</div>
          </div>
          <div className="price35">$15</div>
        </div>
        <div className="paragraph17">
          <div className="ends-in17">Ends in : 1 day 12 hrs 43 minutes</div>
        </div>
      </div>
      <div className="buttons18">
        <div className="cta20">
          <div className="layout17">
            <div className="label28">Bid now</div>
          </div>
          <img className="right-icon18" alt="" src="/right-icon-1.svg" />
        </div>
      </div>
    </div>
  );
};

Productlight3.propTypes = {
  className: PropTypes.string,
  image3: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
};

export default Productlight3;
