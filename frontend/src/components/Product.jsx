import { useMemo, useCallback } from "react";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  propBackgroundImage,
  propHeight1,
  propAlignSelf,
  propWidth1,
  propMinWidth2,
  propHeight2,
  propAlignSelf1,
  propWidth2,
  propMinWidth3,
  onLightButtonContainerClick,
  propHeight3,
  propAlignSelf2,
  propAlignSelf3,
  propWidth3,
  propAlignSelf4,
  propFlex1,
  propDisplay,
  propMinWidth4,
}) => {
  const productStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const imageStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const containerStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const priceStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
      minWidth: propMinWidth2,
    };
  }, [propAlignSelf, propWidth1, propMinWidth2]);

  const container1Style = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  const price1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth2,
      minWidth: propMinWidth3,
    };
  }, [propAlignSelf1, propWidth2, propMinWidth3]);

  const buttonsStyle = useMemo(() => {
    return {
      height: propHeight3,
    };
  }, [propHeight3]);

  const cTAStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const layoutStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
      width: propWidth3,
    };
  }, [propAlignSelf3, propWidth3]);

  const labelStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
      flex: propFlex1,
      display: propDisplay,
      minWidth: propMinWidth4,
    };
  }, [propAlignSelf4, propFlex1, propDisplay, propMinWidth4]);

  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/home2");
  }, [navigate]);

  return (
    <div className={`product ${className}`} style={productStyle}>
      <div className="container41">
        <div className="image13" style={imageStyle}>
          <div className="like13">
            <img className="icon15" loading="lazy" alt="" src="/icon-1.svg" />
          </div>
        </div>
        <div className="container41">
          <div className="container42">
            <div className="header43">
              <Badge propHeight="15px" propMinWidth="unset" />
              <div className="title43">Sony Black Headphones</div>
            </div>
          </div>
          <div className="container43" style={containerStyle}>
            <div className="header44">
              <div className="title44">Minimum Bid</div>
            </div>
            <div className="price26" style={priceStyle}>
              $100
            </div>
          </div>
          <div className="container43" style={container1Style}>
            <div className="header44">
              <div className="title44">Current Bid</div>
            </div>
            <div className="price27" style={price1Style}>
              $157
            </div>
          </div>
          <div className="paragraph13">
            <div className="ends-in13">Ends in : 1 day 12 hrs 43 minutes</div>
          </div>
        </div>
      </div>
      <div
        className="buttons14"
        onClick={onLightButtonContainerClick}
        style={buttonsStyle}
      >
        <div className="cta16" style={cTAStyle}>
          <div className="layout13" style={layoutStyle}>
            <div className="label24" style={labelStyle}>
              Bid now
            </div>
          </div>
          <img className="right-icon14" alt="" src="/right-icon-1.svg" />
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propHeight1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propHeight2: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propHeight3: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propAlignSelf3: PropTypes.any,
  propWidth3: PropTypes.any,
  propAlignSelf4: PropTypes.any,
  propFlex1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth4: PropTypes.any,

  /** Action props */
  onLightButtonContainerClick: PropTypes.func,
};

export default Product;
