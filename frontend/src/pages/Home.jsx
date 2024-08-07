import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import Product from "../components/Product";
import Badge from "../components/Badge";
import Productlight from "../components/Productlight";
import Productlight1 from "../components/Productlight1";
import Productlight2 from "../components/Productlight2";
import Productlight3 from "../components/Productlight3";
import FrameComponent from "../components/FrameComponent";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

 
  return (
    <div className="home1">
      <main className="header-parent">
        <Header1 />
        <section className="frame-wrapper">
          <div className="hero-container-parent">
            <div className="hero-container">
              <div className="hero-content">
                <div className="hero-title-wrapper">
                  <div className="hero-title">
                    <div className="hero-heading">
                      <div className="hero-statement">
                        <div className="your-gateway">Your Gateway</div>
                        <div className="to-extraordinary">{`to Extraordinary `}</div>
                        <div className="finds">Finds</div>
                      </div>
                      <div className="unlock-deals-bid-container">
                        <p className="unlock-deals-bid">{`Unlock deals, bid smart, and seize the moment `}</p>
                        <p className="unlock-deals-bid">
                          with our online bidding bonanza!
                        </p>
                      </div>
                    </div>
                    <button className="hero-video">
                      <div className="video-content">
                        <img
                          className="video-icon"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <img
                          className="iconsaxlinearvideocircle"
                          alt=""
                          src="/iconsaxlinearvideocircle.svg"
                        />
                      </div>
                      <div className="watch-video">Watch Video</div>
                    </button>
                  </div>
                </div>
                <h1 className="explore-auctions">
                  <span>{`Explore `}</span>
                  <span className="auctions">Auctions</span>
                </h1>
                <div className="product-parent">
                  <Product
                  />
                  <div className="productlight">
                    <div className="image1">
                      <img
                        className="image-1-icon"
                        alt=""
                        src="/image-1@2x.png"
                      />
                      <div className="like1">
                        <img
                          className="icon1"
                          loading="lazy"
                          alt=""
                          src="/icon-1.svg"
                        />
                      </div>
                    </div>
                    <div className="simple-details">
                      <div className="content1">
                        <div className="container3">
                          <div className="header4">
                            <Badge propHeight="15px" propMinWidth="unset" />
                            <div className="title6">Apple AirPod 2nd Gen</div>
                          </div>
                        </div>
                        <div className="container4">
                          <div className="header5">
                            <div className="title7">Minimum Bid</div>
                          </div>
                          <div className="price2">$80</div>
                        </div>
                        <div className="container4">
                          <div className="header5">
                            <div className="title7">Current Bid</div>
                          </div>
                          <div className="price3">$95</div>
                        </div>
                        <div className="paragraph1">
                          <div className="ends-in1">
                            Ends in : 1 day 12 hrs 43 minutes
                          </div>
                        </div>
                      </div>
                      <div className="buttons1">
                        <div className="cta3">
                          <div className="layout1">
                            <div className="label6">Bid now</div>
                          </div>
                          <img
                            className="right-icon2"
                            alt=""
                            src="/right-icon-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-container">
              <div className="testimonial-content-parent">
                <div className="testimonial-content">
                  <div className="testimonial">
                    <div className="testimonial-elements">
                      <img
                        className="testimonial-elements-child"
                        alt=""
                        src="/group-25.svg"
                      />
                      <img
                        className="spiral-1-icon"
                        alt=""
                        src="/spiral-1.svg"
                      />
                    </div>
                    <div className="testimonial-quote">
                      <img
                        className="excited-brunette-girl-smiling-icon"
                        alt=""
                        src="/excitedbrunettegirlsmilingamazedpointingsmartphonescreen-1@2x.png"
                      />
                      <div className="quote-container">
                        <img
                          className="secure-icon"
                          loading="lazy"
                          alt=""
                          src="/secure-icon.svg"
                        />
                      </div>
                      <div className="union-parent">
                        <img className="union-icon" alt="" src="/union.svg" />
                        <div className="author-details">
                          <div className="author-statement">
                            <div className="overall">Overall</div>
                            <div className="fantastic">Fantastic!</div>
                          </div>
                        </div>
                        <img
                          className="frame-child"
                          loading="lazy"
                          alt=""
                          src="/ellipse-30.svg"
                        />
                      </div>
                    </div>
                    <div className="second-testimonial">
                      <img className="union-2-icon" alt="" src="/union-2.svg" />
                      <img
                        className="second-testimonial-child"
                        alt=""
                        src="/ellipse-29.svg"
                      />
                      <div className="author-details">
                        <div className="author-statement">
                          <div className="seamless-lightweight">
                            Seamless, lightweight!
                          </div>
                          <div className="loving-this-site">
                            Loving this site.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productlight-parent">
                  <div className="productlight">
                    <div className="image2">
                      <img
                        className="image-2-icon1"
                        alt=""
                        src="/image-21@2x.png"
                      />
                      <div className="like1">
                        <img
                          className="icon1"
                          loading="lazy"
                          alt=""
                          src="/icon-1.svg"
                        />
                      </div>
                    </div>
                    <div className="simple-details">
                      <div className="content1">
                        <div className="container3">
                          <div className="header4">
                            <Badge propHeight="15px" propMinWidth="unset" />
                            <div className="title6">
                              Mi 3i 20000mAh Power Bank
                            </div>
                          </div>
                        </div>
                        <div className="container4">
                          <div className="header5">
                            <div className="title7">Minimum Bid</div>
                          </div>
                          <div className="price2">$40</div>
                        </div>
                        <div className="container4">
                          <div className="header5">
                            <div className="title7">Current Bid</div>
                          </div>
                          <div className="price5">$46</div>
                        </div>
                        <div className="paragraph1">
                          <div className="ends-in1">
                            Ends in : 1 day 12 hrs 43 minutes
                          </div>
                        </div>
                      </div>
                      <div className="buttons1">
                        <div className="cta3">
                          <div className="layout1">
                            <div className="label6">Bid now</div>
                          </div>
                          <img
                            className="right-icon2"
                            alt=""
                            src="/right-icon-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="productlight">
                    <div className="image2">
                      <img
                        className="image-3-icon"
                        alt=""
                        src="/image-3@2x.png"
                      />
                      <div className="like1">
                        <img
                          className="icon1"
                          loading="lazy"
                          alt=""
                          src="/icon-1.svg"
                        />
                      </div>
                    </div>
                    <div className="simple-details">
                      <div className="content1">
                        <div className="container3">
                          <div className="header4">
                            <Badge propHeight="15px" propMinWidth="unset" />
                            <div className="title6">
                              Tribit Bluetooth Speaker
                            </div>
                          </div>
                        </div>
                        <div className="container4">
                          <div className="header5">
                            <div className="title7">Minimum Bid</div>
                          </div>
                          <div className="price6">$10</div>
                        </div>
                        <div className="container4">
                          <div className="header5">
                            <div className="title7">Current Bid</div>
                          </div>
                          <div className="price7">$15</div>
                        </div>
                        <div className="paragraph1">
                          <div className="ends-in1">
                            Ends in : 1 day 12 hrs 43 minutes
                          </div>
                        </div>
                      </div>
                      <div className="buttons1">
                        <div className="cta3">
                          <div className="layout1">
                            <div className="label6">Bid now</div>
                          </div>
                          <img
                            className="right-icon2"
                            alt=""
                            src="/right-icon-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productlight3">
                <div className="image1">
                  <img className="image-4-icon" alt="" src="/image-4@2x.png" />
                  <div className="like1">
                    <img
                      className="icon1"
                      loading="lazy"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                </div>
                <div className="simple-details">
                  <div className="content1">
                    <div className="container3">
                      <div className="header4">
                        <Badge propHeight="15px" propMinWidth="unset" />
                        <div className="title15">WiFi Security Camera</div>
                      </div>
                    </div>
                    <div className="container4">
                      <div className="header5">
                        <div className="title7">Minimum Bid</div>
                      </div>
                      <div className="price8">$100</div>
                    </div>
                    <div className="container4">
                      <div className="header5">
                        <div className="title7">Current Bid</div>
                      </div>
                      <div className="price9">$157</div>
                    </div>
                    <div className="paragraph1">
                      <div className="ends-in1">
                        Ends in : 1 day 12 hrs 43 minutes
                      </div>
                    </div>
                  </div>
                  <div className="buttons1">
                    <div className="cta3">
                      <div className="layout1">
                        <div className="label6">Bid now</div>
                      </div>
                      <img
                        className="right-icon2"
                        alt=""
                        src="/right-icon-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <img className="home-child" alt="" src="/vector-11.svg" />
      <div className="testimonial-container-wrapper">
        <div className="testimonial-container">
          
  
        </div>
      </div>
      <FrameComponent />
    </div>
    
  );
};

export default Home;
