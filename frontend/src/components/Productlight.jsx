import { useMemo } from "react";
import Badge from "./Badge";
import PropTypes from "prop-types";
import "./Productlight.css";

const Productlight = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  containerHeight,
  containerMinWidth,
}) => {
  const productlightStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={`productlight12 ${className}`} style={productlightStyle}>
      <div className="container45">
        <div className="image14">
          <div className="like14">
            <img className="icon16" alt="" src="/icon-1.svg" />
          </div>
        </div>
        <div className="container45">
          <div className="container46">
            <div className="header46">
              <Badge propHeight="15px" propMinWidth="unset" />
              <div className="title46">Sony Black Headphones</div>
            </div>
          </div>
          <div className="container47">
            <div className="header47">
              <div className="title47">Minimum Bid</div>
            </div>
            <div className="price28">$100</div>
          </div>
          <div className="container47">
            <div className="header47">
              <div className="title47">Current Bid</div>
            </div>
            <div className="price29">$157</div>
          </div>
          <div className="paragraph14">
            <div className="ends-in14">Ends in : 1 day 12 hrs 43 minutes</div>
          </div>
        </div>
      </div>
      <div className="buttons15">
        <div className="cta17">
          <div className="layout14">
            <div className="label25">Bid now</div>
          </div>
          <img className="right-icon15" alt="" src="/right-icon-1.svg" />
        </div>
      </div>
    </div>
  );
};

Productlight.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  containerHeight: PropTypes.any,
  containerMinWidth: PropTypes.any,
};

export default Productlight;
