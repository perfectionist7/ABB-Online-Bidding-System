import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header4 from "../components/Header4";
import Product from "../components/Product";
import Badge from "../components/Badge";
import Productlight from "../components/Productlight";
import Productlight1 from "../components/Productlight1";
import Productlight2 from "../components/Productlight2";
import Productlight3 from "../components/Productlight3";
import "./Home3.css";
import FrameComponent from "../components/FrameComponent";

const Home3 = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  const onDropdownListItemClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="home2" onClick={onHomeContainerClick}>
      <div className="dropdown">
        <div className="frame-div">
          <div className="mandatory-parent">
            <div className="mandatory">*</div>
            <div className="label10">Label</div>
          </div>
          <div className="input-box">
            <div className="item">Showing all</div>
            <img className="status-line-icon" alt="" src="/status-line.svg" />
            <img className="caret-down-icon" alt="" src="/caretdown.svg" />
          </div>
        </div>
        <div className="check-mark-circle-1-parent">
          <img
            className="check-mark-circle-1-icon"
            alt=""
            src="/checkmarkcircle1.svg"
          />
          <div className="description">Description</div>
        </div>
        <div className="list">
          <div className="list-child" />
          <div className="search">
            <div className="frame-parent1">
              <div className="mandatory-group">
                <div className="mandatory1">*</div>
                <div className="mandatory1">Label</div>
              </div>
              <div className="input-box1">
                <img
                  className="abb-placeholder-icon"
                  alt=""
                  src="/abb-placeholder.svg"
                />
                <div className="value-text">Search</div>
                <img
                  className="status-line-icon1"
                  alt=""
                  src="/status-line.svg"
                />
                <img
                  className="abb-search-alternate-icon"
                  alt=""
                  src="/abb-searchalternate@2x.png"
                />
              </div>
            </div>
            <div className="abb-check-circle-1-parent">
              <img
                className="abb-check-circle-1-icon"
                alt=""
                src="/abb-checkcircle1@2x.png"
              />
              <div className="description1">Description</div>
            </div>
          </div>
          <div className="list-item-01">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-02">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-03">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-04">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-05">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-06">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-07">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-08">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-09">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
          <div className="list-item-10">
            <div className="checkbox">
              <div className="check-mark-wrapper">
                <img
                  className="check-mark-circle-1-icon"
                  alt=""
                  src="/checkmark.svg"
                />
              </div>
              <div className="label-text">Label Text</div>
            </div>
            <img
              className="check-mark-circle-1-icon"
              alt=""
              src="/abb-placeholder.svg"
            />
            <div className="description">List Item</div>
          </div>
        </div>
      </div>
      <main className="main">
        <Header4 />
        <section className="products-wrapper-wrapper">
          <div className="products-wrapper">
            <div className="product-cards">
              <div className="product-card">
                <div className="first-product">
                  <h1 className="welcome-olivia">
                    <span>{`Welcome `}</span>
                    <span className="olivia">Olivia!</span>
                  </h1>
                  <div className="product-details1">
                    <Product
                      propFlex="unset"
                      propMinWidth="unset"
                      propWidth="unset"
                      propBackgroundImage="url('/image@3x.png')"
                      propHeight1="unset"
                      propAlignSelf="unset"
                      propWidth1="unset"
                      propMinWidth2="59px"
                      propHeight2="unset"
                      propAlignSelf1="unset"
                      propWidth2="unset"
                      propMinWidth3="54px"
                      propHeight3="unset"
                      propAlignSelf2="unset"
                      propAlignSelf3="unset"
                      propWidth3="unset"
                      propAlignSelf4="unset"
                      propFlex1="unset"
                      propDisplay="inline-block"
                      propMinWidth4="59px"
                    />
                    <div className="productlight4">
                      <div className="image5">
                        <img
                          className="image-1-icon1"
                          alt=""
                          src="/image-1@2x.png"
                        />
                        <div className="like5">
                          <img
                            className="icon5"
                            loading="lazy"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="content5">
                          <div className="container15">
                            <div className="header16">
                              <Badge propHeight="unset" propMinWidth="70px" />
                              <div className="title18">
                                Apple AirPod 2nd Gen
                              </div>
                            </div>
                          </div>
                          <div className="container16">
                            <div className="text-and-supporting-text">
                              <div className="title19">Minimum Bid</div>
                            </div>
                            <div className="price10">$80</div>
                          </div>
                          <div className="container16">
                            <div className="text-and-supporting-text">
                              <div className="title19">Current Bid</div>
                            </div>
                            <div className="price11">$95</div>
                          </div>
                          <div className="paragraph5">
                            <div className="ends-in5">
                              Ends in : 1 day 12 hrs 43 minutes
                            </div>
                          </div>
                        </div>
                        <div className="buttons5">
                          <div className="cta7">
                            <div className="layout5">
                              <div className="label12">Bid now</div>
                            </div>
                            <img
                              className="right-icon6"
                              loading="lazy"
                              alt=""
                              src="/right-icon-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productlight4">
                      <div className="image6">
                        <img
                          className="image-2-icon2"
                          alt=""
                          src="/image-21@2x.png"
                        />
                        <div className="like6">
                          <img
                            className="icon5"
                            loading="lazy"
                            alt=""
                            src="/icon-1.svg"
                          />
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="content5">
                          <div className="container15">
                            <div className="header16">
                              <Badge propHeight="unset" propMinWidth="70px" />
                              <div className="title18">
                                Mi 3i 20000mAh Power Bank
                              </div>
                            </div>
                          </div>
                          <div className="container16">
                            <div className="text-and-supporting-text">
                              <div className="title19">Minimum Bid</div>
                            </div>
                            <div className="price10">$40</div>
                          </div>
                          <div className="container16">
                            <div className="text-and-supporting-text">
                              <div className="title19">Current Bid</div>
                            </div>
                            <div className="price13">$46</div>
                          </div>
                          <div className="paragraph5">
                            <div className="ends-in5">
                              Ends in : 1 day 12 hrs 43 minutes
                            </div>
                          </div>
                        </div>
                        <div className="buttons5">
                          <div className="cta7">
                            <div className="layout5">
                              <div className="label12">Bid now</div>
                            </div>
                            <img
                              className="right-icon6"
                              loading="lazy"
                              alt=""
                              src="/right-icon-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productlight4">
                      <div className="image6">
                        <img
                          className="image-3-icon1"
                          alt=""
                          src="/image-3@2x.png"
                        />
                        <div className="like6">
                          <img
                            className="icon5"
                            loading="lazy"
                            alt=""
                            src="/icon-1.svg"
                          />
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="content5">
                          <div className="container15">
                            <div className="header16">
                              <Badge propHeight="unset" propMinWidth="70px" />
                              <div className="title18">
                                Tribit Bluetooth Speaker
                              </div>
                            </div>
                          </div>
                          <div className="container16">
                            <div className="text-and-supporting-text">
                              <div className="title19">Minimum Bid</div>
                            </div>
                            <div className="price14">$10</div>
                          </div>
                          <div className="container16">
                            <div className="text-and-supporting-text">
                              <div className="title19">Current Bid</div>
                            </div>
                            <div className="price15">$15</div>
                          </div>
                          <div className="paragraph5">
                            <div className="ends-in5">
                              Ends in : 1 day 12 hrs 43 minutes
                            </div>
                          </div>
                        </div>
                        <div className="buttons5">
                          <div className="cta7">
                            <div className="layout5">
                              <div className="label12">Bid now</div>
                            </div>
                            <img
                              className="right-icon6"
                              loading="lazy"
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
              <div className="productlight-group">
                <div className="productlight7">
                  <div className="image5">
                    <img
                      className="image-4-icon1"
                      alt=""
                      src="/image-4@2x.png"
                    />
                    <div className="like6">
                      <img
                        className="icon5"
                        loading="lazy"
                        alt=""
                        src="/icon-1.svg"
                      />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="content5">
                      <div className="container15">
                        <div className="header16">
                          <Badge propHeight="unset" propMinWidth="70px" />
                          <div className="title27">WiFi Security Camera</div>
                        </div>
                      </div>
                      <div className="container16">
                        <div className="text-and-supporting-text">
                          <div className="title19">Minimum Bid</div>
                        </div>
                        <div className="price16">$100</div>
                      </div>
                      <div className="container16">
                        <div className="text-and-supporting-text">
                          <div className="title19">Current Bid</div>
                        </div>
                        <div className="price17">$157</div>
                      </div>
                      <div className="paragraph5">
                        <div className="ends-in5">
                          Ends in : 1 day 12 hrs 43 minutes
                        </div>
                      </div>
                    </div>
                    <div className="buttons5">
                      <div className="cta7">
                        <div className="layout5">
                          <div className="label12">Bid now</div>
                        </div>
                        <img
                          className="right-icon6"
                          loading="lazy"
                          alt=""
                          src="/right-icon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-menu">
                  <div className="dropdown-list-header">
                    <div className="avatar-label-group">
                      <div className="avatar">
                        <div className="avatar-online-indicator" />
                      </div>
                      <div className="text-and-supporting-text">
                        <div className="text2">Olivia Rhye</div>
                        <div className="supporting-text">
                          olivia@untitledui.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="dropdown-menu-base">
                    <div className="option-item">
                      <div className="option-content">View profile</div>
                    </div>
                    <div className="option-icon">
                      <div className="text3">Settings</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="option-item2">
                      <div className="option-icon">
                        <div className="option-title">My bids</div>
                      </div>
                      <div className="divider1" />
                      <div className="option-icon">
                        <div className="icon-label">Credit cards</div>
                      </div>
                    </div>
                    <div className="option-item">
                      <div className="text9">My Auctions</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="option-item2">
                      <div className="option-item">
                        <div className="text15">Invite colleagues</div>
                      </div>
                      <div className="divider1" />
                      <div className="option-icon">
                        <div className="text16">Notifications</div>
                      </div>
                    </div>
                    <div className="option-icon">
                      <div className="text17">Community</div>
                    </div>
                    <div className="option-icon">
                      <div className="text18">Support</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="dropdown-list-item">
                      <div className="text4">List item</div>
                    </div>
                    <div className="logout-option">
                      <div className="option-icon">
                        <div className="text23">API</div>
                      </div>
                      <div
                        className="dropdown-list-item14"
                        onClick={onDropdownListItemClick}
                      >
                        <div className="divider3" />
                        <div className="option-icon">
                          <div className="divider-title">Log out</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-grid">
              <Productlight
                propFlex="0.8923"
                propMinWidth="291px"
                propWidth="unset"
                containerHeight="unset"
                containerMinWidth="70px"
              />
              <Productlight1
                propFlex="1"
                propMinWidth="291px"
                propWidth="unset"
                propBackgroundImage="url('/image@3x.png')"
                image1="/image-1@2x.png"
                propTop="-24px"
                title="Apple AirPod 2nd Gen"
                price="$80"
                propWidth1="47px"
                price1="$95"
                propWidth2="45px"
              />
              <Productlight2
                propFlex="1"
                propMinWidth="291px"
                propWidth="unset"
                propBackgroundImage="url('/image1@3x.png')"
                image2="/image-21@2x.png"
              />
              <Productlight3
                propFlex="1"
                propMinWidth="291px"
                propWidth="unset"
                propBackgroundImage="url('/image1@3x.png')"
                image3="/image-3@2x.png"
              />
              <Productlight1
                propFlex="1"
                propMinWidth="291px"
                propWidth="unset"
                propBackgroundImage="url('/image@3x.png')"
                image1="/image-4@2x.png"
                propTop="-45px"
                title="WiFi  Security Camera"
                price="$100"
                propWidth1="59px"
                price1="$157"
                propWidth2="54px"
              />
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Home3;
