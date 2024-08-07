import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  className = "",
  showLabel = false,
  showIcon = true,
  label = "Button",
  plus,
}) => {
  return (
    <div className={`button ${className}`}>
      {showIcon && (
        <div className="icon22">
          <img className="plus-icon" alt="" src={plus} />
        </div>
      )}
      {showLabel && (
        <div className="label34">
          <div className="button1">{label}</div>
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  showLabel: PropTypes.bool,
  showIcon: PropTypes.bool,
  label: PropTypes.string,
  plus: PropTypes.string,
};

export default Button;
