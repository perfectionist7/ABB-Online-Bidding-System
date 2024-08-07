import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Badge.css";

const Badge = ({ className = "", propHeight, propMinWidth }) => {
  const informationStyle = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
    };
  }, [propHeight, propMinWidth]);

  return (
    <div className={`badge ${className}`}>
      <div className="information" style={informationStyle}>
        Live Auction
      </div>
    </div>
  );
};

Badge.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Badge;
