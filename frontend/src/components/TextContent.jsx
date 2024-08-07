import PropTypes from "prop-types";
import "./TextContent.css";

const TextContent = ({ className = "", text = "$" }) => {
  return (
    <div className={`text-content ${className}`}>
      <div className="input-text">{text}</div>
    </div>
  );
};

TextContent.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default TextContent;
