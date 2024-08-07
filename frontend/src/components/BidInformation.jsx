import PropTypes from "prop-types";
import "./BidInformation.css";

const BidInformation = ({ className = "" }) => {
  return (
    <div className={`bid-information ${className}`}>
      <div className="bid-details">
        <div className="end-time-container">
          <div className="title58">Minimum Bid</div>
          <div className="end-time-value-container">
            <div className="title59">Current Bid</div>
            <div className="ends-in18">Ends in : 1 day 12 hrs 43 minutes</div>
          </div>
        </div>
      </div>
      <div className="price-container-parent">
        <div className="price-container">
          <div className="price-value-container">
            <div className="price36">$100</div>
            <div className="previous-price-container">
              <div className="price37">$157</div>
            </div>
          </div>
        </div>
        <button className="cta21">
          <div className="label35">Submit</div>
          <img className="right-icon19" alt="" src="/right-icon1.svg" />
        </button>
      </div>
    </div>
  );
};

BidInformation.propTypes = {
  className: PropTypes.string,
};

export default BidInformation;
