import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Rating.css";

const Rating = ({
  className = "",
  emptyCircle,
  star,
  theseHeadphonesAreAGameCh,
  propWidth,
  kristinWatson,
  march142021,
  propDisplay,
  propMinWidth,
  propAlignSelf,
}) => {
  const reviewerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const march142021Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propDisplay, propMinWidth, propAlignSelf]);

  return (
    <div className={`rating ${className}`}>
      <div className="rating-circle">
        <img
          className="empty-circle-icon1"
          loading="lazy"
          alt=""
          src={emptyCircle}
        />
      </div>
      <div className="stars">
        <img className="star-icon1" loading="lazy" alt="" src={star} />
        <div className="these-headphones-are">{theseHeadphonesAreAGameCh}</div>
        <div className="reviewer" style={reviewerStyle}>
          <b className="kristin-watson">{kristinWatson}</b>
          <div className="march-14-2021" style={march142021Style}>
            {march142021}
          </div>
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  className: PropTypes.string,
  emptyCircle: PropTypes.string,
  star: PropTypes.string,
  theseHeadphonesAreAGameCh: PropTypes.string,
  kristinWatson: PropTypes.string,
  march142021: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Rating;
