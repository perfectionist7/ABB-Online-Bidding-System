
import BidInformation from "./BidInformation";
import PropTypes from "prop-types";
import "./SubmitBid.css";

const SubmitBid = ({ className = "", onClose }) => {
  return (
    <div className={`submit-bid ${className}`}>
      <section className="modal">
        <img className="modal-child" alt="" src="/line-844.svg" />
        <BidInformation />
      </section>
    </div>
  );
};

SubmitBid.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SubmitBid;
