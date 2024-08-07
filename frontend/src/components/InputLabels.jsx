import PropTypes from "prop-types";
import "./InputLabels.css";

const InputLabels = ({ className = "", label, demoPlaceholder }) => {
  return (
    <div className={`input-labels ${className}`}>
      <div className="label20">{label}</div>
      <div className="bar2">
        <input className="demo" placeholder={demoPlaceholder} type="text" />
      </div>
    </div>
  );
};

InputLabels.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  demoPlaceholder: PropTypes.string,
};

export default InputLabels;
