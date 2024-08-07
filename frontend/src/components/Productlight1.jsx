import { useMemo } from "react";
import Badge from "./Badge";
import PropTypes from "prop-types";
import "./Productlight1.css";

const Productlight1 = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  propBackgroundImage,
  image1,
  propTop,
  title,
  price,
  propWidth1,
  price1,
  propWidth2,
}) => {
  const productlight1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const image1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const image1IconStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const price2Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const price3Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={`productlight13 ${className}`} style={productlight1Style}>
      <div className="image15" style={image1Style}>
        <img
          className="image-1-icon3"
          alt=""
          src={image1}
          style={image1IconStyle}
        />
        <div className="like15">
          <img className="icon17" alt="" src="/icon-1.svg" />
        </div>
      </div>
      <div className="content16">
        <div className="container49">
          <div className="header49">
            <Badge propHeight="15px" propMinWidth="unset" />
            <div className="title49">{title}</div>
          </div>
        </div>
        <div className="container50">
          <div className="header50">
            <div className="title50">Minimum Bid</div>
          </div>
          <div className="price30" style={price2Style}>
            {price}
          </div>
        </div>
        <div className="container50">
          <div className="header50">
            <div className="title50">Current Bid</div>
          </div>
          <div className="price31" style={price3Style}>
            {price1}
          </div>
        </div>
        <div className="paragraph15">
          <div className="ends-in15">Ends in : 1 day 12 hrs 43 minutes</div>
        </div>
      </div>
      <div className="buttons16">
        <div className="cta18">
          <div className="layout15">
            <div className="label26">Bid now</div>
          </div>
          <img className="right-icon16" alt="" src="/right-icon-1.svg" />
        </div>
      </div>
    </div>
  );
};

Productlight1.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  price1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propTop: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default Productlight1;
