import Input from "./Input";
import PropTypes from "prop-types";
import "./NumericInput.css";

const NumericInput = ({ className = "" }) => {
  return (
    <div className={`numeric-input ${className}`}>
      <Input
        showIcon
        showDescription
        showSuffix
        showPrefix
        description="Optional helper text"
        label="Maximum bid"
        mandatory
        extended
        text="$"
      />
    </div>
  );
};

NumericInput.propTypes = {
  className: PropTypes.string,
};

export default NumericInput;
