import Button from "./Button";
import PropTypes from "prop-types";
import "./NumericControls.css";

const NumericControls = ({
  className = "",
  label,
  label1,
  showLabel,
  showLabel1,
  showIcon,
  showIcon1,
}) => {
  return (
    <div className={`numeric-controls ${className}`}>
      <Button
        showLabel={showLabel}
        showIcon={showIcon}
        label={label}
        plus="/minus.svg"
      />
      <Button
        showLabel={showLabel1}
        showIcon={showIcon1}
        label={label1}
        plus="/plus.svg"
      />
    </div>
  );
};

NumericControls.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  label1: PropTypes.string,
  showLabel: PropTypes.bool,
  showLabel1: PropTypes.bool,
  showIcon: PropTypes.bool,
  showIcon1: PropTypes.bool,
};

export default NumericControls;
