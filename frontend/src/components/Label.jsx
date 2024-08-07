import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Label.css";

const Label = ({
  className = "",
  mandatory = false,
  extended = false,
  label = "Maximum bid",
  propPadding,
  propMinWidth,
  propWidth,
}) => {
  const label1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const inputLabelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propMinWidth, propWidth]);

  return (
    <div className={`label32 ${className}`}>
      <div className="label33" style={label1Style}>
        {mandatory && <div className="div">*</div>}
        <div className="input-label" style={inputLabelStyle}>
          {label}
        </div>
      </div>
      {extended && <div className="div1">(0/40)</div>}
    </div>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  mandatory: PropTypes.bool,
  extended: PropTypes.bool,
  label: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Label;
