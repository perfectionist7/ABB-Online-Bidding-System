import { useMemo } from "react";
import Badge from "./Badge";
import PropTypes from "prop-types";
import "./Productlight2.css";

const Productlight2 = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  propBackgroundImage,
  image2,
}) => {
  const productlight2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const image2Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`productlight14 ${className}`} style={productlight2Style}>
      <div className="image16" style={image2Style}>
        <img className="image-2-icon4" alt="" src={image2} />
        <div className="like16">
          <img className="icon18" alt="" src="/icon-1.svg" />
        </div>
      </div>
      <div className="content17">
        <div className="container52">
          <div className="header52">
            <Badge propHeight="15px" propMinWidth="unset" />
            <div className="title52">Mi 3i 20000mAh Power Bank</div>
          </div>
        </div>
        <div className="container53">
          <div className="header53">
            <div className="title53">Minimum Bid</div>
          </div>
          <div className="price32">$40</div>
        </div>
        <div className="container53">
          <div className="header53">
            <div className="title53">Current Bid</div>
          </div>
          <div className="price33">$46</div>
        </div>
        <div className="paragraph16">
          <div className="ends-in16">Ends in : 1 day 12 hrs 43 minutes</div>
        </div>
      </div>
      <div className="buttons17">
        <div className="cta19">
          <div className="layout16">
            <div className="label27">Bid now</div>
          </div>
          <img className="right-icon17" alt="" src="/right-icon-1.svg" />
        </div>
      </div>
    </div>
  );
};

Productlight2.propTypes = {
  className: PropTypes.string,
  image2: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
};

export default Productlight2;
