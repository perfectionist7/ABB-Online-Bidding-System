import Label from "./Label";
import TextContent from "./TextContent";
import NumericControls from "./NumericControls";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({
  className = "",
  showIcon = false,
  showDescription = false,
  showSuffix = false,
  showPrefix = false,
  description = "Optional helper text",
  label,
  mandatory,
  extended,
  text,
}) => {
  return (
    <div className={`input2 ${className}`}>
      <Label mandatory={mandatory} extended={extended} label={label} />
      <div className="input-field">
        <div className="input3">
          {showPrefix && (
            <div className="prefix">
              <div className="postfix">
                <div className="text79">Text</div>
                <div className="divider12">
                  <div className="divider13" />
                </div>
              </div>
            </div>
          )}
          <TextContent text={text} />
          {showSuffix && (
            <div className="prefix">
              <div className="postfix">
                <div className="divider12">
                  <div className="divider13" />
                </div>
                <div className="text79">Text</div>
              </div>
            </div>
          )}
          {showIcon && <img className="icon23" alt="" src="/-icon.svg" />}
          <div className="text-area-indicator">
            <div className="handle" />
            <img
              className="text-area-indicator1"
              alt=""
              src="/text-area-indicator.svg"
            />
          </div>
          <NumericControls
            label="Button"
            label1="Button"
            showLabel={false}
            showLabel1
            showIcon
            showIcon1
          />
        </div>
        {showDescription && (
          <div className="helper">
            <div className="optional-helper-text">{description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  showIcon: PropTypes.bool,
  showDescription: PropTypes.bool,
  showSuffix: PropTypes.bool,
  showPrefix: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.string,
  mandatory: PropTypes.bool,
  extended: PropTypes.bool,
  text: PropTypes.string,
};

export default Input;
