import { useState, useCallback } from "react";
import SubmitBid from "../components/SubmitBid";
import PortalPopup from "../components/PortalPopup";
import Header3 from "../components/Header3";
import { useNavigate } from "react-router-dom";
import Badge from "../components/Badge";
import Rating from "../components/Rating";
import "./Bidding.css";
import FrameComponent from "../components/FrameComponent";

const Bidding = () => {
  const [isSubmitBidOpen, setSubmitBidOpen] = useState(false);
  const navigate = useNavigate();

  const openSubmitBid = useCallback(() => {
    setSubmitBidOpen(true);
  }, []);

  const closeSubmitBid = useCallback(() => {
    setSubmitBidOpen(false);
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  return (
    <>
      <div className="bidding">
        <Header3 />
        <main className="main-content">
          <section className="frame-parent">
            <div className="product-details-parent">
              <div className="product-details">
                <div className="product-info">
                  <div
                    className="right-icon-parent"
                    onClick={onGroupContainerClick}
                  >
                    <img
                      className="right-icon"
                      loading="lazy"
                      alt=""
                      src="/right-icon.svg"
                    />
                    <a className="label">Back to catalog</a>
                  </div>
                  <div className="image">
                    <div className="like">
                      <img className="right-icon" alt="" src="/icon-1.svg" />
                    </div>
                  </div>
                  <div className="content">
                    <div className="container">
                      <div className="header">
                        <Badge propHeight="unset" propMinWidth="70px" />
                        <div className="title">Sony Black Headphones</div>
                      </div>
                    </div>
                    <div className="container1">
                      <div className="header1">
                        <div className="title1">Minimum Bid</div>
                      </div>
                      <div className="price">$100</div>
                    </div>
                    <div className="container1">
                      <div className="header1">
                        <div className="title1">Current Bid</div>
                      </div>
                      <div className="price1">$157</div>
                    </div>
                    <div className="paragraph">
                      <div className="ends-in">
                        Ends in : 1 day 12 hrs 43 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reviews-parent">
                  <div className="reviews">
                    <div className="title">Description</div>
                    <div className="immerse-yourself-in-container">
                      <p className="immerse-yourself-in">
                        Immerse yourself in pristine sound quality with the Sony
                        Black Headphones. Crafted for audiophiles and casual
                        listeners alike, these headphones deliver an exceptional
                        audio experience with deep, resonant bass and
                        crystal-clear highs. The sleek black design complements
                        any style, whether you're on the go or relaxing at home.
                      </p>
                      <p className="immerse-yourself-in">
                        Equipped with advanced noise-canceling technology, these
                        headphones block out distractions so you can enjoy your
                        music, podcasts, or calls without interference. Comfort
                        is key with plush ear cushions that provide long-lasting
                        comfort for extended listening sessions.
                      </p>
                      <p className="immerse-yourself-in">
                        Designed for convenience, these headphones feature
                        easy-to-use controls for adjusting volume, skipping
                        tracks, and taking calls on the go. Foldable and
                        compact, they're perfect for travel and storage,
                        ensuring you can take your music with you wherever you
                        go.
                      </p>
                      <p className="whether-youre-commuting">
                        Whether you're commuting, working out, or simply
                        unwinding, the Sony Black Headphones offer premium sound
                        quality and comfort that elevate your listening
                        experience to new heights.
                      </p>
                    </div>
                  </div>
                  <div className="customer-reviews">
                    <div className="review-item">
                      <div className="customer-feedback">
                        <div className="title">Reviews</div>
                        <Rating
                          emptyCircle="/ellipse-14@2x.png"
                          star="/star.svg"
                          theseHeadphonesAreAGameCh="These headphones are a game-changer for my daily commute. The noise-canceling feature works like a charm."
                          kristinWatson="Kristin Watson"
                          march142021="March 14, 2021"
                        />
                      </div>
                      <div className="review-divider">
                        <div className="review-divider-child" />
                      </div>
                    </div>
                    <div className="second-review">
                      <div className="second-circle">
                        <img
                          className="empty-circle-icon"
                          alt=""
                          src="/ellipse-14-1@2x.png"
                        />
                      </div>
                      <div className="second-stars">
                        <img className="star-icon" alt="" src="/star.svg" />
                        <div className="im-blown-away">
                          I'm blown away by the sound clarity these headphones
                          offer.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="second-reviewer">
                    <div className="second-info">
                      <div className="reviewer-name">
                        <b className="jenny-wilson">Jenny Wilson</b>
                        <div className="january-28-2021">January 28, 2021</div>
                      </div>
                    </div>
                    <div className="second-divider">
                      <div className="review-divider-child" />
                    </div>
                    <Rating
                      emptyCircle="/ellipse-14-2@2x.png"
                      star="/star-2.svg"
                      theseHeadphonesAreAGameCh="As a frequent flyer, these headphones have become my must-have travel companion."
                      propWidth="101px"
                      kristinWatson="Bessie Cooper"
                      march142021="January 11, 2021"
                      propDisplay="unset"
                      propMinWidth="unset"
                      propAlignSelf="stretch"
                    />
                  </div>
                </div>
              </div>
              <div className="bidding-info-wrapper">
                <div className="bidding-info">
                  <div className="the-floor-bids-container">
                    <ul className="the-floor-bids-157-the-floor">
                      <li className="the-floor-bids">The Floor bids $157</li>
                      <li className="the-floor-bids">The Floor bids $150</li>
                      <li className="the-floor-bids">
                        Internet Bidder bids $145
                      </li>
                      <li className="the-floor-bids">The Floor bids $140</li>
                      <li className="the-floor-bids">
                        Internet Bidder bids $132
                      </li>
                      <li className="the-floor-bids">The Floor bids $111</li>
                      <li className="the-floor-bids">
                        Internet Bidder bids $109
                      </li>
                      <li>The Floor bids $105</li>
                    </ul>
                  </div>
                  <button className="buttons" onClick={openSubmitBid}>
                    <div className="cta">
                      <div className="layout">
                        <div className="label1">Bid now</div>
                      </div>
                      <img
                        className="right-icon1"
                        alt=""
                        src="/right-icon-1.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FrameComponent />
      </div>
      {isSubmitBidOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSubmitBid}
        >
          <SubmitBid onClose={closeSubmitBid} />
        </PortalPopup>
      )}
    </>
  );
};

export default Bidding;
