import PropTypes from "prop-types";
import "./Dropdown.css";

const Dropdown = ({
  className = "",
  textLabel = "Showing all",
  descriptionLabel = "Description",
  titleLabel = "Label",
  mandatory = true,
  title = false,
  description = false,
}) => {
  return (
    <div className={`dropdown2 ${className}`}>
      <div className="input-container">
        {title && (
          <div className="mandatory-container">
            {mandatory && <div className="mandatory2">*</div>}
            <div className="label30">{titleLabel}</div>
          </div>
        )}
        <div className="input-box2">
          <div className="item1">{textLabel}</div>
          <img className="status-line-icon2" alt="" src="/status-line.svg" />
          <img className="caret-down-icon1" alt="" src="/caretdown.svg" />
        </div>
      </div>
      {description && (
        <div className="check-mark-circle-1-group">
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/checkmarkcircle1.svg"
          />
          <div className="description2">{descriptionLabel}</div>
        </div>
      )}
      <div className="list1">
        <div className="list-inner" />
        <div className="search1">
          <div className="frame-parent4">
            <div className="mandatory-parent1">
              <div className="mandatory3">*</div>
              <div className="mandatory3">Label</div>
            </div>
            <div className="input-box3">
              <img
                className="abb-placeholder-icon11"
                alt=""
                src="/abb-placeholder.svg"
              />
              <div className="value-text1">Search</div>
              <img
                className="status-line-icon3"
                alt=""
                src="/status-line.svg"
              />
              <img
                className="abb-search-alternate-icon1"
                alt=""
                src="/abb-searchalternate@2x.png"
              />
            </div>
          </div>
          <div className="abb-check-circle-1-group">
            <img
              className="abb-check-circle-1-icon1"
              alt=""
              src="/abb-checkcircle1@2x.png"
            />
            <div className="description3">Description</div>
          </div>
        </div>
        <div className="list-item-011">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-021">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-031">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-041">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-051">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-061">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-071">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-081">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-091">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
        <div className="list-item-101">
          <div className="checkbox10">
            <div className="check-mark-wrapper8">
              <img
                className="check-mark-circle-1-icon1"
                alt=""
                src="/checkmark.svg"
              />
            </div>
            <div className="label-text10">Label Text</div>
          </div>
          <img
            className="check-mark-circle-1-icon1"
            alt=""
            src="/abb-placeholder.svg"
          />
          <div className="description2">List Item</div>
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  textLabel: PropTypes.string,
  descriptionLabel: PropTypes.string,
  titleLabel: PropTypes.string,
  mandatory: PropTypes.bool,
  title: PropTypes.bool,
  description: PropTypes.bool,
};

export default Dropdown;
